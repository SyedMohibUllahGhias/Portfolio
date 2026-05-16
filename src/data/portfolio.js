export const data = {
  name: 'Syed Mohib Ullah Ghias',
  title: 'AI / ML Engineer',
  tagline: 'Agentic Systems · Multi-Agent Frameworks · LLM Pipelines',
  summary:
    'AI/ML-focused Computer Science student specializing in agentic systems, multi-agent frameworks, and LLM-powered pipelines. Proficient in OpenAI Agents SDK, LangChain, and local LLM orchestration via Ollama. Experienced in building AI workers with structured output.',
  about: [
    'I am a Computer Science student at the University of the Punjab, Lahore, on track to graduate in 2027. My focus is squarely on the frontier of AI engineering — designing systems where large language models don\'t just respond, but reason, plan, and execute multi-step tasks autonomously.',
    'My work spans the full LLM stack: from embedding and retrieval pipelines with FAISS and LangChain, to orchestrating complex agentic workflows with LangGraph and OpenAI Agents SDK, to running everything locally via Ollama for zero-cost, privacy-preserving inference.',
    'I am equally comfortable with data engineering — building high-throughput pipelines from PostgreSQL to Pandas via ADBC — as I am with API design using FastAPI and async Python. I value clean architecture, reproducible environments, and tools that just work.',
  ],
  stats: [
    { num: '5+', label: 'Production-ready AI projects shipped' },
    { num: '3', label: 'Industry certifications earned' },
    { num: '4+', label: 'LLM frameworks mastered' },
    { num: '2027', label: 'Expected graduation (B.Sc. CS)' },
  ],
  skills: [
    {
      title: 'AI / ML Frameworks',
      tags: ['OpenAI Agents SDK','LangChain','LangGraph','LlamaIndex','Transformers','RAG','Multi-Agent Systems','HITL Workflows'],
    },
    {
      title: 'LLM APIs & Inference',
      tags: ['OpenAI API','Anthropic Claude','Ollama (Local)','Open Router','Function Calling','Tool Use','Embeddings','Structured Outputs'],
    },
    {
      title: 'Data & Databases',
      tags: ['Python','Pandas','NumPy','PostgreSQL','MongoDB','MySQL','SQLAlchemy','ADBC','PyArrow','Matplotlib','Seaborn'],
    },
    {
      title: 'Tools & DevOps',
      tags: ['FastAPI','Streamlit','Docker','Git / GitHub','VS Code','uv','Asyncio','Pydantic','.env secret mgmt','Jupyter Notebook'],
    },
  ],
  projects: [
    {
      num: '01',
      category: 'RAG System',
      title: 'RAG Chatbot',
      desc: 'A fully offline Retrieval-Augmented Generation system that ingests text documents, builds a local FAISS vector store, and answers natural-language queries through a locally-hosted LLM via Ollama — with zero external API calls. Includes a FastAPI backend and an interactive Streamlit front-end.',
      stack: ['Python','FastAPI','LangChain','FAISS','Ollama','Streamlit'],
      link: 'https://github.com/SyedMohibUllahGhias',
    },
    {
      num: '02',
      category: 'Agentic AI',
      title: 'Research Agent Pro',
      desc: 'An advanced AI research assistant built on LangGraph for stateful, cyclical agentic workflows. Integrates Human-in-the-Loop (HITL) checkpoints for supervised decision-making, and uses SQLite for persistent session storage — enabling long-running research tasks with human oversight at critical decision nodes.',
      stack: ['Python','LangGraph','Ollama','SQLite','HITL'],
      link: 'https://github.com/SyedMohibUllahGhias',
    },
    {
      num: '03',
      category: 'Multi-Agent',
      title: 'OpenAI Agents SDK Implementation',
      desc: 'A production-grade multi-agent system using OpenAI Agents SDK, wired to local Llama 3.1 models through Ollama for completely free inference. Demonstrates Agent-as-Tool composition, structured Pydantic output validation, multi-turn state management, and fully async orchestration.',
      stack: ['Python','OpenAI Agents SDK','Ollama','Pydantic','Asyncio','uv'],
      link: 'https://github.com/SyedMohibUllahGhias',
    },
    {
      num: '04',
      category: 'Data Engineering',
      title: 'Database to DataFrame',
      desc: 'A high-performance data extraction tool engineered for large-scale PostgreSQL-to-Pandas pipelines. Leverages ADBC for columnar, zero-copy data transfer — bypassing traditional row-by-row fetching — paired with SQLAlchemy for robust connection management and query composition.',
      stack: ['Python','PostgreSQL','Pandas','ADBC','SQLAlchemy'],
      link: 'https://github.com/SyedMohibUllahGhias',
    },
    {
      num: '05',
      category: 'Automation',
      title: 'Jupyter Notebook to PDF AI Agent',
      desc: 'An automated AI-driven agent that handles the complete conversion of Jupyter Notebook (.ipynb) files into polished, publication-ready PDF documents. Streamlines a friction-heavy workflow common in data science and academic reporting using OpenAI\'s API.',
      stack: ['Python','Jupyter','OpenAI API','PDF Generation'],
      link: 'https://github.com/SyedMohibUllahGhias',
    },
  ],
  education: {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of the Punjab',
    location: 'Lahore, Pakistan',
    period: 'Sep 2023 — Sep 2027',
    courses: ['Machine Learning','Natural Language Processing','Deep Learning','Data Structures & Algorithms','Database Systems','Linear Algebra','Probability & Statistics'],
  },
  certifications: [
    { name: 'Google AI Essentials', issuer: 'Google' },
    { name: 'Crash Course on Python', issuer: 'Google / Coursera' },
    { name: 'AI Specialization (ML & DL)', issuer: 'NAVTTC / Corvit Systems' },
  ],
  contact: {
    email: 'mohibghias123@gmail.com',
    phone: '+92 319 679 6967',
    linkedin: 'https://linkedin.com/in/syed-mohib-ullah-ghias',
    github: 'https://github.com/SyedMohibUllahGhias',
    address: 'Lahore, Punjab, Pakistan',
  },
};
