from contextlib import asynccontextmanager
from typing import Dict, List

from fastapi import FastAPI, HTTPException
from langchain_core.messages import AIMessage, HumanMessage

from backend.chatbot import create_rag_chatbot
from backend.schema import ChatRequest, ChatResponse

# Global variables to hold the chain and session histories
rag_chain = None
chat_histories: Dict[str, List] = {}


@asynccontextmanager
async def lifespan(app: FastAPI):
    """Builds the RAG chain once when the server starts."""
    global rag_chain
    rag_chain = create_rag_chatbot()
    yield


app = FastAPI(title="Mohib Portfolio RAG API", lifespan=lifespan)


@app.get("/health")
async def health_check():
    return {"status": "ok", "chain_ready": rag_chain is not None}


@app.post("/chat", response_model=ChatResponse)
async def chat_endpoint(request: ChatRequest):
    """Handles incoming chat messages asynchronously."""
    if rag_chain is None:
        raise HTTPException(status_code=500, detail="RAG chain not initialized properly.")

    # Retrieve existing history or create a new empty list for this session
    session_history = chat_histories.get(request.session_id, [])

    try:
        # Use ainvoke() so the chain runs async and doesn't block other users
        response = await rag_chain.ainvoke({
            "input": request.message,
            "chat_history": session_history
        })

        answer = response["answer"]

        # Update the session's chat history
        session_history.append(HumanMessage(content=request.message))
        session_history.append(AIMessage(content=answer))

        # Save back to memory (swap with Redis/DB for production)
        chat_histories[request.session_id] = session_history

        return ChatResponse(
            answer=answer,
            session_id=request.session_id
        )

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
