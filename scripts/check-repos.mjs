// Weekly health check for the curated repo lists and the NEXUS Gemini model chain.
// Usage: node scripts/check-repos.mjs [--fix-renames] [--report <file>]
// Needs GITHUB_TOKEN in the environment (the Actions token is enough).
import fs from 'node:fs';

const APP_JS = 'public/scripts/app.js';
const STALE_MONTHS = 12;
const args = process.argv.slice(2);
const fixRenames = args.includes('--fix-renames');
const reportFile = args.includes('--report') ? args[args.indexOf('--report') + 1] : null;
const token = process.env.GITHUB_TOKEN;
if (!token) throw new Error('GITHUB_TOKEN is required');

const source = fs.readFileSync(APP_JS, 'utf8');

// Read a `const NAME = { ... };` / `[ ... ]` literal from app.js and evaluate it as data.
function readLiteral(name) {
    const start = source.indexOf(`const ${name} =`);
    if (start === -1) throw new Error(`${name} not found in ${APP_JS}`);
    const open = source.slice(start).search(/[[{]/) + start;
    const closeChar = source[open] === '{' ? '}' : ']';
    let depth = 0, inString = null;
    for (let i = open; i < source.length; i++) {
        const c = source[i];
        if (inString) {
            if (c === '\\') i++;
            else if (c === inString) inString = null;
            continue;
        }
        if (c === '"' || c === "'" || c === '`') inString = c;
        else if (c === source[open]) depth++;
        else if (c === closeChar && --depth === 0) {
            return new Function(`return ${source.slice(open, i + 1)};`)();
        }
    }
    throw new Error(`Could not parse ${name}`);
}

const lists = { REPO_THEMES: readLiteral('REPO_THEMES'), TITAN_THEMES: readLiteral('TITAN_THEMES') };
const geminiChain = readLiteral('GEMINI_MODEL_CHAIN');

// --- 1. Data consistency -------------------------------------------------
const consistency = [];
const usage = new Map(); // id -> ["REPO_THEMES.core", ...]
for (const [listName, themes] of Object.entries(lists)) {
    for (const [key, theme] of Object.entries(themes)) {
        const seen = new Set();
        for (const item of theme.items || []) {
            const where = `${listName}.${key}`;
            if (!item.id || !/^[\w.-]+\/[\w.-]+$/.test(item.id)) {
                consistency.push(`\`${where}\`: id non valido \`${item.id}\``);
                continue;
            }
            const lower = item.id.toLowerCase();
            if (seen.has(lower)) consistency.push(`\`${where}\`: \`${item.id}\` è presente due volte`);
            seen.add(lower);
            for (const lang of ['it', 'en']) {
                if (!item.why || !String(item.why[lang] || '').trim()) {
                    consistency.push(`\`${where}\`: \`${item.id}\` non ha \`why.${lang}\``);
                }
            }
            if (!usage.has(item.id)) usage.set(item.id, []);
            usage.get(item.id).push(where);
        }
    }
}

// --- 2. GitHub status of every repo -------------------------------------
async function gh(path) {
    const res = await fetch(`https://api.github.com/${path}`, {
        headers: { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github+json', 'User-Agent': 'repo-health-check' },
    });
    if (res.status === 404) return null;
    if (!res.ok) throw new Error(`GitHub API ${res.status} on ${path}`);
    return res.json();
}

const archived = [], missing = [], renamed = [], stale = [];
const staleBefore = new Date();
staleBefore.setMonth(staleBefore.getMonth() - STALE_MONTHS);

for (const id of usage.keys()) {
    const repo = await gh(`repos/${id}`); // GitHub follows renames/transfers with a redirect
    const where = usage.get(id).map(w => `\`${w}\``).join(', ');
    if (!repo) { missing.push(`\`${id}\` (${where})`); continue; }
    if (repo.full_name.toLowerCase() !== id.toLowerCase()) renamed.push({ from: id, to: repo.full_name, where });
    if (repo.archived) archived.push(`\`${repo.full_name}\` (${where})`);
    else if (new Date(repo.pushed_at) < staleBefore) {
        stale.push(`\`${repo.full_name}\`: ultimo push ${repo.pushed_at.slice(0, 10)} (${where})`);
    }
}

// --- 3. Gemini models used by NEXUS --------------------------------------
async function doc(path) {
    const res = await fetch(`https://ai.google.dev/gemini-api/docs/${path}.md.txt`);
    if (!res.ok) throw new Error(`Gemini docs ${res.status} on ${path}`);
    return res.text();
}

const gemini = [];
const [modelsDoc, deprecationsDoc] = await Promise.all([doc('models'), doc('deprecations')]);
const depLines = deprecationsDoc.split('\n').map(l => l.trim());
for (const model of geminiChain) {
    if (!modelsDoc.includes(`\`${model}\``) && !modelsDoc.includes(`**${model}**`)) {
        gemini.push(`\`${model}\` non compare più nella pagina dei modelli Gemini`);
    }
    // Deprecations table rows are bullet lists: model, release date, shutdown date, replacement.
    const row = depLines.indexOf(`* \`${model}\``);
    if (row !== -1) {
        const shutdown = (depLines[row + 2] || '').replace(/^\*\s*/, '');
        const replacement = (depLines[row + 3] || '').replace(/^\*\s*/, '');
        if (shutdown && !/no shutdown date/i.test(shutdown)) {
            gemini.push(`\`${model}\` verrà ritirato dal ${shutdown}${replacement.startsWith('`') ? `, sostituto indicato: ${replacement}` : ''}`);
        }
    }
}

// --- 4. Apply renames ----------------------------------------------------
if (fixRenames && renamed.length) {
    let updated = source;
    for (const { from, to } of renamed) updated = updated.split(`id: "${from}"`).join(`id: "${to}"`);
    fs.writeFileSync(APP_JS, updated);
}

// --- 5. Report -----------------------------------------------------------
const section = (title, items) => items.length ? `### ${title} (${items.length})\n\n${items.map(i => `- ${i}`).join('\n')}\n` : '';
const problems = archived.length + missing.length + renamed.length + consistency.length + gemini.length;
const report = [
    `Controllati ${usage.size} repo e ${geminiChain.length} modelli Gemini il ${new Date().toISOString().slice(0, 10)}.\n`,
    section('Da sistemare: repo archiviati', archived),
    section('Da sistemare: repo non trovati', missing),
    section('Da sistemare: repo rinominati o spostati', renamed.map(r => `\`${r.from}\` → \`${r.to}\` (${r.where})`)),
    section('Da sistemare: coerenza dei dati', consistency),
    section('Da sistemare: modelli Gemini di NEXUS', gemini),
    section(`Da valutare: nessun push da oltre ${STALE_MONTHS} mesi`, stale),
    problems === 0 ? 'Niente da sistemare.\n' : '',
].filter(Boolean).join('\n');

console.log(report);
if (reportFile) fs.writeFileSync(reportFile, report);
if (process.env.GITHUB_OUTPUT) {
    fs.appendFileSync(process.env.GITHUB_OUTPUT, `problems=${problems}\nrenames=${renamed.length}\n`);
}
