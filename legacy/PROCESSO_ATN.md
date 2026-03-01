# Processo: Rebuild stile ATN + funzioni AI THINGS

Questo documento descrive un processo dettagliato per ricreare il sito in uno stile ispirato alla pagina ATN, mantenendo e riusando le funzioni e la logica dell'attuale `index.html`.

## Obiettivo
Creare un sito dinamico multi‑page che:
1. Mantenga tutte le funzioni esistenti (Explorer, Titans, MCP, Docs, Code Review, Chat, I18N, API key, ecc.).
2. Adotti una direzione visiva ispirata ad ATN (nero, tipografia grande, layout a blocchi, CTA forti, timeline/stepper, FAQ ad accordion, progress nav).
3. Resti leggero e accessibile, senza perdere le performance o la chiarezza del prodotto.

## Vincoli e scelte chiave
1. Non copiare asset o testi del sito ATN. Solo ispirazione di stile e pattern UI.
2. Non rimuovere funzioni attuali: la UI si trasforma, la logica JS resta.
3. Evitare dipendenze pesanti non necessarie.
4. Mantieni la pagina responsive e fruibile anche senza JS (progressive enhancement).

## Inventario funzioni attuali (da preservare)
1. Navigazione a tab: `view-explorer`, `view-titans`, `view-mcp`, `view-docs`, `view-code-review`.
2. Ricerca globale + filtri per categorie in ogni view.
3. Cards con risultati dinamici (GitHub, Docs, MCP, ecc).
4. Code Review panel con tab, output, log, summary e spinner.
5. Chat NEXUS con modal flottante, history e copy-to-clipboard.
6. Manual/Guide modal con contenuti generati in JS.
7. Gestione API key (prompt e localStorage).
8. I18N IT/EN con switch linguistico.
9. Indicatori di stato e messaggi di errore/limit.

## Estetica ATN: pattern da replicare (senza clonare)
1. Tipografia grande e condensata per titoli, con body sobrio.
2. Nero dominante, contrasti alti, grigi calibrati.
3. CTA "piene" con bordi netti, hover decisi.
4. Sezioni ampie, molto spazio verticale, blocchi editoriali.
5. Layout con elementi sticky (nav o colonne).
6. Timeline/stepper verticali per "How to".
7. FAQ con accordion puliti, senza rumore visivo.
8. Griglie di sponsor/loghi con ritmo regolare.

## Strategia di integrazione (multi‑page)
Si passa da single‑page a multi‑page mantenendo la logica JS:
1. Layout condiviso (header, nav, footer, chat, modali, theme tokens).
2. Ogni view diventa una pagina dedicata (route):
   - `/` (home/overview)
   - `/explorer`
   - `/titans`
   - `/mcp`
   - `/docs`
   - `/code-review`
3. Progress nav in alto o laterale con stato attivo in base alla pagina.
4. Le aree dinamiche (cards, grid) restano ma vengono restilizzate con pattern ATN.

## Design Tokens da introdurre
Definire in `:root` un set ridotto ma forte:
1. `--bg`: nero profondo.
2. `--fg`: bianco caldo.
3. `--muted`: grigi per testo secondario.
4. `--accent-1`: arancio o rosso.
5. `--accent-2`: viola o blu elettrico.
6. `--line`: grigio per bordi sottili.
7. `--radius`: 0 o leggero (ATN tende a bordi netti).
8. `--space`: sistema di spaziature coerente (es. scale 4/8/16/32/64).

## Piano operativo dettagliato

### Fase 1: Audit e mappatura
1. Mappa le sezioni e componenti dell'attuale `index.html`.
2. Definisci quali componenti sono "core" (must keep).
3. Elenca quali pattern ATN adottare per ciascun componente.

Output: una tabella di mapping.

Esempio di mapping (da completare):
1. Nav tab attuale -> progress nav in alto con bottoni numerati.
2. Hero attuale -> hero con titolo forte, sottotitolo e CTA.
3. Cards -> cards a griglia con bordi sottili e hover.
4. FAQ -> accordion pulito.
5. Code Review -> sezione editoriale con box laterali.

### Fase 2: Ristrutturazione multi‑page
1. Estrai un layout comune (header, nav, footer, modali).
2. Crea una pagina per ogni view con i propri contenuti.
3. Mantieni ID e classi usati dal JS, non rinominarli.
4. Centralizza gli script condivisi in un file unico (es. `app.js`).

### Fase 3: Nuova CSS base
1. Reset minimale e set di variabili globali.
2. Tipografia: titolo molto grande, corpo pulito.
3. Layout: griglie a colonne, sezioni con padding generoso.
4. Bordi e separatori: linee sottili, spaziature forti.
5. Cards e modali: fondo nero con bordi netti, testo chiaro.

### Fase 4: Componenti "ATN-like"
1. Progress nav con indicatori e animazioni leggere.
2. CTA principali con stile pieno e animazione hover.
3. Timeline/stepper per "How to" o processi interni.
4. Accordion per FAQ o guide.
5. Sponsor grid per partner, se utile al progetto.

### Fase 5: Motion e dinamiche
1. Animazioni di reveal on scroll (leggere).
2. Smooth scroll opzionale (es. solo se richiesto).
3. Micro-interazioni su CTA e nav.

Nota: evitare librerie pesanti se non servono.

### Fase 6: Accessibilita e performance
1. Contrasto testo minimo AA.
2. Focus states visibili.
3. Ridurre motion se `prefers-reduced-motion` attivo.
4. Controllo CLS (no layout shift in hover).
5. Lazy loading per immagini e contenuti pesanti.

### Fase 7: QA e checklist
1. Tutte le view caricano e funzionano.
2. Search, tab switch e modali invariati.
3. Mobile: nav accessibile e CTA raggiungibili.
4. Test senza JS: la pagina resta leggibile.
5. Test API key flow e chat.

## Scelta stack (da decidere)
Opzioni:
1. **Next.js**: routing, layout condivisi, build moderna. Ottimo se vuoi un “progetto completo” con possibilità future.
2. **Astro**: statico veloce con componenti, ottimo per siti informativi con JS mirato.
3. **Static multi‑page**: semplice, zero build, solo HTML/CSS/JS modulari.

Decisione consigliata: **Astro**. Motivazioni:
1. È static‑first, simile a Webflow ma con controllo totale del codice.
2. Gestisce bene un sito multi‑page con layout condivisi.
3. Consente JS mirato senza caricare un framework completo.
4. Più leggero di Next.js per questo caso d’uso.

## Output attesi
1. `index.html` restilizzato e riorganizzato.
2. Un set di variabili CSS chiaro e riusabile.
3. Componenti coerenti con la nuova direzione visiva.
4. Nessuna regressione funzionale.

## Deliverable extra (opzionale)
1. `style-guide.md` con tokens e componenti.
2. `changelog.md` con diff sintetico.

## Note finali
La conversione non deve essere un "clone" di ATN. L'obiettivo e assorbire ritmo, scale, tipografia e layout, mantenendo un'identita propria e la funzionalita di AI THINGS.
