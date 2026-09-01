import os

from langchain_chroma import Chroma
from langchain_classic.chains import (
    create_history_aware_retriever,
    create_retrieval_chain
)
from langchain_classic.chains.combine_documents import create_stuff_documents_chain
from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder

from backend.olla_ma import embeddings, llm
from backend.sys_prompt import system_prompt
from backend.q_prompt import context_sys_prompt

PERSIST_DIR = "backend/chroma_db_cloud"


def create_rag_chatbot():
    """Initializes and returns the RAG chain."""
    if os.path.exists(PERSIST_DIR) and os.listdir(PERSIST_DIR):
        print(f"Loading existing vector database from {PERSIST_DIR}...")
        vectorstore = Chroma(
            persist_directory=PERSIST_DIR,
            embedding_function=embeddings
        )
    else:
        raise RuntimeError(
            f"Vector database not found at {PERSIST_DIR}. "
            "Run the ingestion script to build it first."
        )

    retriever = vectorstore.as_retriever(search_kwargs={"k": 3})

    context_prompt = ChatPromptTemplate.from_messages([
        ("system", context_sys_prompt),
        MessagesPlaceholder("chat_history"),
        ("human", "{input}")
    ])

    history_retriever = create_history_aware_retriever(
        llm, retriever, context_prompt
    )

    prompt_template = ChatPromptTemplate.from_messages([
        ("system", system_prompt),
        MessagesPlaceholder("chat_history"),
        ("human", "{input}")
    ])

    question_ans_chain = create_stuff_documents_chain(llm, prompt_template)
    chain = create_retrieval_chain(history_retriever, question_ans_chain)

    return chain
