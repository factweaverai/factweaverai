# **FactWeaver – The Active Fact-Checking Engine**

### **1. Executive Summary**
FactWeaver helps investigative teams bridge the **"Narrative Gap"**—the distance between what public figures *say* (Speeches, Votes) and what they *do* (Financial Transactions, Emails). Unlike existing tools (Google Pinpoint, DocumentCloud) which focus on *search*, FactWeaver focuses on **structural verification**. It uses GraphRAG to map relationships across millions of leaked documents and actively "lints" news stories for contradictions before publication.

---
### **2. Competitive Analysis**
The market is currently split between "Flat Search" tools and "Complex Data" tools. FactWeaver sits in the "Automated Intelligence" gap.

| Competitor | Core Function | The FactWeaver Gap | Pricing Model |
| --- | --- | --- | --- |
| **Google Pinpoint** | **Search & Transcription.** Excellent at OCR and finding keywords in PDFs. | **Zero Reasoning.** It finds "John Smith" in 10 docs but cannot tell you that John Smith is secretly funneling money to the Senator mentioned in Doc #4. | Free (Loss leader for Google Cloud). |
| **Aleph (OCCRP)** | **Data Indexing.** The gold standard open-source database for leaks. | **Passive & Technical.** Requires technical setup. It indexes data but doesn't proactively "alert" you to contradictions. | Open Source / Donation based. |
| **Neo4j / Linkurious** | **Graph Visualization.** Powerful visualization of nodes/edges. | **High Barrier to Entry.** Requires a Data Scientist to write Cypher queries. Too complex for the average reporter. | Expensive Enterprise Licensing ($$$$). |
| **Maltego** | **OSINT Mapping.** Visualizes footprints from open web data. | **OSINT Only.** Doesn't handle private/leaked internal documents (PST/PDF dumps) well. | Per Seat ($10k+/yr for Enterprise). |
| **FactWeaver (YOU)** | **Active Reasoning.** "Linting" stories against evidence. | **Automated.** No Cypher queries. Local-First options for source protection. | Hybrid SaaS + Self-Hosted "Bunker". |

---
### **3. Product Suite: The "Truth Engine" Tools**
FactWeaver is not just one app; it is a suite of three integrated workflows.

#### **A. Ingestion: "The LeakLoader" (Universal Adapter)**
* **Capabilities:** Drag-and-drop ingestion of "messy" reality.
* *Format Support:* PST/MBOX (Emails), PDF (Contracts), CSV (Bank Statements), HTML (Web scrapes).
* *The "Entity Extractor":* Automatically identifies People, Organizations, Locations, and Monetary Amounts using Named Entity Recognition (NER).
* *The "Sanctions Matcher":* Automatically cross-references every ingested name against global Sanctions Lists (OFAC, EU, UN).

#### **B. Investigation: "The Holoboard" (Visual Intelligence)**
* **Visualization:** A 3D, WebGL-powered "Detective Board" (nodes pinned to a digital canvas).
* **Timeline Slider:** A "DVR for Corruption." Drag the slider to see relationships form over time.
* **Pathfinding:** User clicks two nodes (e.g., "Senator X" and "Shell Company Y"). FactWeaver illuminates the shortest path of money/influence between them across 5 hops.

#### **C. Governance: "The Fact-Linter" (Active Action)**
* **The Editor Plugin:** A Chrome/Word extension.
* *Action:* As the journalist types *"The Senator has no connection to the project,"* the plugin underlines it in **Red**.
* *Tooltip:* "Contradiction Detected: Senator's brother is listed as Director in 'Project X' incorporation papers (Source: Panama_Leak_04.pdf)."
* **The "Mole" (Leak Monitor):**
* *Trigger:* A new document is added to the shared drive.
* *Action:* FactWeaver scans it in the background. "Alert: This new PDF contains the bank account number associated with 'Target A'."

---
### **4. Technology Strategy: Local-First & Efficient AI**
For journalists, **Source Protection** is paramount. Sending leaked documents to OpenAI/Claude APIs is a non-starter for sensitive stories (e.g., Snowden level).

* **The "Bunker" Architecture (Local-First):**
* **Local Vector Store:** Uses `SQLite-VSS` or `LanceDB` running directly on the user's laptop (or air-gapped server).
* **Local LLM Support:** Option to use **Ollama (Llama 3 / Mistral)** running locally for reasoning. No data leaves the machine.
* **Hybrid RAG:** Only "anonymized" metadata (hashes) is sent to the cloud for broad entity matching, while the "Meat" (actual text) stays local.

* **Efficient Prompts:**
* Instead of dumping whole documents, we extract **"Knowledge Triples"** (Subject -> Predicate -> Object) and feed only relevant sub-graphs to the LLM.
* *Prompt Structure:* "Given the following graph path: [A] --(funded)--> --(owns)--> [C], does this contradict the statement 'A has no financial ties to C'?"

---
### **5. Revenue Models & Pricing Plans**
We use a **"Privacy Premium"** model. Cloud is cheap/free; Privacy/Control is expensive.

#### **Plan A: "The Freelancer" (Cloud)**
* **Target:** Independent journalists, students, OSINT researchers.
* **Pricing:** **Freemium / $29/mo**.
* **Deployment:** Multi-tenant Cloud.
* **Features:**
* 2 GB Document Storage.
* Public Data Sources (Sanctions lists, Politicians).
* Shared Cloud LLM (GPT-4o).
* *Trade-off:* Data is processed on FactWeaver servers.

#### **Plan B: "The Newsroom" (Team)**
* **Target:** Mid-sized publications (Vice, Vox, Local Papers).
* **Pricing:** **$499/mo** (includes 5 seats).
* **Features:**
* Collaborative "Holoboards" (Multi-player mode).
* 1 TB Storage (Secure Cloud).
* **"The Fact-Linter"** Chrome Extension.
* Private Team Knowledge Graph.

#### **Plan C: "The Bunker" (Self-Hosted / Air-Gapped)**
* **Target:** ICIJ, NYT, Bellingcat, NGOs handling whistleblower data.
* **Pricing:** **$25,000/year** (License + Support).
* **Deployment:** Docker Container / Kubernetes Helm Chart. **Zero egress.**
* **Features:**
* **Local-First Engine:** Runs 100% offline on air-gapped hardware.
* **Source Isolation:** Mathematical proof (Zero-Knowledge Proofs) that a journalist accessed a document without revealing *which* document to the admin.
* Unlimited Ingestion.

---
### **6. Pitch Deck: FactWeaver**

#### **Slide 1: Title**
**FactWeaver**
*The Active Fact-Checking Engine for the Disinformation Age.*
**"Don't just find the story. Verify it."**

#### **Slide 2: The Problem**
**"The Narrative Gap"**
We live in a world of massive data leaks and massive disinformation.

* **The Intent:** What public figures *say* (Speeches, Denials).
* **The Reality:** What the data *proves* (Bank logs, Emails, Offshore Registries).
* **The Pain:** Finding the contradiction requires reading 10 million PDFs manually. Existing tools (Search) are passive—they wait for you to ask the right question.

#### **Slide 3: The Solution**
**FactWeaver: The First "Active" Investigative Platform.**
We don't just index your documents. We build a **Knowledge Graph** of your investigation and proactively **"Lint"** reality against the narrative.

#### **Slide 4: The "Magic" (Product Demo)**
* **Ingest:** Drag & Drop the "Panama Papers" (Terabytes of messy PDFs).
* **Reason:** The **GraphRAG Engine** automatically links "Shell Corp A" to "Senator B" via 4 hops.
* **Act:** You write: *"The Senator is clean."* FactWeaver highlights it in **RED**: *"Contradiction: Senator is beneficiary of Trust X."*

#### **Slide 5: The "Local-First" Advantage**
**Military-Grade Privacy for Whistleblowers.**

* Most AI tools require uploading data to the cloud.
* **FactWeaver Bunker:** Runs 100% locally on your laptop.
* Your source's identity never leaves your air-gapped machine.

#### **Slide 6: Market & Business Model**
**A "Privacy Premium" Strategy.**

1. **Cloud (SaaS):** Low-cost entry for mass adoption (Freelancers/Students). Viral growth.
2. **The Bunker (License):** High-margin enterprise contracts for major Newsrooms and NGOs.

* *Competitor Pricing:* Palantir ($$$$), Google (Free but Data-Harvesting). FactWeaver fills the "Private but Accessible" middle.

#### **Slide 7: Roadmap**
* **Q1: The "Search" MVP.** (Ingestion + Graph Search).
* **Q2: The "Linter".** (Chrome Extension for active fact-checking).
* **Q3: The "Bunker".** (Fully offline Local-LLM version).

#### **Slide 8: The Ask**
**$2M Seed Round.**
To build the "Bunker" architecture and capture the Global Investigative Journalism market as our beachhead for the wider "Truth Verification" industry.

---
### **7. Internal Marketplace (Plugin Ecosystem)**
To make FactWeaver sticky, we offer an internal "App Store" for data connectors.

* **Premium Plugins (Paid/Subscription):**
* *The "Dark Web" Scraper:* Connects to Tor onion sites to monitor specific keywords.
* *The "Crypto-Tracker":* Connects wallet addresses in leaks to live blockchain ledgers.

* **Standard Plugins (Free):**
* *OpenSanctions:* Real-time sync with global sanctions lists.
* *SocialGraph:* Ingests Twitter/BlueSky relationships.
* *OCR-Pro:* Tesseract-based text extraction for scanned images.

This structure positions **FactWeaver** not just as a tool, but as the **Operating System for Truth**—starting with journalists, but eventually serving legal teams, historical researchers, and intelligence analysts.

This is a massive use case. In fact, **Investigative Journalism is the "Original Graph Problem."**

When the ICIJ (International Consortium of Investigative Journalists) broke the **Panama Papers**, they didn't do it by reading 11.5 million PDF files manually. They did it by loading them into a Graph Database (Neo4j) to find the hidden links between politicians and shell companies.

However, the current toolset for journalists is **passive** (Search & Visualize).
**FactWeaver can be the first "Active Fact-Checking Engine"**—moving from just *finding* the story to *verifying* the story.

---
### 1. The Rebranding: "Conflict of Interest" Detection
In software, you look for "Architectural Drift" (Code  Docs).
In journalism, you look for **"Narrative Drift"** (Public Statement  Private Action).

**The Pitch to Media Houses:**
> *"FactWeaver doesn't just search your leaked documents. It builds a Knowledge Graph of every entity mentioned and actively alerts you when a politician's voting record contradicts their financial holdings."*

### 2. The Data Sources (The "Leaked" Stack)
Journalists deal with the messiest data in the world. Your ingestion engine is the key selling point here.

* **Structured "Intent" (The Official Story):**
* Voting Records (Parliament/Congress APIs).
* Public Financial Disclosures.
* Company Registries (Beneficial Ownership data).

* **Unstructured "Reality" (The Hidden Truth):**
* **Leaked Data Dumps:** Terabytes of Emails (PST files), PDF Contracts, Offshore Bank Statements.
* **Transcripts:** Youtube/Podcast transcripts (what they *said*).
* **Social Media:** Deleted Tweets or archived posts.

### 3. The "Active Governance" Triggers for Newsrooms
This is where you beat existing tools like Google Pinpoint or standard Neo4j visualization. You add the **"Action Layer."**

#### A. The "Auto-Background Check" (Research Phase)
Instead of a journalist manually searching a name, FactWeaver runs a **GraphRAG Agent**:
* *Input:* Journalist types "John Smith."
* *FactWeaver Reasoning:* "John Smith appears in the 'Panama Papers' leak (Node A) sharing an address with 'Shell Corp X' (Node B), which recently won a government contract (Node C)."
* *Output:* A "Dossier" generated instantly, highlighting the **Conflict of Interest path**.

#### B. The "Fact-Check Linter" (Writing Phase)
This is the "CI/CD for News."
* *Scenario:* A journalist writes a draft: *"Senator Jones, who has no financial ties to the oil industry..."*
* *FactWeaver Action:* The "Linter" highlights this sentence in Red.
* *Alert:* **"Contradiction Detected.** Graph evidence shows Senator Jones' spouse owns stock in Exxon (via Trust Fund B). Certainty: 94%."

#### C. The "Timeline Reconstruction"
* *Query:* "Show me the timeline of 'Project X'."
* *GraphRAG:* Connects emails from 2020, bank transfers from 2021, and a public denial from 2022 into a single chronological narrative.

### 4. The Market Landscape
You are competing against "Search" tools, but you are selling "Analysis."

| Tool | What it does | The FactWeaver Advantage |
| --- | --- | --- |
| **Google Pinpoint** | "Ctrl+F" on steroids. Finds text in PDFs. | Pinpoint finds *documents*. FactWeaver finds *lies* (by connecting the contradiction across docs). |
| **Neo4j / Linkurious** | Visualizes the "Hairball" (Nodes & Edges). | These require a Data Scientist to write Cypher queries. FactWeaver uses LLMs so a journalist can ask in plain English. |
| **DocumentCloud** | Hosts and annotates documents. | Passive hosting. FactWeaver is an *active agent* that reads the docs for you. |

### 5. Ethical & Privacy Angle (The "Source Protection" Feature)
Journalists are paranoid about security (rightfully so).

* **Local-First Graph:** FactWeaver can run the GraphRAG engine locally (using local LLMs like Llama 3) so sensitive leaks never leave the journalist's laptop.
* **Source Isolation:** The graph can mathematically prove "Who knows what" without revealing the identity of the whistleblower to the wider team.

### Summary

For journalists, FactWeaver is an **"Investigative Super-Agent."**
* **Journalists** use it to stop **Fake News**.