import os
from dotenv import load_dotenv
from langchain_ollama import ChatOllama, OllamaEmbeddings

load_dotenv()

API_KEY = os.getenv("OLLAMA_API")
EMBEDDING_MODEL = os.getenv("EMBEDDING_MODEL", "nomic-embed-text")
LLM_MODEL = os.getenv("LLM_MODEL", "llama3.1")
OLLAMA_URL = os.getenv("OLLAMA_URL", "http://localhost:11434")

client_kwargs = {}
if API_KEY:
    client_kwargs["headers"] = {"Authorization": f"Bearer {API_KEY}"}

embeddings = OllamaEmbeddings(
    model=EMBEDDING_MODEL,
    base_url=OLLAMA_URL,
    client_kwargs=client_kwargs
)

llm = ChatOllama(
    model=LLM_MODEL,
    base_url=OLLAMA_URL,
    client_kwargs=client_kwargs,
    temperature=0
)
