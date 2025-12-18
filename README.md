## AI THINGS // AI NEXUS — Knowledge Explorer V2

A cyberpunk **knowledge explorer** for the AI ecosystem with an integrated assistant, **NEXUS AI**, that guides you, explains concepts, and helps you analyze repositories and stacks.

### 🌐 Live Demo

**[Visit the live site →](https://giacomomarani.github.io/AI-THINGS/)**  
(This local version corresponds to V2 with AI NEXUS integrated.)

### 🎯 Core Features

AI THINGS now combines the explorer with a neural assistant:

- **KNOWLEDGE EXPLORER**:  
  Explore open-source repositories, frameworks, and guides organized by category. Filter, search, and quickly open the key resources of the AI ecosystem.

- **CORPORATE STACKS (TITANS)**:  
  A dedicated view for Big Tech stacks (Google, Microsoft, OpenAI, Meta, etc.): frameworks used, managed services, architectural patterns.

- **MCP PROTOCOL**:  
  A map of MCP (Model Context Protocol) servers that connect LLMs (Claude/GPT, etc.) to real tools, APIs, and databases.

- **OFFICIAL DOCS**:  
  A curated collection of official documentation: API references, guides, and model/service overviews from major AI providers.

- **NEXUS AI (Integrated Chat)**:  
  A neural assistant always available in the UI:
  - **Tutor mode**: explains AI concepts in simple language (EN/IT, depending on UI).
  - **Repo / code analysis** via the **“ASK NEXUS”** button.
  - Interactive system guide (manual, best practices, briefings).

### 🤖 AI NEXUS – How It Works

- **Identity**: NEXUS is an AI tutor and code auditor, with different system prompts for:
  - didactic explanations (EN/IT),
  - tactical analysis of repositories / tech stacks,
  - practical guidance for first steps in AI.
- **Gemini Integration**:
  - Uses the **Google Gemini API** on the client side.
  - The key is requested via a small authentication panel.
  - The API key is stored **locally in the browser** (localStorage).
- **UI**:
  - Floating button (icon `tongue.png`) to open the **NEXUS AI** chat.
  - **“ASK NEXUS”** button to automatically send context / selections to NEXUS.
  - Resizable chat layout with **popup** and **expanded** modes.

### 🧭 NEXUS Usage Flows

Below are some typical NEXUS usage scenarios inside AI THINGS.

#### 1. Onboarding / “Tell me where to start with AI”

- **Goal**: help beginners understand where to start.
- **Steps**:
  1. Open the chat via the floating button (red NEXUS icon).
  2. Type something like:  
     > “I’m just starting out, I want to learn AI to work as a developer, where do I begin?”  
  3. NEXUS replies with:
     - a simple explanation of the key concepts (LLMs, datasets, inference, etc.),
     - suggestions for tools / first projects,
     - links (from Explorer / Docs views) to jump straight to relevant resources.

**Recommended prompts to copy into NEXUS:**

```text
I'm just starting and I want to get into AI as a developer. Give me a 3-stage learning path (beginner, intermediate, advanced) with practical resources to follow.
```

```text
I already have programming experience but not machine learning. List the key concepts and technologies I should learn before I dive into generative models.
```

#### 2. Concept Tutor (friendly “professor mode”)

- **Goal**: clarify specific (even technical) concepts in accessible language.
- **Steps**:
  1. Open the NEXUS chat.
  2. Ask focused questions, for example:
     - “Explain how a transformer works with a simple example.”
     - “What’s the difference between fine-tuning and prompt engineering?”
     - “How do I use an LLM in production safely?”
  3. NEXUS always responds:
     - in natural language (EN/IT, depending on the UI language),
     - with practical examples,
     - with a final section like “what to do next” (actionable steps).

**Recommended prompts to copy into NEXUS:**

```text
Explain how a transformer model works using a concrete example (like translation or a chatbot), then summarize it in 5 ultra-simple bullet points.
```

```text
Create a table showing the difference between: fine-tuning, prompt engineering, and RAG.
For each row add: what it means, when to use it, pros/cons.
```

#### 3. Tactical analysis of a GitHub repository (via **ASK NEXUS**)

- **Goal**: get a “tactical briefing” of an AI project.
- **Typical steps**:
  1. From the **KNOWLEDGE EXPLORER** view, select an interesting repository.
  2. Click **“ASK NEXUS”** (when available next to the repo / card).
  3. The system sends to NEXUS:
     - repository name,
     - short description / tags,
     - (optional) GitHub URL for context.
  4. NEXUS returns a Markdown **tactical briefing** with sections like:
     - “Core Function – what does this repo do?”
     - “Tech Stack – main languages and frameworks.”
     - “Use Cases – when / why you’d use it.”
     - “Risk & Caveat – limits, dependencies, things to know before using it.”

**Recommended prompts to copy into NEXUS (if you paste the URL yourself):**

```text
Analyze this GitHub repository: [PASTE URL HERE].
Give me a tactical briefing with these sections:
1) Core Function
2) Tech Stack
3) Use Cases
4) Risks / Caveats
5) Who it's best suited for (team type / skills).
```

```text
Look at this repo: [PASTE URL HERE].
In at most 10 bullets, I want to understand: what it does, what dependencies it has, how mature it is, and what problems I might hit in production.
```

#### 4. Comparing stacks (TITANS / Corporate Stacks view)

- **Goal**: understand how Big Tech operates and what you can reuse.
- **Steps**:
  1. Go to the **TITANS / Corporate Stacks** view.
  2. Explore the stack of a Big Tech company (e.g. Meta, Google).
  3. Use the NEXUS chat to ask:
     - “What’s the difference between Google’s AI stack and Microsoft’s?”
     - “Which parts of this stack have open-source alternatives?”
  4. NEXUS summarizes:
     - main components,
     - trade-offs between managed services and open source,
     - possible “inspired by enterprise” but more accessible stacks for small teams.

**Recommended prompts to copy into NEXUS:**

```text
Compare a typical AI stack from Google with one from Microsoft.
Highlight: main services, common use cases, vendor lock-in risks, and open-source alternatives.
```

```text
I want to take inspiration from a Big Tech AI stack but I have a small team and limited budget.
Propose an "enterprise-style" but accessible stack with minimal managed services and as much open source as possible.
```

#### 5. Guided navigation of documentation (OFFICIAL DOCS view)

- **Goal**: avoid getting lost in provider documentation portals.
- **Steps**:
  1. Open the **OFFICIAL DOCS** view.
  2. Click on provider links (OpenAI, Google, Anthropic, etc.).
  3. In parallel, ask NEXUS:
     - “I’m looking at [provider X] docs, where do I start if I only want to generate text?”
     - “Which page explains how to authenticate and make the first API call?”
  4. NEXUS responds with:
     - a recommended path through the docs,
     - 2–3 key endpoints to check to get started,
     - a minimum checklist for going to production (keys, quota, logging, safety).

**Recommended prompts to copy into NEXUS:**

```text
I'm looking at [PROVIDER NAME] documentation to use a text model.
Tell me: the best page to start from, a minimal API call example, and a checklist of things I must configure before going to production.
```

```text
Give me a super concise "first API call" guide for [PROVIDER NAME]:
1) Where to create the API key
2) Which endpoint to use
3) Example request
4) What I should log/monitor to stay safe in production.
```

### 🚀 Technical Features

- **Real-time search** across AI resources with advanced filters.
- **Multi-language support** (Italian / English) for UI and system prompts.
- **Cyberpunk interface**: dark theme, neon cyan/magenta accents, grid background.
- **Responsive design** optimized for desktop and mobile.
- **Glass Morphism UI** for main panels and cards.
- **Smooth animations** and micro-interactions (hover, transitions, dynamic shadows).
- **Integrated AI assistant** with:
  - Markdown parsing (via `marked.js`) for formatted responses,
  - copy button on messages,
  - system messages tailored by language and mode.

### 🛠️ Technologies

- **Pure HTML / CSS / JavaScript** – no build step required.
- **Tailwind CSS via CDN** – utility-first CSS for layout and spacing.
- **IBM Plex Mono** – monospace font for a cyberpunk/terminal look.
- **Google Gemini API** – AI backend for NEXUS AI (side-car via REST).
- **Marked.js** – Markdown rendering for assistant responses.

### 📦 Installation & Usage

No server-side installation is required. To use the project locally:

```bash
git clone https://github.com/GiacomoMarani/AI-THINGS.git
cd AI-THINGS
# Open index.html in your browser
```

Or visit the live version:  
`https://giacomomarani.github.io/AI-THINGS/`

To enable **NEXUS AI**:

1. Open the site (local or live).
2. Click the button to set your **Google Gemini API Key**.
3. Paste the key created in Google AI Studio.
4. Use the floating button (red icon) to open the NEXUS chat, or the **“ASK NEXUS”** button in supported views.

### 🎨 Design & Layout V2

The V2 interface introduces several layout improvements:

- Compact header with **pill tabs** for different modes (Explorer, Titans, MCP, Docs).
- **Briefing panel** explaining the context of the current view.
- Cards with **glass morphism**, higher-contrast borders, and improved accessibility.
- NEXUS chat with:
  - expand button for a large-window mode,
  - formatted messages (headings, lists, code),
  - loading state (“Scanning…”) for in-progress requests.

### 📁 Project Structure

```text
AI-THINGS/
├── index.html   # Main application (UI + NEXUS AI logic)
├── logo.ico     # Favicon
├── preview.png  # Preview image for social / README
├── tongue.png   # Floating NEXUS AI button icon
└── README.md    # This file
```

### 🔧 Development

The project is a **single-page static app**:

- All logic (explorer + NEXUS) lives in `index.html`.
- You can directly edit HTML/CSS/JS and reload the page.
- To deploy on GitHub Pages, simply push to the configured branch.

### 📝 License

This project is open source and available for exploration and learning.

### 👤 Author

**Giacomo Marani**  
- Email: `ing.giacomo.marani@gmail.com`  
- GitHub: [@GiacomoMarani](https://github.com/GiacomoMarani)

### 🤝 Contributing

Issues, suggestions, and feature requests are welcome. Feel free to open an issue or a PR.

---

*Built with ❤️, cyberpunk vibes & NEXUS AI*

