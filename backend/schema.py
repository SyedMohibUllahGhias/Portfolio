from pydantic import BaseModel

# Pydantic Models for Request/Response
class ChatRequest(BaseModel):
    session_id: str
    message: str

class ChatResponse(BaseModel):
    answer: str
    session_id: str