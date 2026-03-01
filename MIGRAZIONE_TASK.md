# Migrazione AI THINGS -> ATN-style

Data aggiornamento: 12 Feb 2026

## Stack scelto
- Framework: Astro (multi-page static)
- Styling: CSS custom + utility Tailwind CDN per compatibilita con markup dinamico JS
- Runtime: JavaScript vanilla in `public/scripts/app.js`
- QA: smoke test Playwright (`scripts/smoke-test.mjs`)

Nota tecnica: il sito ATN di riferimento risulta costruito con Webflow (non Next.js).

## Stato generale
- [x] Progetto multi-page creato in `ai-things-atn/`
- [x] Routing pagine: `/`, `/explorer`, `/titans`, `/mcp`, `/docs`, `/code-review`
- [x] Layout condiviso con header, nav, footer, modali e chat
- [x] Porting logica JS con guard multi-page
- [x] Redesign visuale completo stile ATN-like (home + pagine operative)
- [x] Build e smoke test verdi

## Task dettagliati

### 1) Setup e struttura
- [x] Creata struttura Astro (`src/pages`, `src/layouts`, `src/styles`, `public/scripts`, `public/assets`)
- [x] Spostati file legacy in `legacy/` per riferimento
- [x] Script npm adattati per ambiente Windows

### 2) Layout globale
- [x] Creato `src/layouts/BaseLayout.astro`
- [x] Inseriti controlli globali: status, guida, API key, lingua EN/IT
- [x] Inserite modali globali: chat, API key, manuale
- [x] Sistemata logica active nav con pathname normalizzato

### 3) Migrazione pagine
- [x] `src/pages/index.astro` (home dashboard)
- [x] `src/pages/explorer.astro`
- [x] `src/pages/titans.astro`
- [x] `src/pages/mcp.astro`
- [x] `src/pages/docs.astro`
- [x] `src/pages/code-review.astro`
- [x] Conservati tutti gli ID usati da `app.js`

### 4) Styling ATN-like
- [x] Rifatto `src/styles/global.css` con design system (colori, tipografia, componenti)
- [x] Introdotte sezioni hero, cards modulari, pannelli briefing e risultati
- [x] Aggiornati componenti review e chat
- [x] Responsive desktop/tablet/mobile

### 5) JavaScript e funzioni
- [x] Search Explorer/Titans/MCP/Docs
- [x] Code Review workflow (input, tab, output)
- [x] Chat NEXUS e modal actions
- [x] I18N e stato sistema
- [x] Cache locale e fallback robusti

### 6) QA
- [x] `npm.cmd run build`
- [x] `npm.cmd run test:smoke` con preview server
- [x] Verifica selettori critici e assenza page errors

## Comandi utili
```bash
npm.cmd install
npm.cmd run dev
npm.cmd run build
npm.cmd run preview
npm.cmd run test:smoke
```

## Prossimi step consigliati
- [ ] Sessione tuning UI su contenuti reali (copy, spacing, hierarchy)
- [ ] Test manuale su mobile reale (iOS/Android)
- [ ] Ottimizzazione performance (riduzione dipendenza CDN utility)
- [ ] Deploy (Netlify/Vercel/Cloudflare Pages)
