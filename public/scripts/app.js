// --- I18N ---
const I18N = {
    it: {
        system_status: "STATO_SISTEMA: ONLINE",
        nav_explorer: "EXPLORER",
        nav_titans: "TITANS",
        nav_mcp: "MCP",
        nav_docs: "DOCS",
        select_player: "SELEZIONA PLAYER",
        search_placeholder: "ACCESS DATABASE: Cerca concetti...",
        loading: "CARICAMENTO INTELLIGENCE...",
        no_data: "NESSUN DATO TROVATO.",
        no_result: "NESSUN RISULTATO.",
        insight_label: "INSIGHT:",
        rate_limit: "⚠️ RATE LIMIT GITHUB RAGGIUNTO. Attendi...",
        author_note: "SVILUPPATO DA:",
        mcp_briefing: "MCP (Model Context Protocol) è uno standard aperto che agisce da ponte tra gli LLM (come Claude/GPT) e i tool reali...",
        docs_briefing: "Accesso diretto alle 'Source of Truth'. Qui trovi i link ufficiali...",
        mcp_search_placeholder: "Cerca server MCP...",
        mcp_loading: "CARICAMENTO MCP...",
        mcp_no_results: "NESSUN SERVER MCP TROVATO.",
        mcp_error: "ERRORE MCP. RIPROVA.",
        mcp_load_more: "CARICA ALTRI",
        mcp_official_badge: "UFFICIALE",
        scan_btn: "ASK NEXUS",
        guide_btn: "GUIDA",
        guide_title: "// MANUALE SISTEMA",
        guide_intro: "Questo non è solo un elenco di link. È un database di intelligence curato per l'Era dell'AI.",
        guide_val_title: "DIRETTIVA PRIMARIA",
        guide_val_text: "Filtrare il rumore. L'ecosistema AI è in esplosione. Nexus agisce come un filtro ad alta precisione, identificando solo i repository, i modelli e i framework che definiscono lo stato dell'arte. Niente filler, solo segnale puro.",
        guide_feat_title: "CAPACITÀ DEL SISTEMA",
        guide_feat_1: "<strong>EXPLORER:</strong> Navigazione tattica di librerie e framework essenziali.",
        guide_feat_2: "<strong>TITANS:</strong> Intelligence sugli stack delle Big Tech (Meta, Google, Microsoft).",
        guide_feat_3: "<strong>MCP:</strong> Protocolli per connettere LLM ai tuoi dati reali.",
        guide_feat_4: "<strong>DOCS:</strong> Accesso diretto alle 'Source of Truth' ufficiali.",
        guide_feat_5: "<strong>NEXUS AI:</strong> Assistente neurale integrato per l'analisi immediata.",
        guide_feat_6: "<strong>CODE REVIEW HUB:</strong> Analisi repo GitHub in 4 moduli (Overview, Documentation, Efficiency, Security).",
        guide_close: "TORNA AL SISTEMA",
        auth_title: "// AUTENTICAZIONE RICHIESTA",
        auth_desc: "Inserisci la tua Google Gemini API Key.",
        auth_get_key: "Ottieni API Key da Google AI Studio ↗",
        auth_storage: "La chiave viene salvata localmente.",
        auth_connect: "CONNETTI",
        auth_cancel: "ANNULLA",
        gemini_missing_key: "Gemini API Key mancante. Clicca su \"Set API Key\".",
        gemini_invalid_key: "Gemini ha rifiutato la tua API Key.",
        gemini_generic_error: "Errore imprevisto ({status}). NEXUS non riesce a contattare Gemini.",
        gemini_system_error: "Errore di sistema.",
        show_all: "MOSTRA TUTTI",
        show_less: "MOSTRA MENO",
        sort_most_stars: "Più stelle",
        sort_recently_updated: "Aggiornati di recente",
        home_kicker: "AI THINGS / MISSIONE",
        home_title: "La tua mappa nel mondo AI<br />in costante evoluzione.",
        home_desc: "Un'unica destinazione per esplorare tool, modelli, protocolli e documentazione senza rumore. Dalla scoperta all'implementazione — sempre il contesto giusto.",
        home_cta_explore: "Inizia a esplorare",
        home_highlights_label: "COSA TROVI QUI",
        home_hl_1: "Repository AI curate con insight tattico",
        home_hl_2: "Stack AI Big Tech mappati per azienda",
        home_hl_3: "Server MCP ufficiali e registro protocolli",
        home_hl_4: "Doc ufficiali e analisi qualità del codice"
    },
    en: {
        system_status: "SYSTEM: ONLINE",
        nav_explorer: "EXPLORER",
        nav_titans: "TITANS",
        nav_mcp: "MCP",
        nav_docs: "DOCS",
        select_player: "SELECT PLAYER",
        search_placeholder: "ACCESS DATABASE: Search concepts...",
        loading: "LOADING INTELLIGENCE...",
        no_data: "NO DATA FOUND.",
        no_result: "NO RESULTS.",
        insight_label: "INSIGHT:",
        rate_limit: "⚠️ GITHUB RATE LIMIT REACHED. Please wait...",
        author_note: "DEVELOPED BY:",
        mcp_briefing: "MCP (Model Context Protocol) is an open standard acting as a bridge between LLMs (like Claude/GPT) and real-world tools...",
        docs_briefing: "Direct access to the 'Source of Truth'. Official documentation links...",
        mcp_search_placeholder: "Search MCP Servers...",
        mcp_loading: "LOADING MCP...",
        mcp_no_results: "NO MCP SERVERS FOUND.",
        mcp_error: "MCP ERROR. TRY AGAIN.",
        mcp_load_more: "LOAD MORE",
        mcp_official_badge: "OFFICIAL",
        scan_btn: "ASK NEXUS",
        guide_btn: "GUIDE",
        guide_title: "// SYSTEM MANUAL",
        guide_intro: "This is not just a list of links. It is a curated intelligence database for the AI Age.",
        guide_val_title: "CORE DIRECTIVE",
        guide_val_text: "Filter the noise. The AI ecosystem is exploding. Nexus acts as a high-precision filter, identifying only the repositories, models, and frameworks that define the state of the art. No filler, just signal.",
        guide_feat_title: "SYSTEM CAPABILITIES",
        guide_feat_1: "<strong>EXPLORER:</strong> Tactical navigation of essential libraries and frameworks.",
        guide_feat_2: "<strong>TITANS:</strong> Intelligence on Big Tech stacks (Meta, Google, Microsoft).",
        guide_feat_3: "<strong>MCP:</strong> Protocols to connect LLMs to your real-world data.",
        guide_feat_4: "<strong>DOCS:</strong> Direct access to official 'Source of Truth'.",
        guide_feat_5: "<strong>NEXUS AI:</strong> Integrated neural assistant for instant analysis.",
        guide_feat_6: "<strong>CODE REVIEW HUB:</strong> Analyze GitHub repos in 4 modules (Overview, Documentation, Efficiency, Security).",
        guide_close: "RETURN TO SYSTEM",
        auth_title: "// AUTHENTICATION REQUIRED",
        auth_desc: "Enter your Google Gemini API Key.",
        auth_get_key: "Get API Key from Google AI Studio ↗",
        auth_storage: "The key is stored locally.",
        auth_connect: "CONNECT",
        auth_cancel: "CANCEL",
        gemini_missing_key: "Gemini API Key missing. Click \"Set API Key\".",
        gemini_invalid_key: "Gemini rejected your API key.",
        gemini_generic_error: "Unexpected error ({status}). NEXUS cannot reach Gemini.",
        gemini_system_error: "System error.",
        show_all: "SHOW ALL",
        show_less: "SHOW LESS",
        sort_most_stars: "Most Stars",
        sort_recently_updated: "Recently Updated",
        home_kicker: "AI THINGS / MISSION",
        home_title: "Your map in the<br />constantly evolving<br />AI world.",
        home_desc: "A single destination to explore tools, models, protocols and documentation without noise. From discovery to implementation — always the right context.",
        home_cta_explore: "Start exploring",
        home_highlights_label: "WHAT YOU FIND HERE",
        home_hl_1: "Curated AI repos with tactical insight",
        home_hl_2: "Big-tech AI stacks mapped by player",
        home_hl_3: "Official MCP servers &amp; protocol registry",
        home_hl_4: "Source-of-truth docs &amp; code quality review"
    }
};

// --- MCP THEMES ---
const MCP_THEMES = {
    official: {
        label: "OFFICIAL_SERVERS",
        desc: { it: "Server MCP ufficiali", en: "Official MCP servers" },
        briefing: {
            it: "Server ufficiali dal registry MCP. La ricerca usa l'API del registry per risultati aggiornati.",
            en: "Official servers from the MCP registry. Search uses the registry API for updated results."
        },
        items: [
            { title: "File System MCP", link: "https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem", repoUrl: "https://github.com/modelcontextprotocol/servers", official: true, desc: { en: "Direct local file access (Read/Write). Automated file ops.", it: "Accesso diretto lettura/scrittura file locali. Operazioni file automatiche." } },
            { title: "Memory MCP", link: "https://github.com/modelcontextprotocol/servers/tree/main/src/memory", repoUrl: "https://github.com/modelcontextprotocol/servers", official: true, desc: { en: "Graph-based persistent knowledge graph for agents.", it: "Grafo di conoscenza persistente per la memoria degli agenti." } },
            { title: "Fetch MCP", link: "https://github.com/modelcontextprotocol/servers/tree/main/src/fetch", repoUrl: "https://github.com/modelcontextprotocol/servers", official: true, desc: { en: "Scrape web pages & convert content to markdown.", it: "Scraping pagine web e conversione contenuti in markdown." } },
            { title: "NotebookLM MCP", link: "https://github.com/jacob-bd/notebooklm-mcp-cli", repoUrl: "https://github.com/jacob-bd/notebooklm-mcp-cli", official: false, desc: { en: "CLI + MCP server to create and manage NotebookLM notebooks, add sources and query them directly from your terminal or any MCP-compatible client.", it: "CLI + server MCP per creare e gestire notebook NotebookLM, aggiungere fonti e interrogarli direttamente dal terminale o da client MCP compatibili." } }
        ]
    }
};

const MCP_TITLE_TRANSLATIONS = {
    "file system mcp": { it: "MCP File System", en: "File System MCP" },
    "memory mcp": { it: "MCP Memoria", en: "Memory MCP" },
    "fetch mcp": { it: "MCP Fetch", en: "Fetch MCP" },
    "notebooklm mcp": { it: "MCP NotebookLM", en: "NotebookLM MCP" },
    "github mcp": { it: "MCP GitHub", en: "GitHub MCP" },
    "slack mcp": { it: "MCP Slack", en: "Slack MCP" },
    "google maps mcp": { it: "MCP Google Maps", en: "Google Maps MCP" },
    "postgresql mcp": { it: "MCP PostgreSQL", en: "PostgreSQL MCP" },
    "google drive mcp": { it: "MCP Google Drive", en: "Google Drive MCP" },
    "sentry mcp": { it: "MCP Sentry", en: "Sentry MCP" },
    "gitlab mcp": { it: "MCP GitLab", en: "GitLab MCP" },
    "brave search mcp": { it: "MCP Brave Search", en: "Brave Search MCP" },
    "puppeteer mcp": { it: "MCP Puppeteer", en: "Puppeteer MCP" },
    "redis mcp": { it: "MCP Redis", en: "Redis MCP" }
};

const MCP_NAME_TRANSLATIONS = {
    "io.modelcontextprotocol/filesystem": { it: "MCP File System", en: "File System MCP" },
    "io.modelcontextprotocol/memory": { it: "MCP Memoria", en: "Memory MCP" },
    "io.modelcontextprotocol/fetch": { it: "MCP Fetch", en: "Fetch MCP" }
};

const MCP_REGISTRY = {
    baseUrl: "https://registry.modelcontextprotocol.io",
    listPath: "/v0.1/servers",
    pageSize: 100,
    docsUrl: "https://registry.modelcontextprotocol.io/docs#/operations/list-servers-v0.1"
};

const MCP_STATE = {
    items: [],
    query: "",
    nextCursor: null,
    hasMore: false,
    loading: false,
    error: null,
    initialized: false,
    repoMeta: {},
    repoLoading: {}
};



// --- REPO THEMES ---
const REPO_THEMES = {
    core: {
        label: "CORE_INDEX",
        desc: { it: "Fondamenta AI", en: "AI Foundations" },
        briefing: {
            it: "Il nucleo duro: framework di deep learning, librerie per LLM, strumenti di data science e serving. Se vuoi costruire qualsiasi cosa in AI, prima o poi passi da qui.",
            en: "The hard core: deep learning frameworks, LLM libraries, data science tools and serving. If you want to build anything in AI, sooner or later you touch these."
        },
        items: [
            { id: "pytorch/pytorch", why: { it: "Il motore matematico preferito dalla ricerca e da gran parte dell’industria: ti permette di sperimentare rapidamente nuove architetture e idee.", en: "Research’s and industry’s favorite math engine: lets you rapidly experiment with new architectures and ideas." } },
            { id: "tensorflow/tensorflow", why: { it: "La piattaforma storica di Google per ML su larga scala e produzione: ideale quando hai bisogno di un ecosistema maturo e ben integrato.", en: "Google's historic platform for large-scale ML and production: ideal when you need a mature, well-integrated ecosystem." } },
            { id: "huggingface/transformers", why: { it: "Il 'GitHub dei Modelli': migliaia di modelli pre-addestrati (NLP, visione, audio) da usare con poche righe di codice.", en: "The 'GitHub of Models': thousands of pretrained models (NLP, vision, audio) ready to use with a few lines of code." } },
            { id: "langchain-ai/langchain", why: { it: "Framework per connettere LLM a dati e servizi (PDF, DB, API) e costruire pipeline complesse di ragionamento e tool use.", en: "Framework to connect LLMs to data and services (PDFs, DBs, APIs) and build complex reasoning and tool-use pipelines." } },
            { id: "run-llama/llama_index", why: { it: "Specializzato nell’ingestione e indicizzazione dei dati per il RAG: ottimo per fare search intelligente su documenti e knowledge base.", en: "Specialized in data ingestion and indexing for RAG: great for intelligent search over documents and knowledge bases." } },
            { id: "ray-project/ray", why: { it: "Framework unificato per scalare job Python e workload AI su cluster: perfetto per training e inferenza distribuita senza impazzire con l’infrastruttura.", en: "Unified framework to scale Python and AI workloads across clusters: great for distributed training and inference without drowning in infra." } },
            { id: "unslothai/unsloth", why: { it: "Framework open-source per fine-tuning e Reinforcement Learning di LLM (OpenAI gpt-oss, DeepSeek, Qwen, Llama, Gemma, TTS) con training fino a 2–3x più veloce e ~70% di VRAM in meno. Ideale per portare il training locale e su GPU commodity al livello dello stato dell’arte.", en: "Open-source framework for LLM fine-tuning and Reinforcement Learning (OpenAI gpt-oss, DeepSeek, Qwen, Llama, Gemma, TTS) with up to 2–3x faster training and ~70% less VRAM. Ideal to bring local and commodity-GPU training up to state-of-the-art levels." } },
            { id: "numpy/numpy", why: { it: "La base di tutto: array numerici veloci, operazioni vettorializzate e algebra lineare. Senza di lui, il resto crolla.", en: "The foundation of everything: fast numerical arrays, vectorized ops and linear algebra. Without it, the rest collapses." } },
            { id: "pandas-dev/pandas", why: { it: "Il 'Excel programmabile': essenziale per pulire, trasformare e analizzare i dati prima di qualunque modello serio.", en: "The 'programmable Excel': essential for cleaning, transforming and analysing data before any serious modeling." } },
            { id: "scikit-learn/scikit-learn", why: { it: "Imbattibile per algoritmi classici (non deep): regressioni, classificazioni, clustering, preprocessing. Perfetto per baseline solide.", en: "Unbeatable for classic (non-deep) algorithms: regression, classification, clustering, preprocessing. Perfect for solid baselines." } },
            { id: "TheAlgorithms/Python", why: { it: "Repository didattico con centinaia di algoritmi in Python. Utile per capire implementazioni classiche e trasformare teoria in codice.", en: "Educational repo with hundreds of algorithms in Python. Useful to understand classic implementations and turn theory into code." } },
            { id: "tiangolo/fastapi", why: { it: "Lo standard moderno per creare API veloci con Python: ideale per esporre i tuoi modelli AI in produzione.", en: "The modern standard for building fast APIs in Python: ideal to expose your AI models in production." } },
            { id: "streamlit/streamlit", why: { it: "Crea interfacce web per demo e tool AI in puro Python, senza HTML/CSS: perfetto per prototipare e condividere velocemente.", en: "Create web UIs for AI demos and tools in pure Python, no HTML/CSS: perfect for fast prototyping and sharing." } }
        ]
    },
    databases: {
        label: "AI_DATABASES",
        desc: { it: "Memoria per AI", en: "AI Memory" },
        briefing: {
            it: "Database vettoriali, estensioni per Postgres e grafi di conoscenza: qui vive la memoria a lungo termine dei tuoi sistemi RAG e dei tuoi agenti.",
            en: "Vector databases, Postgres extensions and knowledge graphs: this is where long-term memory for your RAG systems and agents lives."
        },
        items: [
            { id: "milvus-io/milvus", why: { it: "Database vettoriale cloud-native pensato per scalare a miliardi di vettori: adatto per applicazioni enterprise di ricerca semantica.", en: "Cloud-native vector database designed to scale to billions of vectors: suitable for enterprise-grade semantic search." } },
            { id: "chroma-core/chroma", why: { it: "Soluzione open-source 'AI-native', minimal e facile da integrare in applicazioni Python e prototipi RAG.", en: "'AI-native' open-source solution, minimal and easy to integrate into Python apps and RAG prototypes." } },
            { id: "qdrant/qdrant", why: { it: "Motore vettoriale in Rust, veloce ed efficiente, con supporto per filtri complessi e metadata: ottimo per search avanzata.", en: "Rust-based vector engine, fast and efficient, with support for complex filters and metadata: great for advanced search." } },
            { id: "weaviate/weaviate", why: { it: "DB vettoriale con moduli ML integrati e ricerca ibrida (testo + vettori): pensato per applicazioni semantiche end-to-end.", en: "Vector DB with integrated ML modules and hybrid search (text + vectors): built for end-to-end semantic applications." } },
            { id: "facebookresearch/faiss", why: { it: "Libreria fondamentale di Meta per la ricerca di similarità densa: usata sotto il cofano da molti motori vettoriali.", en: "Meta’s fundamental library for dense similarity search: used under the hood by many vector engines." } },
            { id: "pgvector/pgvector", why: { it: "Estensione per PostgreSQL che aggiunge supporto ai vettori: perfetta se vuoi aggiungere RAG senza cambiare database.", en: "PostgreSQL extension that adds vector support: perfect if you want RAG without switching databases." } },
            { id: "lancedb/lancedb", why: { it: "DB vettoriale serverless per dati multimodali (immagini, video, testo): ben integrato con workflow moderni e notebook.", en: "Serverless vector DB for multimodal data (images, video, text): well integrated with modern workflows and notebooks." } },
            { id: "neo4j/neo4j", why: { it: "Il database a grafo leader: cruciale per GraphRAG e sistemi che ragionano su relazioni tra concetti, entità ed eventi.", en: "The leading graph database: crucial for GraphRAG and systems that reason over relationships between concepts, entities and events." } },
            { id: "redis/redis", why: { it: "Key-value store ubiquo in produzione; oggi usato anche come vector store e cache per sistemi RAG e servizi AI real-time.", en: "Ubiquitous production key-value store; now also used as a vector store and cache layer for RAG systems and real-time AI services." } }
        ]
    },
    learning: {
        label: "LEARNING",
        desc: { it: "Risorse Educative", en: "Educational Resources" },
        briefing: {
            it: "Libri, corsi e repository didattici per capire come funzionano davvero LLM, modelli di deep learning e ML classico. Qui costruisci la base mentale.",
            en: "Books, courses and educational repos to truly understand how LLMs, deep learning and classic ML work. This is where you build your mental foundation."
        },
        items: [
            { id: "rasbt/LLMs-from-scratch", why: { it: "Libro/repo che ti guida a costruire un GPT-like da zero: perfetto per capire cosa succede sotto il cofano.", en: "Book/repo that guides you to build a GPT-like model from scratch: perfect to understand what happens under the hood." } },
            { id: "huggingface/course", why: { it: "Corso ufficiale gratuito di Hugging Face: copre Transformers, tokenizzazione, fine-tuning e deployment.", en: "Hugging Face’s official free course: covers Transformers, tokenization, fine-tuning and deployment." } },
            { id: "karpathy/nanoGPT", why: { it: "Codice minimale di Karpathy per addestrare un piccolo GPT: un capolavoro didattico per chi vuole imparare partendo dal codice.", en: "Karpathy's minimal code to train a small GPT: an educational gem if you want to learn by reading code." } },
            { id: "ageron/handson-ml3", why: { it: "Notebook del libro 'Hands-On ML': coprono tutto, da Scikit-Learn a TensorFlow, con esempi pratici ben spiegati.", en: "Notebooks from 'Hands-On ML': cover everything from Scikit-Learn to TensorFlow, with well-explained practical examples." } },
            { id: "fastai/fastai", why: { it: "Approccio 'top-down' al deep learning: risultati velocemente, con API ad alto livello e spiegazioni progressive.", en: "Top-down approach to deep learning: fast results with high-level APIs and progressive explanations." } },
            { id: "d2l-ai/d2l-en", why: { it: "Dive into Deep Learning: libro interattivo completo con codice eseguibile e spiegazioni matematiche accessibili.", en: "Dive into Deep Learning: complete interactive book with executable code and accessible math explanations." } },
            { id: "microsoft/ML-For-Beginners", why: { it: "Curriculum di 12 settimane creato da Microsoft: ottimo per chi parte da zero e vuole una roadmap strutturata.", en: "12-week curriculum by Microsoft: great for beginners who want a structured learning roadmap." } },
            { id: "openai/openai-cookbook", why: { it: "Raccolta ufficiale di esempi pratici per costruire app reali con l'API OpenAI: dal prompt design al RAG, fino agli agenti.", en: "Official collection of practical examples for building real apps with the OpenAI API: from prompt design and RAG to agents." } },
            { id: "meta-llama/llama-cookbook", why: { it: "Ricettario ufficiale per inference, fine-tuning e casi d'uso end-to-end con la famiglia Llama: perfetto per lavorare seriamente con open weights.", en: "Official cookbook for inference, fine-tuning and end-to-end use cases with the Llama family: perfect for serious work with open weights." } },
            { id: "google-gemini/cookbook", why: { it: "Ricettario ufficiale Google Gemini: esempi pratici e guide per usare le API Gemini (multimodale, Function Calling, RAG, agentico). Il punto di partenza per costruire con Gemini.", en: "Official Google Gemini cookbook: practical examples and guides for using the Gemini APIs (multimodal, Function Calling, RAG, agentic). The go-to starting point for building with Gemini." } }
        ]
    },
    genai: {
        label: "GEN_AI",
        desc: { it: "Generazione Media", en: "Media Generation" },
        briefing: {
            it: "Strumenti per generare immagini, audio e testo, e per servire LLM in locale o in produzione. È la zona dove l’AI diventa creativa (e visual).",
            en: "Tools to generate images, audio and text, and to serve LLMs locally or in production. This is where AI gets creative (and visual)."
        },
        items: [
            { id: "AUTOMATIC1111/stable-diffusion-webui", why: { it: "Interfaccia standard per usare Stable Diffusion: tantissime feature, estensioni e controlli per il prompting visivo.", en: "Standard UI for Stable Diffusion: tons of features, extensions and controls for visual prompting." } },
            { id: "comfyanonymous/ComfyUI", why: { it: "Interfaccia a nodi per Stable Diffusion: massima flessibilità per workflow complessi di generazione e post-processing.", en: "Node-based UI for Stable Diffusion: maximum flexibility for complex generation and post-processing workflows." } },
            { id: "openai/whisper", why: { it: "Uno dei migliori modelli open per speech-to-text: robusto, multilingua, ottimo per trascrizioni e pipeline audio.", en: "One of the best open models for speech-to-text: robust, multilingual, great for transcription and audio pipelines." } },
            { id: "ollama/ollama", why: { it: "Esegui Llama 3, Mistral e altri LLM sul tuo PC con un comando: perfetto per sperimentare modelli localmente.", en: "Run Llama 3, Mistral and other LLMs on your machine with a single command: perfect for local experimentation." } },
            { id: "vllm-project/vllm", why: { it: "Motore di inferenza ad altissimo throughput per LLM: pensato per servire molti utenti con latency bassa.", en: "High-throughput inference engine for LLMs: designed to serve many users with low latency." } },
            { id: "lm-sys/FastChat", why: { it: "Piattaforma aperta per addestrare, servire e valutare chatbot: include UI, backend e strumenti di benchmark.", en: "Open platform to train, serve and evaluate chatbots: includes UI, backend and benchmarking tools." } },
            { id: "ggerganov/llama.cpp", why: { it: "Il 'miracolo' che porta gli LLM su CPU e Apple Silicon: ideale per chi vuole modelli grandi su hardware non enterprise.", en: "The 'miracle' bringing LLMs to CPU and Apple Silicon: ideal if you want big models on non-enterprise hardware." } },
            { id: "Stability-AI/generative-models", why: { it: "Repo ufficiale per i modelli base di Stability AI (immagini, video, 3D): ottimo punto di accesso al loro ecosistema.", en: "Official repo for Stability AI base models (images, video, 3D): a great entry point into their ecosystem." } },
            { id: "open-webui/open-webui", why: { it: "Interfaccia web self-hosted per orchestrare LLM locali (es. Ollama) e remoti: chat, RAG, plugin e multi-modello in un unico posto.", en: "Self-hosted web UI to orchestrate local (e.g. Ollama) and remote LLMs: chat, RAG, plugins and multi-model in a single place." } },
            { id: "janhq/jan", why: { it: "App desktop open che porta l’esperienza tipo ChatGPT su modelli locali e cloud, con un’unica interfaccia pulita.", en: "Open desktop app bringing a ChatGPT-like experience to local and cloud models through a single clean interface." } }
        ]
    },
    agentic: {
        label: "AGENTIC_AI",
        desc: { it: "Agenti Autonomi", en: "Autonomous Agents" },
        briefing: {
            it: "Framework e tool per costruire agenti che non si limitano a rispondere, ma pianificano, chiamano tool, leggono e scrivono file, orchestrano workflow.", en: "Frameworks and tools to build agents that don’t just answer, but plan, call tools, read/write files and orchestrate workflows."
        },
        items: [
            { id: "langchain-ai/langchain", why: { it: "Framework storico per orchestrare LLM, memorie e tool: ottimo per prototipi veloci e per capire i pattern di base degli agenti.", en: "Historic framework to orchestrate LLMs, memory and tools: great for fast prototyping and learning basic agent patterns." } },
            { id: "langchain-ai/langgraph", why: { it: "Evoluzione di LangChain per creare agenti stateful, ciclici e robusti: pensato per applicazioni più complesse e affidabili.", en: "LangChain’s evolution for building stateful, cyclic and robust agents: aimed at more complex and reliable applications." } },
            { id: "microsoft/autogen", why: { it: "Crea team di agenti che collaborano tra loro: utile per orchestrare ruoli diversi (planner, coder, critico) su task complessi.", en: "Create teams of agents that talk to each other to solve tasks: perfect for multi-role scenarios (planner, coder, critic)." } },
            { id: "crewAIInc/crewAI", why: { it: "Orchestra agenti con ruoli specifici (es. Ricercatore, Scrittore, Strategist) e flussi di lavoro coordinati.", en: "Orchestrates agents with specific roles (e.g., Researcher, Writer, Strategist) and coordinated workflows." } },
            { id: "Significant-Gravitas/AutoGPT", why: { it: "Uno dei primi agenti autonomi 'goal-driven': gli dai un obiettivo e lui prova a decomporlo in passi e azioni.", en: "One of the first 'goal-driven' autonomous agents: you give it a goal and it tries to decompose it into steps and actions." } },
            { id: "OpenInterpreter/open-interpreter", why: { it: "Permette a un LLM di eseguire vero codice sul tuo computer (shell, Python, ecc.): ponte diretto tra modello e ambiente locale.", en: "Lets an LLM execute real code on your machine (shell, Python, etc.): a direct bridge between model and local environment." } },
            { id: "anthropics/claude-code", why: { it: "Agente di coding direttamente da terminale: comprende, naviga e modifica codebase reali in modo iterativo. Il riferimento ufficiale per portare Claude nel workflow di sviluppo quotidiano.", en: "Autonomous coding agent in your terminal: understands, navigates and modifies real codebases iteratively. The official reference for bringing Claude into your everyday development workflow." } },
            { id: "microsoft/semantic-kernel", why: { it: "SDK leggero per integrare LLM in codice 'tradizionale' (C#, Python): perfetto per agenti che vivono dentro servizi esistenti.", en: "Lightweight SDK to integrate LLMs into 'traditional' code (C#, Python): perfect for agents living inside existing services." } },
            { id: "deepset-ai/haystack", why: { it: "Framework end-to-end per RAG e sistemi agentici production-ready: pipeline, integrazioni, eval e deployment in un unico stack.", en: "End-to-end framework for RAG and production-ready agentic systems: pipelines, integrations, eval and deployment in a single stack." } },
            { id: "strands-agents/sdk-python", why: { it: "SDK model-driven per costruire agenti AI in poche righe di codice. Supporta Bedrock, Anthropic, Gemini, Ollama, OpenAI e altri provider, con supporto nativo per MCP e sistemi multi-agente.", en: "Model-driven SDK to build AI agents in just a few lines of code. Supports Bedrock, Anthropic, Gemini, Ollama, OpenAI and other providers, with native MCP support and multi-agent systems." } }
        ]
    },
    ml: {
        label: "MACHINE_LEARNING",
        desc: { it: "ML Classico", en: "Classic ML" },
        briefing: {
            it: "Algoritmi classici, ensemble e calcolo numerico: tutto ciò che esisteva prima dell’ondata LLM e che continua a risolvere un sacco di problemi reali.",
            en: "Classic algorithms, ensembles and numerical computing: everything that existed before the LLM wave and still solves a ton of real problems."
        },
        items: [
            { id: "pytorch/pytorch", why: { it: "Framework ormai dominante anche oltre il deep puro: usato come base per molti progetti di ricerca e produzione.", en: "Dominant framework beyond pure deep learning: used as a base for many research and production projects." } },
            { id: "tensorflow/tensorflow", why: { it: "Standard di fatto per molte pipeline di produzione storiche: ancora molto presente in ecosistemi enterprise.", en: "De facto standard for many legacy production pipelines: still very present in enterprise ecosystems." } },
            { id: "scikit-learn/scikit-learn", why: { it: "Strumenti semplici ed efficienti per analisi dati e ML classico: la libreria da conoscere se lavori con tabellari e feature engineering.", en: "Simple and efficient tools for data mining and classic ML: the library to know if you work with tabular data and feature engineering." } },
            { id: "dmlc/xgboost", why: { it: "Il re delle competizioni su dati tabellari: gradient boosting estremamente performante e ben rodato.", en: "The king of tabular data competitions: extremely strong and battle-tested gradient boosting." } },
            { id: "microsoft/LightGBM", why: { it: "Gradient boosting veloce ed efficiente con ottima gestione di grandi dataset: alternativa spesso più leggera rispetto ad altri.", en: "Fast, efficient gradient boosting with great handling of large datasets: often a lighter alternative to others." } },
            { id: "catboost/catboost", why: { it: "Gradient boosting pensato per gestire in modo eccellente le feature categoriali: spesso top su problemi tabellari reali.", en: "Gradient boosting library that handles categorical features extremely well: often top-tier on real-world tabular problems." } },
            { id: "numpy/numpy", why: { it: "Base del calcolo scientifico in Python: tutto il resto (ML, DL, statistica) si appoggia sopra i suoi array.", en: "Base of scientific computing in Python: everything else (ML, DL, stats) sits on top of its arrays." } },
            { id: "pandas-dev/pandas", why: { it: "Strumento potente per analisi e manipolazione dati: essenziale per preparare feature e dataset puliti.", en: "Powerful tool for data analysis and manipulation: essential for preparing clean features and datasets." } },
            { id: "google/jax", why: { it: "Autograd e XLA per calcolo ad alte prestazioni: ponte naturale tra numerica classica e sperimentazione deep moderna.", en: "Autograd and XLA for high-performance computation: a natural bridge between classic numerics and modern deep experiments." } }
        ]
    },
    opensource: {
        label: "OPEN_SOURCE_AI",
        desc: { it: "Hub & Modelli", en: "Hub & Models" },
        briefing: {
            it: "Piattaforme, modelli open-weight e progetti comunitari: qui si muove l’AI aperta, dove puoi ispezionare, forchettare e costruire sopra.",
            en: "Platforms, open-weight models and community projects: this is where open AI lives, where you can inspect, fork and build on top."
        },
        items: [
            { id: "huggingface/transformers", why: { it: "Migliaia di modelli pre-addestrati pronti all’uso: l’hub più importante per chi lavora con modelli open.", en: "Thousands of pretrained models ready to use: the most important hub if you work with open models." } },
            { id: "huggingface/diffusers", why: { it: "Modelli di diffusione per generazione di immagini, audio e altro: lo standard de facto per sperimentare con diffusion models.", en: "Diffusion models for image, audio and more: the de facto standard for experimenting with diffusion models." } },
            { id: "huggingface/peft", why: { it: "Fine-tuning efficiente (LoRA & co.) per modelli grandi: ti permette di adattare LLM con poca memoria e pochi dati.", en: "Efficient fine-tuning (LoRA & co.) for large models: lets you adapt LLMs with limited memory and data." } },
            { id: "facebookresearch/llama", why: { it: "La famiglia di modelli che ha democratizzato gli LLM potenti in versione open-weight.", en: "The model family that democratized powerful LLMs in open-weight form." } },
            { id: "meta-llama/llama3", why: { it: "Release ufficiale dei pesi Llama 3: modelli open-weight moderni, base di tanti progetti LLM open in produzione.", en: "Official Llama 3 weights release: modern open-weight models that power many real-world open LLM projects." } },
            { id: "mistralai/mistral-src", why: { it: "Modelli efficienti e performanti open-weight: spesso ai primi posti per rapporto qualità/risorse.", en: "Efficient, high-performance open-weight models: often leading in quality-to-resources ratio." } },
            { id: "EleutherAI/gpt-neox", why: { it: "Libreria per addestrare modelli Transformer di grandi dimensioni su GPU: fondamentale nella storia degli LLM open.", en: "Library to train large Transformer models on GPUs: a key piece in the history of open LLMs." } },
            { id: "LAION-AI/Open-Assistant", why: { it: "Assistente conversazionale open source guidato dalla community: dimostra cosa si può fare con dati e collaborazione aperta.", en: "Community-driven open-source conversational assistant: shows what’s possible with open data and collaboration." } }
        ]
    }
};

// --- TITAN THEMES ---
const TITAN_THEMES = {
    meta: {
        label: "META (FAIR)",
        desc: { it: "Open Weights, Vision & Retrieval", en: "Open Weights, Vision & Retrieval" },
        briefing: {
            it: "Il team FAIR di Meta è uno dei motori principali dell'AI open-weight: Llama per il linguaggio, SAM e Detectron2 per la visione, FAISS per la ricerca vettoriale. Qui trovi i mattoni fondamentali per costruire sistemi completi (LLM + Vision + Retrieval).",
            en: "Meta’s FAIR team is one of the main drivers of open-weight AI: Llama for language, SAM and Detectron2 for vision, FAISS for vector search. This is the toolbox for building full systems (LLM + Vision + Retrieval)."
        },
        items: [
            { id: "facebookresearch/llama", why: { it: "La famiglia di modelli open più influente degli ultimi anni: ha sbloccato ecosistemi interi (fine-tuning, inference, strumenti, UI) su hardware accessibile.", en: "The most influential open model family in recent years: it unlocked entire ecosystems (fine-tuning, inference, tools, UIs) on accessible hardware." } },
            { id: "pytorch/pytorch", why: { it: "Il framework preferito dalla ricerca e da gran parte dell’industria: se leggi un paper moderno, è molto probabile che l’implementazione sia in PyTorch.", en: "The framework of choice for research and a big part of industry: if you read a modern paper, chances are the reference implementation is in PyTorch." } },
            { id: "facebookresearch/segment-anything", why: { it: "Segment Anything Model (SAM): segmentazione immagini universale, pensata per funzionare out-of-the-box su una grande varietà di scenari.", en: "Segment Anything Model (SAM): universal image segmentation, designed to work out-of-the-box in a wide variety of scenarios." } },
            { id: "facebookresearch/detectron2", why: { it: "Piattaforma next-gen per object detection e instance segmentation: ancora un riferimento per sistemi di visione classici e ibridi.", en: "Next-gen platform for object detection and instance segmentation: still a reference point for classic and hybrid vision systems." } },
            { id: "facebookresearch/faiss", why: { it: "Libreria chiave per la ricerca di similarità su grandi collezioni di vettori: alla base di tanti motori di RAG e recommendation.", en: "Key library for similarity search on large vector collections: underpins many RAG engines and recommendation systems." } },
            { id: "facebookresearch/dinov2", why: { it: "Vision transformer autosupervisionato che fornisce embedding robusti per task downstream (classification, retrieval, segmentation).", en: "Self-supervised vision transformer providing robust embeddings for downstream tasks (classification, retrieval, segmentation)." } },
            { id: "facebookresearch/fastText", why: { it: "Classificazione e rappresentazione del testo veloce e leggera: ideale per baseline solide e sistemi in cui latenza e risorse contano.", en: "Fast and lightweight text classification and representation: ideal for solid baselines and systems where latency and resources matter." } }
        ]
    },
    microsoft: {
        label: "MICROSOFT",
        desc: { it: "Enterprise, Agents & Knowledge", en: "Enterprise, Agents & Knowledge" },
        briefing: {
            it: "Microsoft spinge forte su agenti multi-LLM, integrazione con ecosistemi enterprise (Azure, M365) e gestione della conoscenza (GraphRAG). Qui trovi gli strumenti per costruire sistemi agentici robusti dentro contesti aziendali reali.",
            en: "Microsoft is pushing on multi-LLM agents, enterprise integration (Azure, M365) and knowledge-centric systems (GraphRAG). This is the toolbox for building robust agentic systems inside real organizations."
        },
        items: [
            { id: "microsoft/autogen", why: { it: "Framework per creare team di agenti che collaborano tra loro: utile per orchestrare ruoli diversi (planner, coder, critico) su task complessi.", en: "Framework for creating teams of collaborating agents: useful to orchestrate different roles (planner, coder, critic) on complex tasks." } },
            { id: "microsoft/DeepSpeed", why: { it: "Stack di ottimizzazione per addestrare modelli di grandi dimensioni in modo efficiente (parallelismo, memory saving, throughput elevato).", en: "Optimization stack for training large models efficiently (parallelism, memory savings, high throughput)." } },
            { id: "microsoft/semantic-kernel", why: { it: "SDK leggero per integrare LLM in app esistenti (C#, Python, Java, ecc.): perfetto per portare AI in sistemi enterprise già in produzione.", en: "Lightweight SDK to integrate LLMs into existing apps (C#, Python, Java, etc.): ideal to bring AI into existing enterprise systems." } },
            { id: "microsoft/graphrag", why: { it: "Approccio RAG basato su knowledge graph: permette di strutturare, navigare e interrogare la conoscenza in modo più robusto del semplice “chunking”.", en: "Graph-based RAG approach: lets you structure, navigate and query knowledge more robustly than naïve chunking." } },
            { id: "microsoft/guidance", why: { it: "Linguaggio dichiarativo per controllare il comportamento degli LLM (template, vincoli, strutture). Utile quando serve output molto deterministico.", en: "Declarative language to control LLM behavior (templates, constraints, structures). Useful when you need highly deterministic outputs." } },
            { id: "microsoft/playwright", why: { it: "Automazione browser moderna e affidabile: fondamentale per agenti che devono interagire con web app reali end-to-end.", en: "Modern, reliable browser automation: essential for agents that must interact with real web apps end-to-end." } },
            { id: "microsoft/LIDA", why: { it: "Strumento per generare visualizzazioni dati e insight guidati dagli LLM: collega direttamente analisi e storytelling visivo.", en: "Tool for generating data visualizations and insights with LLMs: directly connects analysis and visual storytelling." } }
        ]
    },
    google: {
        label: "GOOGLE",
        desc: { it: "Research & Agents", en: "Research & Agents" },
        briefing: {
            it: "Pionieri della ricerca AI (da BERT a JAX), oggi sempre più focalizzati su agenti e workflow produttivi con Gemini e ADK. Qui ci sono gli strumenti chiave per passare dalla ricerca al prodotto.",
            en: "AI research pioneers (from BERT to JAX), now heavily focused on agents and production workflows with Gemini and ADK. These are the key tools to move from research to product."
        },
        items: [
            { id: "google/adk-python", why: { it: "Agent Development Kit: il framework ufficiale per progettare, orchestrare e mettere in produzione agenti avanzati (ottimizzato per Gemini, ma model-agnostic).", en: "Agent Development Kit: the official framework to design, orchestrate and deploy advanced agents (optimized for Gemini, but model-agnostic)." } },
            { id: "google-gemini/gemini-cli", why: { it: "Un agente Gemini pronto nel terminale: esempio concreto di utilizzo quotidiano per coding, refactor e debugging del codice.", en: "A Gemini-powered agent in your terminal: concrete everyday usage example for coding, refactors and debugging." } },
            { id: "GoogleCloudPlatform/agent-starter-pack", why: { it: "Starter pack per agenti in produzione su Google Cloud: infrastruttura, CI/CD, logging e sicurezza già impostati secondo best practice.", en: "Starter pack for production-grade agents on Google Cloud: infra, CI/CD, logging and security wired in following best practices." } },
            { id: "google-deepmind/gemma", why: { it: "Libreria ufficiale Gemma: modelli LLM open-weight di Google pensati per essere usati e fine-tunati in applicazioni reali, non solo per benchmark.", en: "Official Gemma library: Google’s open-weight LLMs designed to be used and fine-tuned in real applications, not just for benchmarks." } },
            { id: "google/gemma.cpp", why: { it: "Motore di inferenza C++ leggero per Gemma, in stile llama.cpp: ideale per portare LLM open su laptop e dispositivi edge.", en: "Lightweight C++ inference engine for Gemma, llama.cpp-style: ideal for running open LLMs on laptops and edge devices." } },
            { id: "google/jax", why: { it: "Il laboratorio numerico di Google: autograd + XLA per calcolo ad alte prestazioni: ponte naturale tra numerica classica e sperimentazione deep moderna.", en: "Google’s numerical lab: autograd + XLA for high-performance research and training on TPUs and GPUs." } },
            { id: "google-ai-edge/ai-edge-apis", why: { it: "SDK e API per portare GenAI e ML direttamente in app mobile/web con esecuzione on-device: perfetto per esperienze low-latency.", en: "SDKs and APIs to bring GenAI and ML directly into mobile/web apps with on-device execution: ideal for low-latency experiences." } }
        ]
    },
    openai: {
        label: "OPENAI",
        desc: { it: "Generative Models & Tooling", en: "Generative Models & Tooling" },
        briefing: {
            it: "Definiscono (o spostano) regolarmente lo stato dell’arte su linguaggio, multimodale e strumenti di produzione. Qui trovi i pezzi principali per lavorare con l’ecosistema OpenAI oltre la semplice chiamata API.",
            en: "They regularly define (or push) the state of the art in language, multimodal and production tooling. These are the main pieces to work with the OpenAI ecosystem beyond a simple API call."
        },
        items: [
            { id: "openai/whisper", why: { it: "Modello di speech-to-text robusto, multilingua, usatissimo per trascrizioni, subtitling e analisi conversazionali.", en: "Robust, multilingual speech-to-text model widely used for transcription, subtitling and conversational analytics." } },
            { id: "openai/codex", why: { it: "Agent CLI per navigare, capire e modificare codebase con AI: utile per coding assistito, refactor e automazioni su repo reali.", en: "Agentic CLI to navigate, understand, and edit codebases with AI: useful for assisted coding, refactors, and automations on real repos." } },
            { id: "openai/tiktoken", why: { it: "Tokenizzatore BPE veloce e ottimizzato per i modelli OpenAI: fondamentale per stimare costi, lunghezze di contesto e controllare l’input.", en: "Fast BPE tokenizer optimized for OpenAI models: essential to estimate cost, context length and control the input." } },
            { id: "openai/clip", why: { it: "Modello che collega testo e immagini in uno spazio comune: base concettuale per tante applicazioni vision-language moderne.", en: "Model that connects text and images in a shared space: conceptual base for many modern vision-language applications." } },
            { id: "openai/evals", why: { it: "Framework per valutare LLM in modo sistematico (task custom, dataset, metriche): utile quando devi davvero misurare qualità, non solo “sensazioni”.", en: "Framework to systematically evaluate LLMs (custom tasks, datasets, metrics): useful when you need real measurement, not just vibes." } },
            { id: "openai/shap-e", why: { it: "Modello per generare oggetti 3D a partire da testo o immagini: ponte tra GenAI e pipeline 3D/CAD.", en: "Model to generate 3D objects from text or images: bridge between GenAI and 3D/CAD pipelines." } },
            { id: "openai/point-e", why: { it: "Generazione di nuvole di punti 3D: interessante per prototipi rapidi nel mondo 3D e robotics.", en: "3D point cloud generation: useful for quick prototyping in 3D and robotics contexts." } },
            { id: "openai/openai-python", why: { it: "Libreria Python ufficiale: il modo più diretto e stabile per integrare le API OpenAI in backend, script e pipeline.", en: "Official Python library: the most direct and stable way to integrate OpenAI APIs into backends, scripts and pipelines." } }
        ]
    },
    huggingface: {
        label: "HUGGING FACE",
        desc: { it: "The AI Hub & Ecosystem", en: "The AI Hub & Ecosystem" },
        briefing: {
            it: "La casa dell’AI open: modelli, dataset, spazio di deploy e librerie per training, fine-tuning e serving. Qui trovi gli strumenti che tengono in piedi mezza AI open source moderna.",
            en: "Home of open AI: models, datasets, deployment space and libraries for training, fine-tuning and serving. These are the tools that power half of modern open-source AI."
        },
        items: [
            { id: "huggingface/transformers", why: { it: "Libreria di riferimento per usare modelli Transformer (NLP, visione, audio) con poche righe di codice: lo standard de facto.", en: "Reference library to use Transformer models (NLP, vision, audio) with just a few lines of code: the de facto standard." } },
            { id: "huggingface/diffusers", why: { it: "Toolkit per modelli di diffusione (immagini, audio, video): il modo più semplice per sperimentare con generazione moderna.", en: "Toolkit for diffusion models (images, audio, video): the easiest way to experiment with modern generative models." } },
            { id: "huggingface/peft", why: { it: "Parameter-Efficient Fine-Tuning: permette di adattare LLM e modelli grossi con poche risorse e senza toccare tutti i pesi.", en: "Parameter-Efficient Fine-Tuning: lets you adapt LLMs and large models with limited resources, without touching all weights." } },
            { id: "huggingface/datasets", why: { it: "Libreria per scaricare, preparare e condividere dataset ML in modo standardizzato: fondamentale per esperimenti riproducibili.", en: "Library to download, prepare and share ML datasets in a standardized way: essential for reproducible experiments." } },
            { id: "huggingface/accelerate", why: { it: "Astrazione per training distribuito e multi-device: rende più semplice scalare senza dover riscrivere mezzo training loop.", en: "Abstraction for distributed and multi-device training: simplifies scaling without rewriting half your training loop." } },
            { id: "huggingface/tokenizers", why: { it: "Tokenizzatori veloci scritti in Rust con binding Python: indispensabili quando il preprocessing diventa un collo di bottiglia.", en: "Fast tokenizers written in Rust with Python bindings: indispensable when preprocessing becomes a bottleneck." } },
            { id: "huggingface/text-generation-inference", why: { it: "Toolkit di serving ottimizzato per LLM (quantizzazione, batching, multi-GPU): pensato per portare modelli open in produzione.", en: "Optimized serving toolkit for LLMs (quantization, batching, multi-GPU): designed to bring open models into production." } }
        ]
    },
    nvidia: {
        label: "NVIDIA",
        desc: { it: "Compute, Inference & Optimization", en: "Compute, Inference & Optimization" },
        briefing: {
            it: "Il layer hardware e runtime sotto gran parte dell’AI moderna. Da TensorRT a NeMo, questi strumenti sono ciò che ti permette di sfruttare davvero le GPU oltre il semplice training naïf.",
            en: "The hardware and runtime layer under most modern AI. From TensorRT to NeMo, these tools let you actually leverage GPUs beyond naïve training."
        },
        items: [
            { id: "NVIDIA/NeMo", why: { it: "Toolkit per costruire, addestrare e deployare modelli conversazionali e multimodali di grandi dimensioni, con pipeline già strutturate.", en: "Toolkit to build, train and deploy large conversational and multimodal models, with structured pipelines." } },
            { id: "NVIDIA/TensorRT", why: { it: "Piattaforma di ottimizzazione e inferenza ad alte prestazioni per modelli deep: essenziale quando la latenza va abbassata al minimo.", en: "High-performance optimization and inference platform for deep models: essential when you need to squeeze latency down." } },
            { id: "NVIDIA/dali", why: { it: "Libreria per data loading e preprocessing accelerato su GPU: evita che il caricamento dati diventi il vero collo di bottiglia.", en: "Library for data loading and preprocessing accelerated on GPU: prevents data loading from becoming the real bottleneck." } },
            { id: "NVIDIA/cuda-samples", why: { it: "Collezione di esempi ufficiali per CUDA: ottimo punto di partenza per capire come sfruttare davvero le GPU a basso livello.", en: "Collection of official CUDA examples: great starting point to understand how to really use GPUs at a low level." } },
            { id: "NVIDIA/Megatron-LM", why: { it: "Framework per addestrare LLM enormi con parallelismo avanzato (tensor, pipeline, data parallel): riferimento per training su scala massiva.", en: "Framework for training huge LLMs with advanced parallelism (tensor, pipeline, data parallel): a reference for training at massive scale." } }
        ]
    },
    mistral: {
        label: "CHALLENGERS",
        desc: { it: "New Powers & Open Models", en: "New Powers & Open Models" },
        briefing: {
            it: "Nuovi attori che si muovono veloci: Mistral, xAI, Cohere, Stability. Qui ci sono modelli e tool che spesso arrivano per primi su efficienza, qualità open-weight e sperimentazione.",
            en: "New fast-moving players: Mistral, xAI, Cohere, Stability. These models and tools often lead on efficiency, open-weight quality and experimentation."
        },
        items: [
            { id: "mistralai/mistral-src", why: { it: "Codice di riferimento dei modelli Mistral: utile per capire come sono strutturati e come integrarli a basso livello.", en: "Reference code for Mistral models: useful to understand their structure and integrate them at a low level." } },
            { id: "mistralai/mistral-inference", why: { it: "Libreria di inferenza Python per i modelli Mistral: pensata per portare rapidamente i loro LLM in produzione.", en: "Python inference library for Mistral models: designed to quickly bring their LLMs into production." } },
            { id: "xai-org/grok-1", why: { it: "Modello open-weight di xAI: focalizzato su reasoning e contesto ampio, interessante per chi vuole esplorare alternative ai soliti noti.", en: "xAI’s open-weight model: focused on reasoning and large context, interesting if you want alternatives to the usual suspects." } },
            { id: "cohere-ai/cohere-python", why: { it: "SDK Python ufficiale per i modelli Cohere (Command, Embed, Rerank): utile per costruire pipeline di search e applicazioni enterprise.", en: "Official Python SDK for Cohere models (Command, Embed, Rerank): useful for building search pipelines and enterprise applications." } },
            { id: "Stability-AI/stablediffusion", why: { it: "Implementazione storica di Stable Diffusion: la base da cui è esplosa la generazione di immagini open source.", en: "Historical Stable Diffusion implementation: the base from which open-source image generation exploded." } }
        ]
    },
    anthropic: {
        label: "ANTHROPIC",
        desc: { it: "Safety, Claude & Agents", en: "Safety, Claude & Agents" },
        briefing: {
            it: "Creatori di Claude, molto focalizzati su sicurezza, affidabilità e tool agentici. Qui trovi sia le librerie per usare i modelli, sia il materiale per capire come progettarli e valutarli in modo responsabile.",
            en: "Creators of Claude, heavily focused on safety, reliability and agentic tools. Here you find both the libraries to use the models and the material to design and evaluate them responsibly."
        },
        items: [
            { id: "anthropics/claude-code", why: { it: "Agente di coding autonomo da terminale: mostra come un modello tipo Claude può comprendere, navigare e modificare codebase complesse in modo iterativo.", en: "Autonomous coding agent in your terminal: shows how a model like Claude can understand, navigate and modify complex codebases iteratively." } },
            { id: "anthropics/skills", why: { it: "Raccolta ufficiale di tool per agenti Claude (API, servizi, integrazioni): ottimo punto di partenza per costruire agenti utili nella pratica.", en: "Official collection of tools for Claude agents (APIs, services, integrations): great starting point to build practically useful agents." } },
            { id: "anthropics/prompt-eng-interactive-tutorial", why: { it: "Tutorial interattivo di prompt engineering: ti porta, passo dopo passo, da prompt naïf a pattern più robusti e riutilizzabili.", en: "Interactive prompt engineering tutorial: walks you step-by-step from naïve prompts to more robust and reusable patterns." } },
            { id: "anthropics/anthropic-sdk-python", why: { it: "SDK Python ufficiale per integrare Claude (3.5 e successivi) in backend, script e pipeline dati.", en: "Official Python SDK to integrate Claude (3.5 and later) into backends, scripts and data pipelines." } },
            { id: "anthropics/anthropic-cookbook", why: { it: "Repository essenziale con esempi avanzati (RAG, citazioni con fonti, Vision, tool use): perfetto come “laboratorio” per progetti seri.", en: "Essential repo with advanced examples (RAG, cited answers, Vision, tool use): perfect as a 'lab' for real projects." } },
            { id: "anthropics/courses", why: { it: "Materiale educativo su sicurezza, allineamento e best practice di utilizzo: utile per chi vuole andare oltre la semplice integrazione tecnica.", en: "Educational material on safety, alignment and usage best practices: useful if you want to go beyond plain technical integration." } }
        ]
    }
};
// --- DOCS DATA ---

const DOCS_DATA = [
    {
        name: "Google CodeWiki",
        link: "https://codewiki.google/",
        linkText: "codewiki.google",
        models: "Code intelligence, repository knowledge",
        hosting: "Web platform"
    },
    { name: "OpenAI", link: "https://platform.openai.com/docs", linkText: "platform.openai.com", models: "Chat, Vision, Audio, Tools", hosting: "Cloud OpenAI (API), Azure OpenAI" },
    { name: "Google – Gemini API", link: "https://ai.google.dev/gemini-api/docs", linkText: "Google AI for Developers", models: "Multimodal native, JSON, realtime", hosting: "API standalone, Vertex AI" },
    { name: "Anthropic – Claude", link: "https://docs.anthropic.com/", linkText: "docs.anthropic.com", models: "Claude 4.6 Sonnet/Opus", hosting: "Console, AWS Bedrock, Azure" },
    { name: "Anthropic - Claude Skills Guide (PDF)", link: "https://resources.anthropic.com/hubfs/The-Complete-Guide-to-Building-Skill-for-Claude.pdf?hsLang=en", linkText: "resources.anthropic.com (PDF)", models: "Claude skills, tool use", hosting: "PDF download" },
    { name: "Mistral AI", link: "https://docs.mistral.ai/", linkText: "docs.mistral.ai", models: "Mistral Large, Codestral", hosting: "La Plateforme, Azure" },
    { name: "Cohere", link: "https://docs.cohere.com", linkText: "docs.cohere.com", models: "Command R+, Embed, Rerank", hosting: "Cohere Cloud, AWS" },
    { name: "xAI – Grok", link: "https://docs.x.ai/", linkText: "docs.x.ai", models: "Grok 1.5, Vision", hosting: "Cloud xAI, Azure" },
    { name: "Meta – Llama API", link: "https://llama.developer.meta.com/docs/overview", linkText: "llama.developer.meta.com", models: "Llama 3 (8B, 70B, 400B)", hosting: "Managed API, AWS, Azure" },
    { name: "AWS – Bedrock", link: "https://docs.aws.amazon.com/bedrock/", linkText: "AWS Documentation", models: "Amazon Titan, Anthropic, Cohere", hosting: "Fully-managed AWS Service" },
    { name: "Microsoft – Azure AI", link: "https://learn.microsoft.com/azure/ai-foundry/", linkText: "Microsoft Learn", models: "OpenAI, Anthropic, Meta", hosting: "Azure Cloud (Managed endpoints)" },
    { name: "Google Cloud – Vertex AI", link: "https://docs.cloud.google.com/gemini/docs", linkText: "Google Cloud Docs", models: "Gemini, PaLM, Gemma", hosting: "Google Cloud managed platform" },
    // NEW: Kaggle 5-Day GenAI
    {
        name: "Kaggle – 5-Day GenAI Intensive",
        link: "https://www.kaggle.com/learn-guide/5-day-genai",
        linkText: "kaggle.com/learn-guide/5-day-genai",
        models: "Foundational models, embeddings, agents, domain LLMs, MLOps",
        hosting: "Free, self-paced intensive course (Kaggle + Google)"
    },
    {
        name: "OpenAI Academy",
        link: "https://academy.openai.com/",
        linkText: "academy.openai.com",
        models: "GenAI Development, Best Practices, Community",
        hosting: "OpenAI Learning Platform"
    },
    {
        name: "Microsoft AI for Beginners",
        link: "https://microsoft.github.io/AI-For-Beginners/",
        linkText: "microsoft.github.io/AI-For-Beginners",
        models: "AI fundamentals, ML, CV, NLP, projects",
        hosting: "Free curriculum (Microsoft + GitHub Pages)"
    },
    { name: "Google Gemini Cookbook", link: "https://github.com/google-gemini/cookbook", linkText: "github.com/google-gemini/cookbook", models: "Gemini multimodal, Function Calling, RAG, Agents, Live API", hosting: "Open-source examples (GitHub)" },
    { name: "LlamaIndex", link: "https://developers.llamaindex.ai", linkText: "developers.llamaindex.ai", models: "RAG, agentic retrieval, ingestion pipelines, structured extraction", hosting: "Self-hosted, managed cloud" },
    { name: "LangChain", link: "https://python.langchain.com/docs/get_started/introduction", linkText: "python.langchain.com", models: "Framework agnostic", hosting: "Self-hosted, LangSmith" },
    { name: "Hugging Face", link: "https://huggingface.co/docs", linkText: "huggingface.co/docs", models: "1M+ Open Models", hosting: "Inference API, Endpoints" },
    { name: "Microsoft Semantic Kernel", link: "https://learn.microsoft.com/en-us/semantic-kernel", linkText: "learn.microsoft.com", models: "OpenAI, Anthropic, Meta", hosting: "Azure Cloud" },
    { name: "Pinecone", link: "https://docs.pinecone.io", linkText: "docs.pinecone.io", models: "Vector Database", hosting: "Managed Cloud" },
    { name: "Vercel SDK", link: "https://sdk.vercel.ai/docs", linkText: "sdk.vercel.ai", models: "Adapter for all major providers", hosting: "Vercel, Next.js" },
    { name: "MDN Web Docs", link: "https://developer.mozilla.org/en-US/", linkText: "developer.mozilla.org", models: "Web platform reference", hosting: "Mozilla" },
    { name: "VS Code", link: "https://code.visualstudio.com/", linkText: "code.visualstudio.com", models: "Extensions, Copilot, AI chat", hosting: "Desktop, Web", group: "ide" },
    { name: "Cursor", link: "https://www.cursor.com/", linkText: "cursor.com", models: "AI-first editor, chat, refactor", hosting: "Desktop", group: "ide" },
    { name: "Windsurf (Codeium)", link: "https://codeium.com/windsurf", linkText: "codeium.com/windsurf", models: "AI-first IDE, agent workflows", hosting: "Desktop", group: "ide" },
    { name: "JetBrains IDEs", link: "https://www.jetbrains.com/ai/", linkText: "jetbrains.com/ai", models: "AI Assistant across IDEs", hosting: "Desktop", group: "ide" },
    { name: "Zed", link: "https://zed.dev/", linkText: "zed.dev", models: "Fast editor with AI features", hosting: "Desktop", group: "ide" },
    { name: "Replit", link: "https://replit.com/", linkText: "replit.com", models: "AI coding in browser", hosting: "Cloud", group: "ide" },
    { name: "Visual Studio", link: "https://visualstudio.microsoft.com/", linkText: "visualstudio.microsoft.com", models: "Enterprise IDE with AI", hosting: "Desktop", group: "ide" },
    { name: "Claude Code", link: "https://github.com/anthropics/claude-code", linkText: "github.com/anthropics/claude-code", models: "Agentic coding workflows", hosting: "Desktop app, CLI", group: "ide" },
    { name: "Google Antigravity Codelab", link: "https://codelabs.developers.google.com/getting-started-google-antigravity?hl=it#0", linkText: "codelabs.developers.google.com", models: "Getting started tutorial, experimental IDE concepts", hosting: "Google Codelabs (Web)", group: "ide" },
    { name: "Google Colab", link: "https://colab.research.google.com/", linkText: "colab.research.google.com", models: "Notebook + AI prototyping", hosting: "Cloud", group: "ide" },
    { name: "GitHub Copilot", link: "https://docs.github.com/en/copilot", linkText: "docs.github.com/copilot", models: "Autocomplete, chat, refactor", hosting: "VS Code, JetBrains, Neovim", group: "ide" },
    { name: "Codeium", link: "https://codeium.com/docs", linkText: "codeium.com/docs", models: "Autocomplete, chat, commands", hosting: "VS Code, JetBrains, Vim", group: "ide" },
    { name: "Tabnine", link: "https://www.tabnine.com/docs", linkText: "tabnine.com/docs", models: "Autocomplete, chat", hosting: "VS Code, JetBrains, Neovim", group: "ide" },
    { name: "Sourcegraph Cody", link: "https://sourcegraph.com/docs/cody", linkText: "sourcegraph.com/docs/cody", models: "Chat, codebase search, fixes", hosting: "VS Code, JetBrains, Web", group: "ide" },
    { name: "Continue", link: "https://docs.continue.dev/", linkText: "docs.continue.dev", models: "Local or remote models, chat", hosting: "VS Code, JetBrains", group: "ide" },
    { name: "Amazon Q Developer", link: "https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/what-is.html", linkText: "docs.aws.amazon.com/amazonq", models: "Chat, code gen, AWS help", hosting: "VS Code, JetBrains, AWS Console", group: "ide" },
    { name: "Gemini Code Assist", link: "https://cloud.google.com/gemini/docs/codeassist/overview", linkText: "cloud.google.com/gemini/codeassist", models: "Chat, code completion, fixes", hosting: "VS Code, JetBrains, Cloud Shell", group: "ide" },
    { name: "Cline", link: "https://github.com/cline/cline", linkText: "github.com/cline/cline", models: "Agentic coding in VS Code", hosting: "VS Code", group: "ide" },
    { name: "Tabby", link: "https://github.com/TabbyML/tabby", linkText: "github.com/TabbyML/tabby", models: "Self-hosted code assistant", hosting: "Self-hosted, IDE plugins", group: "ide" },
    { name: "Ollama", link: "https://github.com/ollama/ollama/blob/main/docs/api.md", linkText: "github.com/ollama", models: "Llama 3, Mistral, Gemma", hosting: "Localhost, Docker" },
    { name: "Model Context Protocol", link: "https://modelcontextprotocol.io", linkText: "modelcontextprotocol.io", models: "Standard for connecting AI to data", hosting: "Open Protocol" }
];

const DOCS_THEMES = {
    core: {
        label: "CORE_DOCS",
        briefing: {
            it: "Link ufficiali per piattaforme, API e framework. Usa questa sezione come source of truth.",
            en: "Official links for platforms, APIs, and frameworks. Use this section as the source of truth."
        }
    },
    ide: {
        label: "IDE_TOOLS",
        briefing: {
            it: "IDE e assistenti per iniziare con AI: editor, plugin e agenti di coding.",
            en: "IDEs and assistants to get started with AI: editors, plugins, and coding agents."
        }
    }
};

const DOCS_STATE = {
    activeKey: 'core'
};

// --- CONSTANTS & STATE ---
let currentLang = 'en';
const apiKey = "";
let explorerExpanded = {};
let titanExpanded = {};
let mcpExpanded = {};
const CACHE_DURATION = 1000 * 60 * 60 * 24; // 24 Hours Cache
const EXPLORER_CACHE_VERSION = 'v2';
let explorerSortMode = 'stars';
let explorerActiveKey = 'core';
let explorerMode = 'theme';
let explorerSearchResults = [];

const dom = {
    navButtons: document.querySelectorAll('.nav-tab-btn'),
    viewExplorer: document.getElementById('view-explorer'),
    viewTitans: document.getElementById('view-titans'),
    viewMcp: document.getElementById('view-mcp'),
    viewDocs: document.getElementById('view-docs'),
    viewCodeReview: document.getElementById('view-code-review'),
    searchInput: document.getElementById('search-input'),
    executeButton: document.getElementById('execute-query-button'),
    repoSortStars: document.getElementById('repo-sort-stars'),
    repoSortUpdated: document.getElementById('repo-sort-updated'),
    expButtonsContainer: document.getElementById('category-buttons'),
    titansButtonsContainer: document.getElementById('titans-buttons'),
    mcpButtonsContainer: document.getElementById('mcp-buttons'),
    docsButtonsContainer: document.getElementById('docs-buttons'),
    resultsContainer: document.getElementById('results-container'),
    titansContainer: document.getElementById('titans-container'),
    mcpContainer: document.getElementById('mcp-container'),
    docsContainer: document.getElementById('docs-container'),
    resultsTitle: document.getElementById('results-title'),
    resultsSubtitle: document.getElementById('results-subtitle'),
    explorerBriefing: document.getElementById('explorer-briefing'),
    explorerBriefingText: document.getElementById('explorer-briefing-text'),
    titanBriefing: document.getElementById('titan-briefing'),
    titanBriefingTitle: document.getElementById('titan-briefing-title'),
    titanBriefingText: document.getElementById('titan-briefing-text'),
    mcpBriefingText: document.getElementById('mcp-briefing-text'),
    docsBriefingText: document.getElementById('docs-briefing-text'),
    titanHeaderName: document.getElementById('titan-header-name'),
    titanLogo: document.getElementById('titan-logo-placeholder'),
    spinnerExp: document.getElementById('loading-spinner-exp'),
    spinnerTitans: document.getElementById('loading-spinner-titans'),
    apiStatusDot: document.getElementById('api-status-dot'),
    langEn: document.getElementById('lang-en'),
    langIt: document.getElementById('lang-it'),
    mcpSearchInput: document.getElementById('mcp-search-input'),
    mcpSearchButton: document.getElementById('mcp-search-button'),
    modalChat: document.getElementById('chat-modal'),
    btnOpenChat: document.getElementById('btn-open-chat'),
    btnCloseChat: document.getElementById('btn-close-chat'),
    btnExpandChat: document.getElementById('btn-expand-chat'),
    modalManual: document.getElementById('manual-modal'),
    btnOpenManual: document.getElementById('btn-open-manual'),
    btnCloseManual: document.getElementById('btn-close-manual'),
    errorContainer: document.getElementById('error-container'),
    resultsExtra: document.getElementById('results-extra'),
    titansExtra: document.getElementById('titans-extra'),
    mcpExtra: document.getElementById('mcp-extra'),
    apiKeyModal: document.getElementById('api-key-modal'),
    codeReviewUrl: document.getElementById('code-review-url'),
    codeReviewRun: document.getElementById('code-review-run'),
    codeReviewStatus: document.getElementById('code-review-status'),
    codeReviewTabs: document.querySelectorAll('#code-review-tabs .cr-tab'),
    codeReviewSummary: document.getElementById('code-review-summary'),
    codeReviewSummaryText: document.getElementById('code-review-summary-text'),
    codeReviewList: document.getElementById('code-review-list'),
    codeReviewEmpty: document.getElementById('code-review-empty'),
    codeReviewSpinner: document.getElementById('code-review-spinner'),
    codeReviewLog: document.getElementById('code-review-log'),
    codeReviewOverview: document.getElementById('code-review-overview')
};

const isVisible = (el) => el && !el.classList.contains('hidden');
let lastFocusedChatTrigger = null;
let lastFocusedManualTrigger = null;
let lastFocusedApiTrigger = null;

function setModalState(modal, isOpen) {
    if (!modal) return;
    modal.classList.toggle('hidden', !isOpen);
    modal.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
}

function restoreFocus(target) {
    if (target && typeof target.focus === 'function') {
        target.focus();
    }
}

// --- CACHE SYSTEM ---
function getFromCache(key) {
    try {
        const raw = localStorage.getItem('v2_cache_' + key);
        if (!raw) return null;
        const json = JSON.parse(raw);
        if (Date.now() - json.ts > CACHE_DURATION) {
            localStorage.removeItem('v2_cache_' + key);
            return null;
        }
        return json.data;
    } catch (e) { console.error("Cache Read Error", e); return null; }
}

function saveToCache(key, data) {
    try {
        localStorage.setItem('v2_cache_' + key, JSON.stringify({ ts: Date.now(), data }));
    } catch (e) {
        if (e.name === 'QuotaExceededError') {
            console.warn("LocalStorage Full - Clearing old cache");
            localStorage.clear(); // Nuclear option, or implement LRU
            try {
                localStorage.setItem('v2_cache_' + key, JSON.stringify({ ts: Date.now(), data }));
            } catch (e2) { }
        }
    }
}

// --- CORE FUNCTIONS ---

function showError(message) {
    if (!dom.errorContainer) return;
    dom.errorContainer.textContent = message;
    dom.errorContainer.classList.remove('hidden');
    setTimeout(() => { dom.errorContainer.classList.add('hidden'); }, 5000);
}

function detectLanguage() {
    const userLang = navigator.language || navigator.userLanguage;
    setLanguage(userLang.startsWith('it') ? 'it' : 'en');
}

function setLanguage(lang) {
    currentLang = lang;
    if (dom.langEn) {
        dom.langEn.classList.toggle('text-white', lang === 'en');
        dom.langEn.classList.toggle('text-gray-500', lang !== 'en');
    }
    if (dom.langIt) {
        dom.langIt.classList.toggle('text-white', lang === 'it');
        dom.langIt.classList.toggle('text-gray-500', lang !== 'it');
    }

    const texts = I18N[lang];

    // Universal Text Updates
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (texts[key]) el.innerHTML = texts[key];
    });

    if (dom.btnOpenChat) {
        dom.btnOpenChat.title = lang === 'it' ? 'Apri chat NEXUS' : 'Open NEXUS chat';
    }
    updateSearchPlaceholder();

    // Refresh current view content if needed
    const activeCategory = document.querySelector('.btn-category.active');
    if (isVisible(dom.viewExplorer)) {
        if (explorerMode === 'search') {
            renderExplorerSearchResults();
        } else if (activeCategory) {
            updateExplorerContent(activeCategory.dataset.key);
        }
    } else if (activeCategory && isVisible(dom.viewTitans)) {
        updateTitanContent(activeCategory.dataset.key);
    }
    if (isVisible(dom.viewMcp)) {
        const activeMcp = getActiveMcpKey();
        if (activeMcp) updateMcpContent(activeMcp);
        else loadMcpCategory('official');
    }
    if (isVisible(dom.viewDocs)) loadDocsCategory(DOCS_STATE.activeKey);
    updateCodeReviewTexts();
}

function updateSearchPlaceholder() {
    if (dom.searchInput) {
        if (isVisible(dom.viewMcp)) {
            dom.searchInput.placeholder = I18N[currentLang].mcp_search_placeholder;
        } else {
            dom.searchInput.placeholder = I18N[currentLang].search_placeholder;
        }
    }
    if (dom.mcpSearchInput) {
        dom.mcpSearchInput.placeholder = I18N[currentLang].mcp_search_placeholder;
    }
}

// --- CODE REVIEW HUB (4 MODULES) ---
const CODE_REVIEW_TABS = ['refactor', 'documentation', 'efficiency', 'security'];
const CODE_REVIEW_TEXTS = {
    en: {
        analyze: 'ANALYZE',
        placeholder: 'https://github.com/owner/repo',
        summary: 'Summary',
        empty: 'No suggestions yet. Run analysis to see results.',
        overview_title: 'How to use this',
        overview_body: 'Paste a GitHub repo URL and choose a module. Each module runs a focused review on the same files.',
        overview_list: [
            'Overview: what the code does and how the main parts fit together.',
            'Documentation: docstrings and clarity improvements.',
            'Efficiency: performance and algorithmic bottlenecks.',
            'Security: vulnerabilities, secrets, risky patterns.'
        ],
        status_no_response: 'No response. Check your Gemini API key.',
        status_ready: 'Ready.',
        status_fetching: 'Fetching repository...',
        status_analyzing: 'Analyzing: {tab}',
        error_invalid_url: 'Invalid GitHub URL. Use https://github.com/owner/repo',
        error_no_files: 'No supported code files found in this repository.',
        tabs: {
            security: 'Security',
            refactor: 'Overview',
            efficiency: 'Efficiency',
            documentation: 'Documentation'
        }
    },
    it: {
        analyze: 'ANALIZZA',
        placeholder: 'https://github.com/owner/repo',
        summary: 'Riepilogo',
        empty: 'Nessun suggerimento. Avvia l\'analisi per vedere i risultati.',
        overview_title: 'Come si usa',
        overview_body: 'Incolla un URL GitHub e scegli un modulo. Ogni modulo esegue una revisione mirata sugli stessi file.',
        overview_list: [
            'Overview: cosa fa il codice e come si collegano le parti principali.',
            'Documentation: docstring e chiarezza del codice.',
            'Efficiency: performance e colli di bottiglia.',
            'Security: vulnerabilita, segreti, pattern rischiosi.'
        ],
        status_no_response: 'Nessuna risposta. Controlla la chiave Gemini.',
        status_ready: 'Pronto.',
        status_fetching: 'Scarico repository...',
        status_analyzing: 'Analisi: {tab}',
        error_invalid_url: 'URL GitHub non valido. Usa https://github.com/owner/repo',
        error_no_files: 'Nessun file supportato trovato nel repository.',
        tabs: {
            security: 'Security',
            refactor: 'Overview',
            efficiency: 'Efficiency',
            documentation: 'Documentation'
        }
    }
};

const CODE_REVIEW_INSTRUCTIONS = {
    en: {
        security: "You are a senior security researcher. Analyze for vulnerabilities, leaked secrets, insecure dependencies, and permission flaws. Provide specific fixes.",
        refactor: "You are a codebase explainer. Provide a beginner-friendly overview of what the repository does and what the main parts/files are responsible for.",
        efficiency: "You are a performance engineer. Find bottlenecks and propose faster, leaner alternatives.",
        documentation: "You are a technical writer. Suggest documentation improvements and docstrings."
    },
    it: {
        security: "Sei un ricercatore di sicurezza senior. Analizza vulnerabilita, segreti esposti, dipendenze insicure e permessi rischiosi. Fornisci fix specifici.",
        refactor: "Sei un divulgatore di codebase. Fornisci una panoramica per principianti di cosa fa il repository e delle responsabilita dei file principali.",
        efficiency: "Sei un ingegnere delle performance. Trova colli di bottiglia e alternative piu rapide e leggere.",
        documentation: "Sei un technical writer. Suggerisci miglioramenti a documentazione e docstring."
    }
};

function getCodeReviewSystemInstruction(tabId) {
    const lang = currentLang === 'it' ? 'it' : 'en';
    const base = (CODE_REVIEW_INSTRUCTIONS[lang] && CODE_REVIEW_INSTRUCTIONS[lang][tabId])
        || CODE_REVIEW_INSTRUCTIONS.en[tabId]
        || '';
    const langLine = lang === 'it' ? 'LINGUA: Rispondi in ITALIANO.' : 'LANGUAGE: Respond in ENGLISH.';
    return `${base}\n${langLine}`;
}

const CODE_REVIEW_STATE = {
    repoUrl: '',
    files: [],
    activeTab: 'refactor',
    analyses: {
        security: { summary: '', suggestions: [] },
        refactor: { summary: '', suggestions: [] },
        efficiency: { summary: '', suggestions: [] },
        documentation: { summary: '', suggestions: [] }
    },
    isFetching: false,
    isAnalyzing: false,
    fileLog: {
        analyzed: [],
        skippedLarge: 0,
        skippedUnsupported: 0
    }
};

function updateCodeReviewTexts() {
    const t = CODE_REVIEW_TEXTS[currentLang] || CODE_REVIEW_TEXTS.en;
    if (dom.codeReviewRun) dom.codeReviewRun.textContent = t.analyze;
    if (dom.codeReviewUrl) dom.codeReviewUrl.placeholder = t.placeholder;
    if (dom.codeReviewEmpty) dom.codeReviewEmpty.textContent = t.empty;
    if (dom.codeReviewSummary) {
        const label = dom.codeReviewSummary.querySelector('span');
        if (label) label.textContent = t.summary;
    }
    dom.codeReviewTabs.forEach(btn => {
        const tab = btn.dataset.tab;
        if (tab && t.tabs[tab]) btn.textContent = t.tabs[tab];
    });
    if (dom.codeReviewOverview) {
        const listHtml = (t.overview_list || []).map(item => `<li>${escapeHtml(item)}</li>`).join('');
        dom.codeReviewOverview.innerHTML = `
                    <div class="text-cyan-400 font-bold text-xs tracking-widest uppercase">${escapeHtml(t.overview_title)}</div>
                    <p class="mt-2 text-gray-300">${escapeHtml(t.overview_body)}</p>
                    <ul class="mt-3 text-xs text-gray-400 list-disc list-inside space-y-1">${listHtml}</ul>
                `;
    }
    setCodeReviewStatus(t.status_ready);
    renderCodeReviewLog();
}

function setCodeReviewStatus(message, isError = false) {
    if (!dom.codeReviewStatus) return;
    dom.codeReviewStatus.textContent = message || '';
    dom.codeReviewStatus.classList.toggle('text-red-400', isError);
    dom.codeReviewStatus.classList.toggle('text-gray-500', !isError);
}

function setCodeReviewActiveTab(tabId) {
    CODE_REVIEW_STATE.activeTab = tabId;
    dom.codeReviewTabs.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tabId);
    });
    renderCodeReviewResults(tabId);
    if (CODE_REVIEW_STATE.files.length > 0 && !CODE_REVIEW_STATE.analyses[tabId].summary) {
        runCodeReviewAnalysis(tabId);
    }
}

function escapeHtml(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function parseGeminiJson(text) {
    try {
        return JSON.parse(text);
    } catch (e) { }
    const fenced = text.match(/```json\s*([\s\S]*?)```/i);
    if (fenced && fenced[1]) {
        try { return JSON.parse(fenced[1]); } catch (e) { }
    }
    const firstObj = text.match(/\{[\s\S]*\}/);
    if (firstObj) {
        try { return JSON.parse(firstObj[0]); } catch (e) { }
    }
    return null;
}

function normalizeAiText(text) {
    if (!text) return '';
    return String(text)
        .replace(/\r/g, '')
        .replace(/\*\*/g, '')
        .replace(/__/g, '')
        .replace(/`/g, '')
        .trim();
}

function getCodeReviewCacheKey(repoUrl, tabId) {
    const lang = currentLang === 'it' ? 'it' : 'en';
    return `code_review_v2_${lang}_${tabId}_${encodeURIComponent(repoUrl)}`;
}

function getCodeReviewFileSignature(files) {
    const signature = files
        .map(f => `${f.path}:${f.content ? f.content.length : 0}`)
        .join('|');
    return signature.slice(0, 4000);
}

function renderCodeReviewLog() {
    if (!dom.codeReviewLog) return;
    const log = CODE_REVIEW_STATE.fileLog;
    if (!log.analyzed.length) {
        dom.codeReviewLog.classList.add('hidden');
        dom.codeReviewLog.innerHTML = '';
        return;
    }
    const analyzedList = log.analyzed.map(p => `- ${escapeHtml(p)}`).join('<br>');
    const skippedInfo = [];
    if (log.skippedLarge) skippedInfo.push(`${log.skippedLarge} oversized`);
    if (log.skippedUnsupported) skippedInfo.push(`${log.skippedUnsupported} unsupported`);
    const skippedText = skippedInfo.length ? ` | Skipped: ${skippedInfo.join(', ')}` : '';
    dom.codeReviewLog.innerHTML = `FILES ANALYZED (${log.analyzed.length})${skippedText}<br>${analyzedList}`;
    dom.codeReviewLog.classList.remove('hidden');
}

function buildCodeReviewPrompt(tabId, combinedCode) {
    const lang = currentLang === 'it' ? 'it' : 'en';
    if (tabId === 'refactor') {
        return lang === 'it' ? [
            'Crea una panoramica per principianti del repository.',
            'Rispondi in ITALIANO e in testo semplice (niente Markdown, niente **).',
            'Formato: JSON con chiavi summary (stringa) e suggestions (array).',
            'summary: descrizione chiara in poche frasi.',
            'suggestions: file chiave (max 6) con filePath, description (ruolo), originalCode (snippet breve), suggestedCode (spiegazione semplice).',
            `\n${combinedCode}`
        ].join('\n') : [
            'Create a beginner-friendly overview of this repository.',
            'Respond in ENGLISH and plain text (no Markdown, no **).',
            'Format: JSON with keys summary (string) and suggestions (array).',
            'summary: a clear description in a few sentences.',
            'suggestions: key files (max 6) with filePath, description (role), originalCode (short snippet), suggestedCode (simple explanation).',
            `\n${combinedCode}`
        ].join('\n');
    }

    return lang === 'it' ? [
        `Analizza questo repository per aspetti di ${tabId}.`,
        'Rispondi in ITALIANO e in testo semplice (niente Markdown, niente **).',
        'Formato: JSON con chiavi summary (stringa) e suggestions (array).',
        'Ogni suggestion deve includere: filePath, description, originalCode, suggestedCode.',
        'Se non trovi problemi, usa summary e lascia suggestions vuoto.',
        `\n${combinedCode}`
    ].join('\n') : [
        `Analyze this repository for ${tabId} issues.`,
        'Respond in ENGLISH and plain text (no Markdown, no **).',
        'Format: JSON with keys summary (string) and suggestions (array).',
        'Each suggestion must include: filePath, description, originalCode, suggestedCode.',
        'If nothing found, return a summary and empty suggestions.',
        `\n${combinedCode}`
    ].join('\n');
}

async function fetchCodeReviewFiles(repoUrl) {
    const VALID_EXTENSIONS = [
        '.js', '.ts', '.tsx', '.jsx', '.py', '.java', '.go', '.rs',
        '.cpp', '.c', '.h', '.hpp', '.cs', '.php', '.rb', '.swift', '.kt', '.html', '.css'
    ];
    const MAX_FILES = 20;
    const MAX_FILE_BYTES = 120000;
    const MAX_TOTAL_BYTES = 600000;

    let url;
    try {
        url = new URL(repoUrl);
    } catch (e) {
        throw new Error(CODE_REVIEW_TEXTS[currentLang].error_invalid_url);
    }

    const parts = url.pathname.split('/').filter(Boolean);
    const owner = parts[0];
    const repo = parts[1];
    if (!owner || !repo) throw new Error(CODE_REVIEW_TEXTS[currentLang].error_invalid_url);

    const files = [];
    let totalBytes = 0;
    let skippedLarge = 0;
    let skippedUnsupported = 0;
    const fetchDir = async (path = '') => {
        if (files.length >= MAX_FILES) return;
        const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
        const response = await fetch(apiUrl);
        if (!response.ok) {
            if (response.status === 403) {
                throw new Error("GitHub API rate limit exceeded. Try again later.");
            }
            throw new Error(`GitHub error: ${response.status}`);
        }
        const items = await response.json();
        for (const item of items) {
            if (files.length >= MAX_FILES) break;
            if (item.type === 'file' && VALID_EXTENSIONS.some(ext => item.name.toLowerCase().endsWith(ext))) {
                if (item.size && item.size > MAX_FILE_BYTES) {
                    skippedLarge += 1;
                    continue;
                }
                if (item.size && (totalBytes + item.size) > MAX_TOTAL_BYTES) {
                    skippedLarge += 1;
                    continue;
                }
                try {
                    const fileRes = await fetch(item.download_url);
                    const content = await fileRes.text();
                    totalBytes += content.length;
                    files.push({ path: item.path, name: item.name, content });
                } catch (e) { }
            } else if (item.type === 'file') {
                skippedUnsupported += 1;
            } else if (item.type === 'dir' && !item.name.startsWith('.') && item.name !== 'node_modules') {
                await fetchDir(item.path);
            }
        }
    };

    await fetchDir();
    CODE_REVIEW_STATE.fileLog = {
        analyzed: files.map(f => f.path),
        skippedLarge,
        skippedUnsupported
    };
    renderCodeReviewLog();
    return files;
}

async function runCodeReview(repoUrl) {
    if (!repoUrl) return;
    CODE_REVIEW_STATE.repoUrl = repoUrl;
    CODE_REVIEW_STATE.files = [];
    CODE_REVIEW_TABS.forEach(tab => {
        CODE_REVIEW_STATE.analyses[tab] = { summary: '', suggestions: [] };
    });
    CODE_REVIEW_STATE.fileLog = { analyzed: [], skippedLarge: 0, skippedUnsupported: 0 };
    renderCodeReviewResults(CODE_REVIEW_STATE.activeTab);
    renderCodeReviewLog();
    dom.codeReviewSpinner.classList.remove('hidden');
    setCodeReviewStatus(CODE_REVIEW_TEXTS[currentLang].status_fetching);
    CODE_REVIEW_STATE.isFetching = true;

    try {
        const files = await fetchCodeReviewFiles(repoUrl);
        if (!files.length) {
            throw new Error(CODE_REVIEW_TEXTS[currentLang].error_no_files);
        }
        CODE_REVIEW_STATE.files = files;
        await runCodeReviewAnalysis(CODE_REVIEW_STATE.activeTab);
    } catch (e) {
        setCodeReviewStatus(e.message || 'Error', true);
        dom.codeReviewSpinner.classList.add('hidden');
    } finally {
        CODE_REVIEW_STATE.isFetching = false;
    }
}

async function runCodeReviewAnalysis(tabId) {
    if (CODE_REVIEW_STATE.isAnalyzing || CODE_REVIEW_STATE.files.length === 0) return;
    CODE_REVIEW_STATE.isAnalyzing = true;
    dom.codeReviewSpinner.classList.remove('hidden');
    const tabLabel = (CODE_REVIEW_TEXTS[currentLang].tabs[tabId] || tabId);
    setCodeReviewStatus(CODE_REVIEW_TEXTS[currentLang].status_analyzing.replace('{tab}', tabLabel));

    const signature = getCodeReviewFileSignature(CODE_REVIEW_STATE.files);
    const cacheKey = getCodeReviewCacheKey(CODE_REVIEW_STATE.repoUrl, tabId);
    const cached = getFromCache(cacheKey);
    const cachedHasContent = cached
        && cached.signature === signature
        && ((cached.summary && String(cached.summary).trim().length > 0)
            || (Array.isArray(cached.suggestions) && cached.suggestions.length > 0));
    if (cachedHasContent) {
        CODE_REVIEW_STATE.analyses[tabId] = {
            summary: cached.summary || '',
            suggestions: Array.isArray(cached.suggestions) ? cached.suggestions : []
        };
        CODE_REVIEW_STATE.isAnalyzing = false;
        dom.codeReviewSpinner.classList.add('hidden');
        setCodeReviewStatus(CODE_REVIEW_TEXTS[currentLang].status_ready);
        renderCodeReviewResults(tabId);
        return;
    }

    const combinedCode = CODE_REVIEW_STATE.files
        .map(f => `FILE: ${f.path}\nCODE:\n${f.content}`)
        .join('\n\n---\n\n');

    const analysisPrompt = buildCodeReviewPrompt(tabId, combinedCode);

    try {
        const response = await callGemini(analysisPrompt, getCodeReviewSystemInstruction(tabId));

        // User cancelled (no key)
        if (response === null) {
            setCodeReviewStatus(CODE_REVIEW_TEXTS[currentLang].status_no_response, true);
            return;
        }

        // Gemini returned an error string (invalid key, rate limit message, etc.)
        const GEMINI_ERROR_PREFIXES = [
            I18N[currentLang].gemini_invalid_key,
            I18N[currentLang].gemini_system_error,
            '[BLOCK]',
            '[SYSTEM]'
        ];
        const isErrorResponse = GEMINI_ERROR_PREFIXES.some(p => p && String(response).startsWith(p));
        if (isErrorResponse) {
            setCodeReviewStatus(String(response), true);
            return;
        }

        const rawResponse = String(response || '');
        let data = parseGeminiJson(rawResponse);
        let summary = '';
        let suggestions = [];
        if (data) {
            if (typeof data.summary === 'string') summary = data.summary;
            if (Array.isArray(data.suggestions)) suggestions = data.suggestions;
        }
        if (!summary && rawResponse && suggestions.length === 0) {
            summary = rawResponse;
        }
        CODE_REVIEW_STATE.analyses[tabId] = {
            summary: normalizeAiText(summary),
            suggestions
        };
        saveToCache(cacheKey, {
            signature,
            summary: CODE_REVIEW_STATE.analyses[tabId].summary,
            suggestions: CODE_REVIEW_STATE.analyses[tabId].suggestions
        });
        setCodeReviewStatus(CODE_REVIEW_TEXTS[currentLang].status_ready);
        renderCodeReviewResults(tabId);

    } catch (err) {
        console.error('Code Review analysis error:', err);
        setCodeReviewStatus((err && err.message) || 'Unexpected error.', true);
    } finally {
        // Always reset the lock and spinner, no matter what
        CODE_REVIEW_STATE.isAnalyzing = false;
        dom.codeReviewSpinner.classList.add('hidden');
    }
}

function renderCodeReviewResults(tabId) {
    const analysis = CODE_REVIEW_STATE.analyses[tabId];
    const summaryText = normalizeAiText(analysis.summary || '');
    const hasSummary = summaryText && summaryText.trim().length > 0;
    dom.codeReviewSummary.classList.toggle('hidden', !hasSummary);
    dom.codeReviewSummaryText.textContent = summaryText;

    dom.codeReviewList.innerHTML = '';
    const suggestions = analysis.suggestions || [];
    if (!suggestions.length) {
        dom.codeReviewEmpty.classList.remove('hidden');
        return;
    }
    dom.codeReviewEmpty.classList.add('hidden');

    suggestions.forEach(s => {
        const description = normalizeAiText(s.description || '');
        const isOverview = tabId === 'refactor';
        const suggestedText = isOverview ? normalizeAiText(s.suggestedCode || '') : (s.suggestedCode || '');
        const card = document.createElement('div');
        const filePath = escapeHtml(s.filePath || 'unknown-file');
        const fileName = escapeHtml(toRepoFileName((s.filePath || 'review').split('/').pop() || 'review'));
        const reviewDate = formatRepoDate(new Date().toISOString());
        card.className = 'repo-terminal-card repo-terminal-card--review';
        card.innerHTML = `
                    <header class="repo-terminal-head">
                        <div class="repo-terminal-head-left">
                            <span class="repo-dot repo-dot--red"></span>
                            <span class="repo-dot repo-dot--yellow"></span>
                            <span class="repo-dot repo-dot--green"></span>
                            <span class="repo-file-name">${fileName}</span>
                        </div>
                        <div class="repo-terminal-head-right">
                            <span class="repo-doc-pill">REVIEW</span>
                        </div>
                    </header>
                    <div class="repo-review-path">${filePath}</div>
                    <div class="repo-review-desc">${escapeHtml(description)}</div>
                    <div class="repo-review-grid">
                        <div class="repo-review-block">
                            <span class="repo-review-label">Original</span>
                            <pre><code>${escapeHtml(s.originalCode || '')}</code></pre>
                        </div>
                        <div class="repo-review-block repo-review-block--suggested">
                            <span class="repo-review-label">Suggested</span>
                            <pre><code>${escapeHtml(suggestedText)}</code></pre>
                        </div>
                    </div>
                    <footer class="repo-terminal-foot">
                        <span class="repo-terminal-date">${escapeHtml(reviewDate)}</span>
                    </footer>
                `;
        dom.codeReviewList.appendChild(card);
    });
}

function initCodeReview() {
    if (!dom.codeReviewRun) return;
    dom.codeReviewRun.addEventListener('click', () => runCodeReview(dom.codeReviewUrl.value.trim()));
    dom.codeReviewUrl.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') runCodeReview(dom.codeReviewUrl.value.trim());
    });
    dom.codeReviewTabs.forEach(btn => {
        btn.addEventListener('click', () => setCodeReviewActiveTab(btn.dataset.tab));
    });
    setCodeReviewActiveTab(CODE_REVIEW_STATE.activeTab);
    updateCodeReviewTexts();
}

// --- VIEW SWITCHING (Tabs) ---
function switchView(targetId) {
    if (!targetId) return;
    // Update Tab UI
    dom.navButtons.forEach(btn => {
        if (!btn.dataset.target) return;
        btn.classList.toggle('active', btn.dataset.target === targetId);
    });

    // Hide all views
    [dom.viewExplorer, dom.viewTitans, dom.viewMcp, dom.viewDocs, dom.viewCodeReview]
        .filter(Boolean)
        .forEach(el => el.classList.add('hidden'));

    // Show target
    const targetView = document.getElementById(targetId);
    if (!targetView) return;
    targetView.classList.remove('hidden');

    // View specific logic
    if (targetId === 'view-mcp') {
        const activeMcp = getActiveMcpKey();
        if (activeMcp) updateMcpContent(activeMcp);
        else loadMcpCategory('official');
    } else if (targetId === 'view-docs') {
        loadDocsCategory(DOCS_STATE.activeKey);
    } else if (targetId === 'view-titans') {
        if (!document.querySelector('#titans-buttons .active')) {
            loadTitanCategory('openai');
        }
    }
    updateSearchPlaceholder();
}

// --- GITHUB API & RENDERING ---
async function fetchGithubRepos(repoIds) {
    // Note: Caching is handled at the Category level for Themes.
    // This function creates the request.
    try {
        const queryParts = repoIds.map(r => `repo:${r.id || r}`).join(' ');
        const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(queryParts)}&per_page=50`;
        const response = await fetch(url);

        if (response.status === 403) throw new Error("RATE_LIMIT");
        if (!response.ok) throw new Error("NET_ERR");

        const data = await response.json();
        return data.items || [];
    } catch (error) {
        console.error(error);
        if (error.message === "RATE_LIMIT") {
            if (dom.apiStatusDot) dom.apiStatusDot.classList.replace('bg-green-400', 'bg-red-500');
            showError(I18N[currentLang].rate_limit);
        }
        return [];
    }
}

function sortExplorerRepos(repos) {
    const items = Array.isArray(repos) ? repos.slice() : [];
    if (explorerSortMode === 'updated') {
        return items.sort((a, b) => {
            const dateA = Date.parse((a && (a.pushed_at || a.updated_at)) || 0) || 0;
            const dateB = Date.parse((b && (b.pushed_at || b.updated_at)) || 0) || 0;
            return dateB - dateA;
        });
    }
    return items.sort((a, b) => (b.stargazers_count || 0) - (a.stargazers_count || 0));
}

function updateExplorerSortButtons() {
    if (dom.repoSortStars) {
        dom.repoSortStars.classList.toggle('is-active', explorerSortMode === 'stars');
    }
    if (dom.repoSortUpdated) {
        dom.repoSortUpdated.classList.toggle('is-active', explorerSortMode === 'updated');
    }
}

function setExplorerSortMode(mode) {
    if (mode !== 'stars' && mode !== 'updated') return;
    if (explorerSortMode === mode) return;
    explorerSortMode = mode;
    updateExplorerSortButtons();

    if (!isVisible(dom.viewExplorer)) return;
    if (explorerMode === 'search') {
        renderExplorerSearchResults();
        return;
    }
    if (explorerActiveKey) {
        updateExplorerContent(explorerActiveKey);
    }
}

function formatRepoDate(dateValue) {
    if (!dateValue) return '---- -- --';
    const parsed = new Date(dateValue);
    if (Number.isNaN(parsed.getTime())) return '---- -- --';
    return parsed.toISOString().slice(0, 10);
}

function toRepoFileName(rawName) {
    const normalized = String(rawName || 'repository')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
    return `${(normalized || 'repository').slice(0, 28)}.md`;
}

function trimText(text, maxLen = 92) {
    if (!text) return '...';
    return text.length > maxLen ? `${text.slice(0, maxLen - 1)}...` : text;
}

function renderExplorerTerminalCard(repo, whyTextObj) {
    const repoNameRaw = repo.name || 'repository';
    const ownerNameRaw = repo.owner && repo.owner.login ? repo.owner.login : 'owner';
    const repoFullNameRaw = repo.full_name || `${ownerNameRaw}/${repoNameRaw}`;
    const repoUrlRaw = repo.html_url || '#';
    const languageRaw = repo.language || 'repo';
    const repoDescRaw = trimText(repo.description || 'No description available.', 108);
    const whyRaw = whyTextObj && whyTextObj[currentLang] ? whyTextObj[currentLang] : '';
    const insightRaw = trimText(whyRaw || repoDescRaw, 96);
    const fileNameRaw = toRepoFileName(repoNameRaw);
    const updatedRaw = formatRepoDate(repo.pushed_at || repo.updated_at);
    const starsRaw = formatStars(repo.stargazers_count);

    const repoName = escapeHtml(repoNameRaw);
    const repoFullName = escapeHtml(repoFullNameRaw);
    const repoUrl = escapeHtml(repoUrlRaw);
    const language = escapeHtml(languageRaw);
    const repoDesc = escapeHtml(repoDescRaw);
    const insight = escapeHtml(insightRaw);
    const fileName = escapeHtml(fileNameRaw);
    const updatedAt = escapeHtml(updatedRaw);
    const stars = escapeHtml(starsRaw);
    const scanBtn = repoFullNameRaw
        ? `<button type="button" class="scan-btn scan-btn--terminal js-scan-btn" data-repo="${repoFullName}">${escapeHtml(I18N[currentLang].scan_btn)}</button>`
        : '';

    return `
                <article class="repo-terminal-card">
                    <header class="repo-terminal-head">
                        <div class="repo-terminal-head-left">
                            <span class="repo-dot repo-dot--red"></span>
                            <span class="repo-dot repo-dot--yellow"></span>
                            <span class="repo-dot repo-dot--green"></span>
                            <span class="repo-file-name">${fileName}</span>
                        </div>
                        <div class="repo-terminal-head-right">
                            <span class="repo-top-stars">&#9733; ${stars}</span>
                        </div>
                    </header>

                    <div class="repo-terminal-body">
                        <div class="repo-line-numbers" aria-hidden="true">
                            <span>1</span>
                            <span>2</span>
                            <span>3</span>
                            <span>4</span>
                        </div>
                        <div class="repo-line-content">
                            <p class="repo-line">
                                <span class="repo-token-keyword">export</span>
                                <span class="repo-token-name">${repoName}</span>
                            </p>
                            <p class="repo-line">
                                <span class="repo-token-owner">@</span>
                                <span class="repo-token-keyword">from</span>
                                <span class="repo-token-string">"${repoFullName}"</span>
                            </p>
                            <p class="repo-line repo-line-text">${repoDesc}</p>
                            <p class="repo-line repo-line-text">
                                <span class="repo-token-label">${language}</span>
                                ${insight}
                            </p>
                        </div>
                    </div>

                    <footer class="repo-terminal-foot">
                        <span class="repo-terminal-date">${updatedAt}</span>
                        <div class="repo-terminal-actions">
                            ${scanBtn}
                            ${repoFullNameRaw ? `<a href="/code-review?repo=${encodeURIComponent(repoFullNameRaw)}" class="repo-cr-btn" title="Open in Code Review">⌥ CR</a>` : ''}
                            <a href="${repoUrl}" target="_blank" rel="noreferrer" class="repo-terminal-open" aria-label="Open ${repoName} on GitHub">↗</a>
                        </div>
                    </footer>
                </article>
            `;
}

function renderExplorerSearchResults() {
    if (!dom.resultsContainer) return;
    const sorted = sortExplorerRepos(explorerSearchResults || []);
    if (!sorted.length) {
        dom.resultsContainer.innerHTML = `<div class='text-gray-500 font-mono'>${I18N[currentLang].no_result}</div>`;
        return;
    }
    dom.resultsContainer.innerHTML = sorted.map((repo) => renderExplorerTerminalCard(repo, null)).join('');
}

function updateExplorerContent(key) {
    const theme = REPO_THEMES[key];
    if (!theme) return;
    explorerMode = 'theme';
    explorerSearchResults = [];
    explorerActiveKey = key;
    updateExplorerSortButtons();

    dom.resultsTitle.textContent = theme.label;
    dom.resultsSubtitle.textContent = `// ${theme.desc[currentLang]}`;
    dom.explorerBriefing.classList.remove('hidden');
    dom.explorerBriefingText.textContent = theme.briefing[currentLang];
    dom.resultsExtra.innerHTML = '';

    // Try Cache or Memory
    const cacheKey = `theme_${EXPLORER_CACHE_VERSION}_${key}`;
    const cachedData = getFromCache(cacheKey);

    if (cachedData) {
        const expanded = explorerExpanded[key];
        const sorted = sortExplorerRepos(cachedData);
        const toShow = expanded ? sorted : sorted.slice(0, 6);
        dom.resultsContainer.innerHTML = toShow.map((r) => {
            const itemData = theme.items.find(item => item.id.toLowerCase() === r.full_name.toLowerCase());
            return renderExplorerTerminalCard(r, itemData ? itemData.why : null);
        }).join('');

        if (sorted.length > 6) {
            const label = expanded ? I18N[currentLang].show_less : I18N[currentLang].show_all;
            dom.resultsExtra.innerHTML = `<button type="button" class="section-more-btn js-toggle-explorer" data-key="${key}">${label}</button>`;
        }
    }
}

async function loadExplorerCategory(key) {
    document.querySelectorAll('#category-buttons .btn-category').forEach(b => {
        b.classList.toggle('active', b.dataset.key === key);
    });

    const cacheKey = `theme_${EXPLORER_CACHE_VERSION}_${key}`;
    const cachedData = getFromCache(cacheKey);

    if (cachedData) {
        updateExplorerContent(key);
        return;
    }

    // Not in cache, fetch
    const theme = REPO_THEMES[key];
    updateExplorerContent(key); // Show titles
    dom.resultsContainer.innerHTML = "";
    dom.resultsExtra.innerHTML = "";
    dom.spinnerExp.classList.remove('hidden');

    const repos = await fetchGithubRepos(theme.items);
    dom.spinnerExp.classList.add('hidden');

    if (repos.length) {
        repos.sort((a, b) => b.stargazers_count - a.stargazers_count);
        saveToCache(cacheKey, repos); // SAVE TO CACHE
        updateExplorerContent(key);
    } else {
        dom.resultsContainer.innerHTML = `<div class='text-gray-500 font-mono p-4'>${I18N[currentLang].no_data}</div>`;
    }
}

function toggleExplorerExpanded(key) {
    explorerExpanded[key] = !explorerExpanded[key];
    updateExplorerContent(key);
}

// --- TITANS LOGIC (Similar structure) ---
function updateTitanContent(key) {
    const theme = TITAN_THEMES[key];
    if (!theme) return;
    dom.titanHeaderName.textContent = theme.label;
    dom.titanLogo.textContent = theme.label.substring(0, 2);
    dom.titanBriefing.classList.remove('hidden');
    dom.titanBriefingTitle.textContent = `// ${theme.label} STRATEGY`;
    dom.titanBriefingText.textContent = theme.briefing[currentLang];
    dom.titansExtra.innerHTML = '';

    const cacheKey = `titan_${key}`;
    const cachedData = getFromCache(cacheKey);

    if (cachedData) {
        const expanded = titanExpanded[key];
        const toShow = expanded ? cachedData : cachedData.slice(0, 6);
        dom.titansContainer.innerHTML = toShow.map((r) => {
            const itemData = theme.items.find(item => item.id.toLowerCase() === r.full_name.toLowerCase());
            return renderExplorerTerminalCard(r, itemData ? itemData.why : null);
        }).join('');
        if (cachedData.length > 6) {
            const label = expanded ? I18N[currentLang].show_less : I18N[currentLang].show_all;
            dom.titansExtra.innerHTML = `<button type="button" class="section-more-btn js-toggle-titans" data-key="${key}">${label}</button>`;
        }
    }
}

async function loadTitanCategory(key) {
    document.querySelectorAll('#titans-buttons .btn-category').forEach(b => {
        b.classList.toggle('active', b.dataset.key === key);
    });

    const cacheKey = `titan_${key}`;
    const cachedData = getFromCache(cacheKey);

    if (cachedData) {
        updateTitanContent(key);
        return;
    }

    const theme = TITAN_THEMES[key];
    updateTitanContent(key);
    dom.titansContainer.innerHTML = "";
    dom.titansExtra.innerHTML = "";
    dom.spinnerTitans.classList.remove('hidden');

    const repos = await fetchGithubRepos(theme.items);
    dom.spinnerTitans.classList.add('hidden');

    if (repos.length) {
        repos.sort((a, b) => b.stargazers_count - a.stargazers_count);
        saveToCache(cacheKey, repos);
        updateTitanContent(key);
    } else {
        dom.titansContainer.innerHTML = `<div class='text-gray-500 font-mono p-4'>${I18N[currentLang].no_data}</div>`;
    }
}

function toggleTitanExpanded(key) {
    titanExpanded[key] = !titanExpanded[key];
    updateTitanContent(key);
}

// --- MCP & DOCS ---
function getMcpDesc(item) {
    if (!item || !item.desc) return '';
    if (typeof item.desc === 'string') return item.desc;
    return item.desc[currentLang] || item.desc.en || '';
}

function getMcpTitle(item) {
    const lang = currentLang === 'it' ? 'it' : 'en';
    const rawName = (item && item.name) ? String(item.name).toLowerCase() : '';
    const rawTitle = (item && item.title) ? String(item.title).toLowerCase() : '';
    const byName = MCP_NAME_TRANSLATIONS[rawName];
    if (byName && byName[lang]) return byName[lang];
    const byTitle = MCP_TITLE_TRANSLATIONS[rawTitle];
    if (byTitle && byTitle[lang]) return byTitle[lang];
    return item.title || item.name || 'MCP Server';
}

function formatStars(count) {
    if (typeof count !== 'number' || !isFinite(count)) return '-';
    return count >= 1000 ? (count / 1000).toFixed(1) + 'k' : String(count);
}

function parseGithubRepoFromUrl(url) {
    if (!url) return null;
    try {
        const parsed = new URL(url);
        if (parsed.hostname !== 'github.com') return null;
        const parts = parsed.pathname.split('/').filter(Boolean);
        if (parts.length < 2) return null;
        return `${parts[0]}/${parts[1]}`;
    } catch (e) {
        return null;
    }
}

function getMcpRepoFullName(item) {
    if (item && item.repoFullName) return item.repoFullName;
    const repoUrl = item && (item.repoUrl || item.link);
    return parseGithubRepoFromUrl(repoUrl);
}

function getMcpRepoMeta(item) {
    const fullName = getMcpRepoFullName(item);
    if (!fullName) return null;
    if (MCP_STATE.repoMeta[fullName]) return MCP_STATE.repoMeta[fullName];
    const cached = getFromCache(`mcp_repo_${fullName}`);
    if (cached) {
        MCP_STATE.repoMeta[fullName] = cached;
        return cached;
    }
    return null;
}

async function fetchMcpRepoMeta(fullName) {
    const cacheKey = `mcp_repo_${fullName}`;
    const cached = getFromCache(cacheKey);
    if (cached && typeof cached.language === 'string') {
        MCP_STATE.repoMeta[fullName] = cached;
        return;
    }
    if (cached) {
        MCP_STATE.repoMeta[fullName] = cached;
    }
    try {
        const res = await fetch(`https://api.github.com/repos/${fullName}`);
        if (!res.ok) {
            MCP_STATE.repoMeta[fullName] = { fullName, stars: null, owner: '', name: '', htmlUrl: '', language: '', updatedAt: '' };
            return;
        }
        const data = await res.json();
        const meta = {
            fullName: data.full_name,
            stars: data.stargazers_count,
            owner: data.owner && data.owner.login ? data.owner.login : '',
            name: data.name || '',
            htmlUrl: data.html_url || '',
            language: data.language || '',
            updatedAt: data.pushed_at || data.updated_at || ''
        };
        MCP_STATE.repoMeta[fullName] = meta;
        saveToCache(cacheKey, meta);
    } catch (e) {
        MCP_STATE.repoMeta[fullName] = { fullName, stars: null, owner: '', name: '', htmlUrl: '', language: '', updatedAt: '' };
    }
}

function ensureMcpRepoMeta(items) {
    const pending = [];
    items.forEach(item => {
        const fullName = getMcpRepoFullName(item);
        if (!fullName) return;
        const existing = MCP_STATE.repoMeta[fullName];
        if (existing && typeof existing.language === 'string') return;
        if (MCP_STATE.repoLoading[fullName]) return;
        MCP_STATE.repoLoading[fullName] = true;
        pending.push(fullName);
    });
    if (!pending.length) return;
    Promise.all(pending.slice(0, 8).map(name => fetchMcpRepoMeta(name).catch(() => null)))
        .then(() => {
            pending.slice(0, 8).forEach(name => { delete MCP_STATE.repoLoading[name]; });
            const activeMcp = getActiveMcpKey();
            if (activeMcp) updateMcpContent(activeMcp);
        });
}

function renderMcpCard(item) {
    let desc = getMcpDesc(item) || "---";
    if (desc.length > 120) desc = desc.substring(0, 117) + "...";
    const title = getMcpTitle(item);
    const repoMeta = getMcpRepoMeta(item);
    const repoFullName = repoMeta ? repoMeta.fullName : getMcpRepoFullName(item);
    const ownerLabel = repoMeta && repoMeta.owner ? repoMeta.owner : (repoFullName ? repoFullName.split('/')[0] : 'registry');
    const language = repoMeta && repoMeta.language ? repoMeta.language : '';
    const stars = repoMeta ? formatStars(repoMeta.stars) : '-';
    const updatedAt = repoMeta && repoMeta.updatedAt ? formatRepoDate(repoMeta.updatedAt) : 'MCP';
    const link = repoMeta && repoMeta.htmlUrl ? repoMeta.htmlUrl : (item.link || MCP_REGISTRY.docsUrl);
    const scanBtn = repoFullName
        ? `<button type="button" class="scan-btn scan-btn--terminal js-scan-btn" data-repo="${escapeHtml(repoFullName)}">${escapeHtml(I18N[currentLang].scan_btn)}</button>`
        : '';
    const titleText = escapeHtml(title);
    const repoRef = escapeHtml(repoFullName || `${ownerLabel}/${title}`);
    const line3 = escapeHtml(desc);
    const line4Parts = [];
    if (item.official) line4Parts.push(I18N[currentLang].mcp_official_badge);
    if (language) line4Parts.push(language);
    line4Parts.push(trimText(ownerLabel, 28));
    const line4 = escapeHtml(line4Parts.join(' / '));
    const fileName = escapeHtml(toRepoFileName(title));
    const starsText = escapeHtml(stars);
    const dateText = escapeHtml(updatedAt);
    return `
                <article class="repo-terminal-card repo-terminal-card--gold">
                    <header class="repo-terminal-head">
                        <div class="repo-terminal-head-left">
                            <span class="repo-dot repo-dot--red"></span>
                            <span class="repo-dot repo-dot--yellow"></span>
                            <span class="repo-dot repo-dot--green"></span>
                            <span class="repo-file-name">${fileName}</span>
                        </div>
                        <div class="repo-terminal-head-right">
                            <span class="repo-top-stars">&#9733; ${starsText}</span>
                        </div>
                    </header>
                    <div class="repo-terminal-body">
                        <div class="repo-line-numbers" aria-hidden="true">
                            <span>1</span>
                            <span>2</span>
                            <span>3</span>
                            <span>4</span>
                        </div>
                        <div class="repo-line-content">
                            <p class="repo-line">
                                <span class="repo-token-keyword">export</span>
                                <span class="repo-token-name">${titleText}</span>
                            </p>
                            <p class="repo-line">
                                <span class="repo-token-owner">@</span>
                                <span class="repo-token-keyword">from</span>
                                <span class="repo-token-string">"${repoRef}"</span>
                            </p>
                            <p class="repo-line repo-line-text">${line3}</p>
                            <p class="repo-line repo-line-text">
                                <span class="repo-token-label">mcp</span>
                                ${line4}
                            </p>
                        </div>
                    </div>
                    <footer class="repo-terminal-foot">
                        <span class="repo-terminal-date">${dateText}</span>
                        <div class="repo-terminal-actions">
                            ${scanBtn}
                            <a href="${escapeHtml(link)}" target="_blank" rel="noreferrer" class="repo-terminal-open" aria-label="Open ${titleText}">
                                ↗
                            </a>
                        </div>
                    </footer>
                </article>`;
}

function isOfficialRegistryEntry(entry) {
    const meta = entry && entry._meta && entry._meta["io.modelcontextprotocol.registry/official"];
    if (!meta) return false;
    if (meta.status && meta.status !== 'active') return false;
    return true;
}

function mapRegistryEntry(entry) {
    const server = entry.server || {};
    const repoUrl = server.repository && server.repository.url;
    const websiteUrl = server.websiteUrl;
    const repoFullName = parseGithubRepoFromUrl(repoUrl);
    return {
        title: server.title || server.name || 'MCP Server',
        name: server.name || '',
        link: repoUrl || websiteUrl || MCP_REGISTRY.docsUrl,
        repoUrl,
        repoFullName,
        official: isOfficialRegistryEntry(entry),
        desc: server.description || ''
    };
}

async function fetchMcpRegistryPage(search, cursor) {
    const params = new URLSearchParams();
    params.set('limit', MCP_REGISTRY.pageSize);
    params.set('version', 'latest');
    if (search) params.set('search', search);
    if (cursor) params.set('cursor', cursor);
    const url = `${MCP_REGISTRY.baseUrl}${MCP_REGISTRY.listPath}?${params.toString()}`;
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Registry error (${res.status})`);
    }
    const data = await res.json();
    const servers = Array.isArray(data.servers) ? data.servers : [];
    const items = servers.filter(isOfficialRegistryEntry).map(mapRegistryEntry);
    const nextCursor = data.metadata && data.metadata.nextCursor ? data.metadata.nextCursor : null;
    return { items, nextCursor };
}

async function loadMcpRegistry(options = {}) {
    if (MCP_STATE.loading) return;
    const search = options.search || '';
    const append = options.append === true;
    const cursor = append ? MCP_STATE.nextCursor : null;

    MCP_STATE.loading = true;
    MCP_STATE.error = null;
    if (!append) {
        MCP_STATE.query = search;
        MCP_STATE.items = [];
        MCP_STATE.nextCursor = null;
        MCP_STATE.hasMore = false;
    }

    updateMcpContent('official');
    try {
        const result = await fetchMcpRegistryPage(search, cursor);
        MCP_STATE.items = append ? MCP_STATE.items.concat(result.items) : result.items;
        MCP_STATE.nextCursor = result.nextCursor;
        MCP_STATE.hasMore = Boolean(result.nextCursor);
    } catch (e) {
        MCP_STATE.error = e.message || 'Error';
    } finally {
        MCP_STATE.loading = false;
        MCP_STATE.initialized = true;
        updateMcpContent('official');
    }
}

function renderMcpExtra(theme, key) {
    if (!dom.mcpExtra) return;
    dom.mcpExtra.innerHTML = '';
    if (MCP_STATE.loading) {
        dom.mcpExtra.innerHTML = `<div class="text-xs text-yellow-300 font-mono">${I18N[currentLang].mcp_loading}</div>`;
        return;
    }
    if (MCP_STATE.error) {
        dom.mcpExtra.innerHTML = `<div class="text-xs text-red-400 font-mono">${I18N[currentLang].mcp_error}</div>`;
        return;
    }
    if (MCP_STATE.query && MCP_STATE.items.length === 0) {
        dom.mcpExtra.innerHTML = `<div class="text-xs text-gray-500 font-mono">${I18N[currentLang].mcp_no_results}</div>`;
        return;
    }
    if (MCP_STATE.items.length && MCP_STATE.hasMore) {
        dom.mcpExtra.innerHTML = `<button type="button" class="section-more-btn section-more-btn--gold js-load-more-mcp">${I18N[currentLang].mcp_load_more}</button>`;
        return;
    }
    if (!MCP_STATE.items.length && theme && theme.items.length > 6) {
        const expanded = mcpExpanded[key];
        const label = expanded ? I18N[currentLang].show_less : I18N[currentLang].show_all;
        dom.mcpExtra.innerHTML = `<button type="button" class="section-more-btn section-more-btn--gold js-toggle-mcp" data-key="${key}">${label}</button>`;
    }
}

function getActiveMcpKey() {
    const active = document.querySelector('#mcp-buttons .btn-category.active');
    return active ? active.dataset.key : null;
}

function updateMcpContent(key) {
    const theme = MCP_THEMES[key];
    if (!theme) return;

    if (dom.mcpBriefingText) {
        dom.mcpBriefingText.textContent = theme.briefing[currentLang] || theme.briefing.en || '';
    }

    const expanded = mcpExpanded[key];
    const fallbackItems = expanded ? theme.items : theme.items.slice(0, 6);
    const useFallback = !MCP_STATE.items.length && !MCP_STATE.query;
    const items = useFallback ? fallbackItems : MCP_STATE.items;
    dom.mcpContainer.innerHTML = items.map((item) => renderMcpCard(item)).join('');
    renderMcpExtra(theme, key);
    ensureMcpRepoMeta(items);
}

function loadMcpCategory(key) {
    document.querySelectorAll('#mcp-buttons .btn-category').forEach(b => {
        b.classList.toggle('active', b.dataset.key === key);
    });
    updateMcpContent(key);
    if (key === 'official' && !MCP_STATE.initialized) {
        loadMcpRegistry({ search: MCP_STATE.query });
    }
}

function toggleMcpExpanded(key) {
    mcpExpanded[key] = !mcpExpanded[key];
    updateMcpContent(key);
}

function runMcpSearch(query) {
    const q = (query || '').trim();
    if (dom.mcpSearchInput && dom.mcpSearchInput.value.trim() !== q) {
        dom.mcpSearchInput.value = q;
    }
    loadMcpRegistry({ search: q });
}

function loadMoreMcp() {
    if (MCP_STATE.loading || !MCP_STATE.hasMore) return;
    loadMcpRegistry({ search: MCP_STATE.query, append: true });
}

function getDocsItems(key) {
    return DOCS_DATA.filter(item => (item.group || 'core') === key);
}

function updateDocsBriefing(key) {
    const theme = DOCS_THEMES[key];
    const fallback = I18N[currentLang].docs_briefing;
    if (!theme || !theme.briefing) {
        dom.docsBriefingText.textContent = fallback;
        return;
    }
    dom.docsBriefingText.textContent = theme.briefing[currentLang] || theme.briefing.en || fallback;
}

function loadDocsCategory(key) {
    DOCS_STATE.activeKey = key;
    document.querySelectorAll('#docs-buttons .btn-category').forEach(b => {
        b.classList.toggle('active', b.dataset.key === key);
    });
    updateDocsBriefing(key);
    renderDocsGrid(key);
}

function renderDocsGrid(key = DOCS_STATE.activeKey) {
    const items = getDocsItems(key);
    dom.docsContainer.innerHTML = items.map((item, idx) => {
        const delay = idx * 50;
        if (item.type === 'header') {
            const subtitle = item.subtitle
                ? `<p class="docs-section-subtitle">${escapeHtml(item.subtitle)}</p>`
                : '';
            return `
                    <div class="docs-section-header animate-entry" style="animation-delay: ${delay}ms">
                        <div class="docs-section-kicker">
                            <span class="intel-dot"></span>
                            ${escapeHtml(item.kicker || 'SECTION')}
                        </div>
                        <h3>${escapeHtml(item.title)}</h3>
                            ${subtitle}
                    </div>`;
        }
        const docName = escapeHtml(item.name || 'Documentation');
        const fileName = escapeHtml(toRepoFileName(item.name || item.linkText || 'docs'));
        const sourceRef = escapeHtml(String(item.linkText || item.link || '').replace(/^https?:\/\//, ''));
        const modelsText = escapeHtml(trimText(item.models || 'Models info', 98));
        const hostingText = escapeHtml(trimText(item.hosting || 'Hosting info', 88));
        const docUrl = escapeHtml(item.link || '#');
        return `
                    <a href="${docUrl}" target="_blank" rel="noreferrer" class="docs-card-link animate-entry h-full" style="animation-delay: ${delay}ms">
                        <article class="repo-terminal-card repo-terminal-card--violet repo-terminal-card--docs">
                            <header class="repo-terminal-head">
                                <div class="repo-terminal-head-left">
                                    <span class="repo-dot repo-dot--red"></span>
                                    <span class="repo-dot repo-dot--yellow"></span>
                                    <span class="repo-dot repo-dot--green"></span>
                                    <span class="repo-file-name">${fileName}</span>
                                </div>
                                <div class="repo-terminal-head-right">
                                    <span class="repo-doc-pill">DOCS</span>
                                </div>
                            </header>
                            <div class="repo-terminal-body">
                                <div class="repo-line-numbers" aria-hidden="true">
                                    <span>1</span>
                                    <span>2</span>
                                    <span>3</span>
                                    <span>4</span>
                                </div>
                                <div class="repo-line-content">
                                    <p class="repo-line">
                                        <span class="repo-token-keyword">export</span>
                                        <span class="repo-token-name">${docName}</span>
                                    </p>
                                    <p class="repo-line">
                                        <span class="repo-token-owner">@</span>
                                        <span class="repo-token-keyword">from</span>
                                        <span class="repo-token-string">"${sourceRef}"</span>
                                    </p>
                                    <p class="repo-line repo-line-text">${modelsText}</p>
                                    <p class="repo-line repo-line-text">
                                        <span class="repo-token-label">hosting</span>
                                        ${hostingText}
                                    </p>
                                </div>
                            </div>
                            <footer class="repo-terminal-foot">
                                <span class="repo-terminal-date">DOCS</span>
                                <span class="repo-terminal-open" aria-hidden="true">↗</span>
                            </footer>
                        </article>
                    </a>`;
    }).join('');
}

// --- CHAT & GEMINI INTEGRATION ---

function getApiKeyFromUser() {
    return new Promise((resolve) => {
        const modal = document.getElementById('api-key-modal');
        const input = document.getElementById('api-key-input');
        const btnSave = document.getElementById('btn-save-key');
        const btnCancel = document.getElementById('btn-cancel-key');
        const btnDelete = document.getElementById('btn-delete-key');

        if (!modal) {
            const k = prompt("Enter Gemini API Key:");
            if (k) { localStorage.setItem('gemini_api_key', k); resolve(k); }
            else resolve(null);
            return;
        }

        lastFocusedApiTrigger = document.activeElement;
        setModalState(modal, true);
        input.value = '';
        input.focus();

        // Show/Hide Disconnect based on current key
        if (localStorage.getItem('gemini_api_key')) {
            btnDelete.classList.remove('hidden');
        } else {
            btnDelete.classList.add('hidden');
        }

        const cleanup = () => {
            setModalState(modal, false);
            btnSave.removeEventListener('click', onSave);
            btnCancel.removeEventListener('click', onCancel);
            if (btnDelete) btnDelete.removeEventListener('click', onDelete);
            input.onkeydown = null;
            restoreFocus(lastFocusedApiTrigger);
            lastFocusedApiTrigger = null;
        };

        const onSave = () => {
            const val = input.value.trim();
            if (val) {
                localStorage.setItem('gemini_api_key', val);
                cleanup();
                resolve(val); // The pending callGemini call resumes with this key
            }
        };

        const onCancel = () => {
            cleanup();
            resolve(null);
        };

        const onDelete = () => {
            localStorage.removeItem('gemini_api_key');
            cleanup();
            location.reload();
            resolve(null);
        };

        btnSave.addEventListener('click', onSave);
        btnCancel.addEventListener('click', onCancel);
        if (btnDelete) btnDelete.addEventListener('click', onDelete);

        input.onkeydown = (e) => {
            if (e.key === 'Enter') onSave();
            if (e.key === 'Escape') onCancel();
        };
    });
}

async function callGeminiWithModel(model, key, payload, texts) {
    const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        }
    );

    if (!res.ok) {
        // Return a special object to let the caller inspect the status
        return { __error: true, status: res.status };
    }

    const data = await res.json();

    if (!data.candidates || data.candidates.length === 0) {
        console.warn(`Gemini [${model}]: No candidates returned.`, data);
        if (data.promptFeedback) {
            return `[BLOCK] Prompt Blocked: ${data.promptFeedback.blockReason}`;
        }
        return "No response (Empty Candidates).";
    }

    const candidate = data.candidates[0];
    if (candidate.finishReason !== "STOP" && candidate.finishReason !== "MAX_TOKENS") {
        console.warn(`Gemini [${model}]: Finish Reason`, candidate.finishReason);
        if (candidate.finishReason === "SAFETY") {
            return "[SYSTEM] Response blocked by safety filters.";
        }
    }

    return candidate.content?.parts?.[0]?.text || "No response content.";
}

async function callGemini(prompt, systemInstruction = null) {
    const texts = I18N[currentLang];
    let key = localStorage.getItem('gemini_api_key') || apiKey;

    // If no key, ask user — then resume the call with the new key
    if (!key) {
        key = await getApiKeyFromUser();
        if (!key) return null;
    }

    const payload = {
        contents: [{ parts: [{ text: prompt }] }]
    };

    if (systemInstruction) {
        payload.systemInstruction = {
            parts: [{ text: systemInstruction }]
        };
    }

    try {
        // --- Primary model ---
        const primary = await callGeminiWithModel('gemini-2.5-flash', key, payload, texts);

        if (primary && primary.__error) {
            const status = primary.status;

            // Auth errors: clear key and report
            if (status === 400 || status === 401 || status === 403) {
                localStorage.removeItem('gemini_api_key');
                return texts.gemini_invalid_key || "Invalid Key";
            }

            // Rate limit / quota exceeded: fallback to flash-lite silently
            if (status === 429 || status === 503) {
                console.warn(`Gemini: ${status} on gemini-2.5-flash — falling back to gemini-2.5-flash-lite`);
                try {
                    const fallback = await callGeminiWithModel('gemini-2.5-flash-lite', key, payload, texts);
                    if (fallback && fallback.__error) {
                        return (texts.gemini_generic_error || "Error").replace('{status}', fallback.status);
                    }
                    return fallback;
                } catch (fe) {
                    console.error("Gemini fallback error:", fe);
                    return texts.gemini_system_error || "System Error";
                }
            }

            return (texts.gemini_generic_error || "Error").replace('{status}', status);
        }

        return primary;
    } catch (e) {
        console.error(e);
        return texts.gemini_system_error || "System Error";
    }
}

function toggleChat(forceOpen = null) {
    if (!dom.modalChat) return;
    if (forceOpen && typeof forceOpen === 'object' && typeof forceOpen.preventDefault === 'function') {
        forceOpen = null;
    }
    const shouldOpen = forceOpen === null ? dom.modalChat.classList.contains('hidden') : Boolean(forceOpen);

    if (shouldOpen) {
        lastFocusedChatTrigger = document.activeElement;
        setModalState(dom.modalChat, true);
        if (dom.btnOpenChat) dom.btnOpenChat.setAttribute('aria-expanded', 'true');
        const chatInput = document.getElementById('chat-input');
        if (chatInput) chatInput.focus();
    } else {
        setModalState(dom.modalChat, false);
        if (dom.btnOpenChat) dom.btnOpenChat.setAttribute('aria-expanded', 'false');
        restoreFocus(lastFocusedChatTrigger || dom.btnOpenChat);
        lastFocusedChatTrigger = null;
    }
}

function toggleChatExpand() {
    dom.modalChat.classList.toggle('expanded');
    // Reset position if needed or keep centered via CSS
}

function toggleManual(forceOpen = null) {
    const m = dom.modalManual;
    if (!m) return;
    if (forceOpen && typeof forceOpen === 'object' && typeof forceOpen.preventDefault === 'function') {
        forceOpen = null;
    }

    const shouldOpen = forceOpen === null ? m.classList.contains('hidden') : Boolean(forceOpen);

    if (shouldOpen) {
        lastFocusedManualTrigger = document.activeElement;
        // OPEN: Render Content
        const t = I18N[currentLang];
        const html = `
                    <div class="space-y-6 animate-entry">
                        <!-- Header Section -->
                        <div class="p-4 bg-cyan-900/10 border-l-4 border-cyan-500 rounded-r shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                            <h3 class="text-xl font-bold text-cyan-400 mb-2 tracking-wide neon-blue">${t.guide_title}</h3>
                            <p class="text-gray-300 italic font-mono text-sm leading-relaxed border-b border-cyan-900/30 pb-2 mb-2">
                                "${t.guide_intro}"
                            </p>
                        </div>
                        
                        <!-- Value Prop Section -->
                        <div class="p-4 bg-gray-900/50 border border-gray-700 rounded relative group hover:border-pink-500 transition-colors duration-300">
                             <div class="absolute -top-3 left-4 bg-[#0a0a0f] px-2 text-xs font-bold text-pink-500 tracking-widest uppercase">
                                ${t.guide_val_title}
                             </div>
                             <p class="text-gray-300 text-sm leading-relaxed">
                                ${t.guide_val_text}
                             </p>
                        </div>

                        <!-- Capabilities Section -->
                        <div class="p-4 bg-gray-900/50 border border-gray-700 rounded relative group hover:border-yellow-500 transition-colors duration-300">
                             <div class="absolute -top-3 left-4 bg-[#0a0a0f] px-2 text-xs font-bold text-yellow-500 tracking-widest uppercase">
                                ${t.guide_feat_title}
                             </div>
                             <ul class="list-none space-y-3 mt-1">
                                 <li class="flex items-start gap-3 text-sm text-gray-400 border-b border-gray-800 pb-2 last:border-0">
                                     <span class="text-cyan-500 mt-1">&#x279C;</span>
                                     <span>${t.guide_feat_1}</span>
                                 </li>
                                 <li class="flex items-start gap-3 text-sm text-gray-400 border-b border-gray-800 pb-2 last:border-0">
                                     <span class="text-pink-500 mt-1">&#x279C;</span>
                                     <span>${t.guide_feat_2}</span>
                                 </li>
                                 <li class="flex items-start gap-3 text-sm text-gray-400 border-b border-gray-800 pb-2 last:border-0">
                                     <span class="text-yellow-500 mt-1">&#x279C;</span>
                                     <span>${t.guide_feat_3}</span>
                                 </li>
                                 <li class="flex items-start gap-3 text-sm text-gray-400 border-b border-gray-800 pb-2 last:border-0">
                                     <span class="text-blue-400 mt-1">&#x279C;</span>
                                     <span>${t.guide_feat_4}</span>
                                 </li>
                                 <li class="flex items-start gap-3 text-sm text-gray-400 border-b border-gray-800 pb-2 last:border-0">
                                     <span class="text-green-400 mt-1">&#x279C;</span>
                                      <span>${t.guide_feat_5}</span>
                                 </li>
                                 <li class="flex items-start gap-3 text-sm text-gray-400 border-b border-gray-800 pb-2 last:border-0">
                                     <span class="text-purple-400 mt-1">&#x279C;</span>
                                     <span>${t.guide_feat_6}</span>
                                 </li>
                             </ul>
                        </div>

                        <!-- Footer / Close Action -->
                        <button id="btn-manual-return" class="w-full py-4 mt-6 bg-cyan-900/20 border border-cyan-800 hover:bg-cyan-900/40 text-cyan-400 font-bold tracking-widest uppercase transition-all duration-300 group relative overflow-hidden">
                            <span class="relative z-10 group-hover:text-cyan-300 flex items-center justify-center gap-2">
                                [ ${t.guide_close} ]
                            </span>
                        </button>

                        <!-- Footer Info -->
                         <div class="flex items-center justify-between p-3 bg-black/40 rounded border-t border-gray-800 mt-2">
                            <span class="text-[10px] text-gray-600 font-mono tracking-widest uppercase">SYS.VERSION: 2.0.4</span>
                            <div class="text-[10px] text-gray-500 font-mono">
                                ${t.author_note} <span class="text-cyan-600">GIACOMO MARANI</span>
                            </div>
                        </div>
                    </div>
                `;
        document.getElementById('manual-content').innerHTML = html;
        const btnManualReturn = document.getElementById('btn-manual-return');
        if (btnManualReturn) {
            btnManualReturn.addEventListener('click', () => toggleManual(false));
        }
        setModalState(m, true);
        if (dom.btnOpenManual) dom.btnOpenManual.setAttribute('aria-expanded', 'true');
        if (dom.btnCloseManual) dom.btnCloseManual.focus();
    } else {
        // CLOSE
        setModalState(m, false);
        if (dom.btnOpenManual) dom.btnOpenManual.setAttribute('aria-expanded', 'false');
        restoreFocus(lastFocusedManualTrigger || dom.btnOpenManual);
        lastFocusedManualTrigger = null;
    }
}

function addMessage(role, text) {
    const div = document.createElement('div');
    // Clean Markdown (basic) to HTML
    let content = text;
    if (role === 'ai') {
        try {
            content = marked.parse(text);
        } catch (e) { console.warn("Markdown parse error", e); }
    }

    div.className = `chat-message ${role} ${role === 'user' ? 'bg-cyan-900/30 border-cyan-800 text-cyan-100 self-end' : 'bg-gray-800/50 border-gray-700'} p-3 rounded-lg border text-sm max-w-[90%] mb-3 relative group`;

    // Add Copy Button for AI
    let copyBtnHtml = '';
    if (role === 'ai') {
        copyBtnHtml = `<button class="btn-copy-msg" onclick="navigator.clipboard.writeText(this.parentElement.dataset.raw); this.textContent='COPIED!'; setTimeout(()=>this.textContent='COPY', 2000);">COPY</button>`;
        div.dataset.raw = text; // Store raw text for copying
    }

    div.innerHTML = content + copyBtnHtml;

    const container = document.getElementById('chat-messages');
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
}

async function handleChatSend() {
    const input = document.getElementById('chat-input');
    const text = input.value.trim();
    if (!text) return;

    addMessage('user', text);
    input.value = '';

    const loadingMsg = document.createElement('div');
    loadingMsg.className = 'chat-message ai';
    loadingMsg.innerHTML = `<div class="bubble animate-pulse">...</div>`;
    document.getElementById('chat-messages').appendChild(loadingMsg);

    // --- SYSTEM PROMPTS (Multi-Lang) ---
    const SYSTEM_PROMPTS = {
        en: `### ROLE
You are NEXUS, an AI tutor and guide focused on helping people understand artificial intelligence and confidently take their first steps using it.
You act as: A patient teacher, A practical coach, A myth-buster.
LANGUAGE: Respond in ENGLISH.

### MISSION
1. Help people fully understand core AI concepts (plain language).
2. Guide them to use AI tools safely and effectively.
3. Reduce fear/confusion.
4. Provide step-by-step learning paths.

### CONTEXT & KNOWLEDGE
You are embedded in 'ChatNexus', a curated dashboard of AI tools (Explorer/Libs, Titans/Models, MCP, Docs).
Scope: AI basics, ML/DL, LLMs, Computer Vision, Prompts, Safety/Ethics.
If topic is unrelated to AI: Give brief answer, then redirect to AI or politely refuse if unsafe.

### TEACHING PRINCIPLES
- Simple, not simplistic.
- Layered: Start intuitive, then go deeper.
- Concrete: Use examples/analogies.
- Encouraging & Honest about limitations.

### INTERACTION STYLE
- Tone: Friendly, calm, respectful. NOT condescending.
- No Jargon without explanation.
- Structure: Headings, bullets, numbered steps.

### BEHAVIOR
1. Infer user level/goal.
2. Acknowledge and reframe.
3. Give clear explanation (Start with summary, then break down).
4. Offer a tiny next step (Exercise, prompt, action).
5. Check understanding ("Does this make sense?").

### SAFETY
- Remind users AI can make mistakes.
- Used as assistants, not authorities.
- Respect privacy/safety.`,

        it: `### RUOLO
Sei NEXUS, un tutor e guida AI focalizzato sull'aiutare le persone a comprendere l'intelligenza artificiale e a muovere i primi passi con sicurezza nel suo utilizzo.
Agisci come: Un insegnante paziente, un coach pratico, un "myth-buster" (sfatatore di miti).
LINGUA: Rispondi in ITALIANO.

### MISSIONE
1. Aiutare le persone a capire i concetti fondamentali dell'AI (linguaggio semplice).
2. Guidarle nell'uso sicuro ed efficace degli strumenti AI.
3. Ridurre paura e confusione.
4. Fornire percorsi di apprendimento passo-passo.

### CONTESTO E CONOSCENZA
Sei integrato in 'ChatNexus', una dashboard curata di strumenti AI (Explorer, Titans, MCP, Docs).
Ambito: Basi AI, ML/DL, LLM, Computer Vision, Prompting, Sicurezza/Etica.
Se l'argomento non riguarda l'AI: Dai una risposta breve, poi reindirizza sull'AI o rifiuta educatamente se non sicuro.

### PRINCIPI DI INSEGNAMENTO
- Semplice, non semplicistico.
- A strati: Inizia in modo intuitivo, poi approfondisci.
- Concreto: Usa esempi e analogie.
- Incoraggiante e onesto sui limiti.

### STILE DI INTERAZIONE
- Tono: Amichevole, calmo, rispettoso. MAI condiscendente.
- Niente gergo senza spiegazione.
- Struttura: Titoli, elenchi puntati, passaggi numerati.

### COMPORTAMENTO
1. Deduci il livello/obiettivo dell'utente.
2. Riconosci e riformula.
3. Spiega chiaramente (Inizia con un riassunto, poi dividi in parti).
4. Offri un piccolo passo successivo (Esercizio, prompt, azione).
5. Verifica la comprensione ("Ha senso finora?").`
    };

    const systemInstruction = SYSTEM_PROMPTS[currentLang] || SYSTEM_PROMPTS.en;


    const prompt = text;
    const response = await callGemini(prompt, systemInstruction);

    loadingMsg.remove();

    // Check for null (cancellation)
    if (response === null) {
        // Do not show any AI message if user cancelled
        return;
    }
    addMessage('ai', response);
}

window.openChatWithScan = async function (e, repoName) {
    e.preventDefault(); e.stopPropagation();
    toggleChat();
    const scanLabel = currentLang === 'it' ? '[SYSTEM SCAN] Analizza' : '[SYSTEM SCAN] Analyze';
    addMessage('user', `${scanLabel} ${repoName}`);

    const loadingMsg = document.createElement('div');
    loadingMsg.className = 'chat-message ai';
    loadingMsg.innerHTML = `<div class="bubble animate-pulse">Scanning...</div>`;
    document.getElementById('chat-messages').appendChild(loadingMsg);

    const systemInstruction = currentLang === 'it' ? `IDENTITA: Sei NEXUS, un auditor di codice e ricercatore AI esperto.
STILE: Analitico, preciso, denso di informazioni. Ottimizzato per Markdown.
COMPITO: Analizza il repository GitHub indicato. Fornisci un "Tactical Briefing":
1. Funzione core (Cosa fa?)
2. Tech stack (Linguaggi, framework)
3. Use case (Perche usarlo?)
4. Verdict (E pronto per produzione?)
LINGUA: Rispondi in ITALIANO.
Mantieni il testo conciso.` : `IDENTITY: You are NEXUS, an expert code auditor and AI researcher.
STYLE: Analytical, precise, dense with information. Markdown optimized.
TASK: Analyze the given GitHub repository. Provide a 'Tactical Briefing':
1. Core Function (What does it do?)
2. Tech Stack (Languages, Frameworks)
3. Use Cases (Why use this?)
4. Verdict (Is it production ready?)
LANGUAGE: Respond in ENGLISH.
Keep it concise.`;

    const prompt = currentLang === 'it'
        ? `[SYSTEM COMMAND]: Analizza il repository '${repoName}'. Fornisci un riassunto tecnico.`
        : `[SYSTEM COMMAND]: Analyze repository '${repoName}'. Provide technical resume.`;
    const response = await callGemini(prompt, systemInstruction);

    loadingMsg.remove();

    // Check if response is null (meaning user cancelled key input)
    if (response === null) {
        return;
    }

    addMessage('ai', response);
};

function handleSearch() {
    if (!dom.searchInput) return;
    const q = dom.searchInput.value.trim();
    if (!q) return;

    // MCP View -> Registry Search
    if (isVisible(dom.viewMcp)) {
        runMcpSearch(q);
        return;
    }

    // Explorer View -> GitHub API Search
    document.querySelectorAll('#category-buttons .btn-category').forEach(b => b.classList.remove('active'));
    if (dom.resultsTitle) dom.resultsTitle.textContent = "DATABASE SEARCH";
    if (dom.resultsSubtitle) dom.resultsSubtitle.textContent = `// QUERY: "${q}"`;
    if (dom.explorerBriefing) dom.explorerBriefing.classList.add('hidden');
    explorerMode = 'search';
    updateExplorerSortButtons();

    if (dom.spinnerExp) dom.spinnerExp.classList.remove('hidden');
    if (dom.resultsContainer) dom.resultsContainer.innerHTML = "";
    if (dom.resultsExtra) dom.resultsExtra.innerHTML = "";
    const sortKey = explorerSortMode === 'updated' ? 'updated' : 'stars';
    fetch(`https://api.github.com/search/repositories?q=${encodeURIComponent(q)}&sort=${sortKey}&order=desc&per_page=40`)
        .then(r => {
            if (r.status === 403) throw new Error("RATE_LIMIT");
            return r.json();
        })
        .then(d => {
            if (dom.spinnerExp) dom.spinnerExp.classList.add('hidden');
            if (d.items && d.items.length) {
                explorerSearchResults = d.items.slice();
                renderExplorerSearchResults();
            } else {
                explorerSearchResults = [];
                if (dom.resultsContainer) {
                    dom.resultsContainer.innerHTML = `<div class='text-gray-500 font-mono'>${I18N[currentLang].no_result}</div>`;
                }
            }
        })
        .catch(e => {
            if (dom.spinnerExp) dom.spinnerExp.classList.add('hidden');
            console.error(e);
            if (e.message === "RATE_LIMIT") {
                if (dom.apiStatusDot) dom.apiStatusDot.classList.replace('bg-green-400', 'bg-red-500');
                showError(I18N[currentLang].rate_limit);
            }
        });
}

// --- INITIALIZATION ---
function init() {
    // Tab Listeners
    dom.navButtons.forEach(btn => {
        if (!btn.dataset.target) return;
        btn.addEventListener('click', () => switchView(btn.dataset.target));
    });

    // Lang Listeners
    if (dom.langEn) dom.langEn.onclick = () => setLanguage('en');
    if (dom.langIt) dom.langIt.onclick = () => setLanguage('it');

    // Category Buttons
    if (dom.expButtonsContainer) {
        Object.keys(REPO_THEMES).forEach(key => {
            const btn = document.createElement('button');
            btn.className = 'btn-category';
            btn.textContent = REPO_THEMES[key].label.replace(/_/g, ' ');
            btn.dataset.key = key;
            btn.onclick = () => loadExplorerCategory(key);
            dom.expButtonsContainer.appendChild(btn);
        });
    }

    if (dom.titansButtonsContainer) {
        const titanKeys = Object.keys(TITAN_THEMES).sort((a, b) => {
            if (a === 'openai') return -1;
            if (b === 'openai') return 1;
            return 0;
        });
        titanKeys.forEach(key => {
            const btn = document.createElement('button');
            btn.className = 'btn-category';
            btn.textContent = TITAN_THEMES[key].label;
            btn.dataset.key = key;
            btn.onclick = () => loadTitanCategory(key);
            dom.titansButtonsContainer.appendChild(btn);
        });
    }

    if (dom.mcpButtonsContainer) {
        Object.keys(MCP_THEMES).forEach(key => {
            const btn = document.createElement('button');
            btn.className = 'btn-category';
            btn.textContent = MCP_THEMES[key].label.replace(/_/g, ' ');
            btn.dataset.key = key;
            btn.onclick = () => loadMcpCategory(key);
            dom.mcpButtonsContainer.appendChild(btn);
        });
    }

    if (dom.docsButtonsContainer) {
        Object.keys(DOCS_THEMES).forEach(key => {
            const btn = document.createElement('button');
            btn.className = 'btn-category';
            btn.textContent = DOCS_THEMES[key].label.replace(/_/g, ' ');
            btn.dataset.key = key;
            btn.onclick = () => loadDocsCategory(key);
            dom.docsButtonsContainer.appendChild(btn);
        });
    }

    document.addEventListener('click', (e) => {
        const scanBtn = e.target.closest('.js-scan-btn');
        if (!scanBtn) return;
        e.preventDefault();
        const repoName = scanBtn.dataset.repo;
        if (!repoName) return;
        openChatWithScan(e, repoName);
    });

    document.addEventListener('click', (e) => {
        const explorerBtn = e.target.closest('.js-toggle-explorer');
        if (explorerBtn) {
            e.preventDefault();
            const key = explorerBtn.dataset.key;
            if (key) toggleExplorerExpanded(key);
            return;
        }

        const titanBtn = e.target.closest('.js-toggle-titans');
        if (titanBtn) {
            e.preventDefault();
            const key = titanBtn.dataset.key;
            if (key) toggleTitanExpanded(key);
            return;
        }

        const mcpBtn = e.target.closest('.js-toggle-mcp');
        if (mcpBtn) {
            e.preventDefault();
            const key = mcpBtn.dataset.key;
            if (key) toggleMcpExpanded(key);
            return;
        }

        const mcpLoadBtn = e.target.closest('.js-load-more-mcp');
        if (mcpLoadBtn) {
            e.preventDefault();
            loadMoreMcp();
        }
    });

    // Listeners
    if (dom.btnOpenChat) dom.btnOpenChat.addEventListener('click', toggleChat);
    if (dom.btnCloseChat) dom.btnCloseChat.addEventListener('click', toggleChat);
    if (dom.btnExpandChat) dom.btnExpandChat.addEventListener('click', toggleChatExpand);

    if (dom.btnOpenManual) dom.btnOpenManual.addEventListener('click', toggleManual);
    if (dom.btnCloseManual) dom.btnCloseManual.addEventListener('click', toggleManual);

    const btnChatSend = document.getElementById('btn-chat-send');
    const chatInput = document.getElementById('chat-input');
    const btnSetKey = document.getElementById('btn-set-key');
    if (btnChatSend) btnChatSend.addEventListener('click', handleChatSend);
    if (chatInput) {
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleChatSend();
        });
    }
    if (btnSetKey) {
        btnSetKey.addEventListener('click', async (e) => {
            e.preventDefault();
            await getApiKeyFromUser();
        });
    }

    // Config Button Logic
    const btnConfigApi = document.getElementById('btn-config-api');
    if (btnConfigApi) {
        btnConfigApi.addEventListener('click', async (e) => {
            e.preventDefault();
            await getApiKeyFromUser();
        });
    }

    if (dom.repoSortStars) {
        dom.repoSortStars.addEventListener('click', () => setExplorerSortMode('stars'));
    }
    if (dom.repoSortUpdated) {
        dom.repoSortUpdated.addEventListener('click', () => setExplorerSortMode('updated'));
    }
    updateExplorerSortButtons();

    if (dom.executeButton) dom.executeButton.onclick = handleSearch;
    if (dom.searchInput) {
        dom.searchInput.onkeydown = (e) => { if (e.key === 'Enter') handleSearch(); };
    }
    if (dom.mcpSearchButton) {
        dom.mcpSearchButton.addEventListener('click', () => runMcpSearch(dom.mcpSearchInput.value.trim()));
    }
    if (dom.mcpSearchInput) {
        dom.mcpSearchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') runMcpSearch(dom.mcpSearchInput.value.trim());
        });
        dom.mcpSearchInput.addEventListener('input', () => {
            if (!dom.mcpSearchInput.value.trim() && MCP_STATE.query) {
                runMcpSearch('');
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key !== 'Escape') return;
        if (isVisible(dom.apiKeyModal)) {
            const btnCancel = document.getElementById('btn-cancel-key');
            if (btnCancel) btnCancel.click();
            return;
        }
        if (isVisible(dom.modalManual)) {
            toggleManual(false);
            return;
        }
        if (isVisible(dom.modalChat)) {
            toggleChat(false);
        }
    });

    initCodeReview();
    detectLanguage();
    if (dom.mcpContainer || dom.viewMcp) {
        loadMcpRegistry({ search: '' });
    }

    // Auto-populate Code Review from ?repo= query param (e.g. from repo card shortcut)
    if (dom.viewCodeReview && dom.codeReviewUrl) {
        const params = new URLSearchParams(window.location.search);
        const repoParam = params.get('repo');
        if (repoParam) {
            dom.codeReviewUrl.value = `https://github.com/${repoParam}`;
            // small delay so UI is ready
            setTimeout(() => runCodeReview(dom.codeReviewUrl.value), 300);
        }
    }

    // Start
    if (dom.viewExplorer) {
        loadExplorerCategory('core');
    } else if (dom.viewTitans) {
        loadTitanCategory('openai');
    }
}

init();
