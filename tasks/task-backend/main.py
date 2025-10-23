# Install dependencies first:
# pip install fastapi uvicorn sqlalchemy psycopg2-binary

from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import create_engine, Column, Integer, String, DateTime, Boolean
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session
from pydantic import BaseModel
from datetime import datetime
from typing import List

# Database setup
DATABASE_URL = "postgresql://jroseman3:postgres@localhost:5434/taskmanager"

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# Database Model
class TaskDB(Base):
    __tablename__ = "tasks"
    
    id = Column(Integer, primary_key=True, index=True)
    content = Column(String, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)
    completed = Column(Boolean, default=False)

# Create tables
Base.metadata.create_all(bind=engine)

# Pydantic Models
class TaskCreate(BaseModel):
    content: str

class Task(BaseModel):
    id: int
    content: str
    created_at: datetime
    completed: bool  # Added
    
    class Config:
        from_attributes = True

# FastAPI app
app = FastAPI(title="Task Manager API")

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Routes
@app.get("/")
def read_root():
    return {"message": "Task Manager API is running"}

@app.get("/tasks", response_model=list[Task])
def get_tasks(db: Session = Depends(get_db)):
    tasks = db.query(TaskDB).order_by(TaskDB.created_at.desc()).all()
    return tasks

@app.post("/tasks", response_model=Task)
def create_task(task: TaskCreate, db: Session = Depends(get_db)):
    db_task = TaskDB(content=task.content)
    db.add(db_task)
    db.commit()
    db.refresh(db_task)
    return db_task

@app.delete("/tasks/{task_id}")
def delete_task(task_id: int, db: Session = Depends(get_db)):
    task = db.query(TaskDB).filter(TaskDB.id == task_id).first()
    if not task:
        raise HTTPException(status_code=404, detail="Task not found")
    db.delete(task)
    db.commit()
    return {"message": "Task deleted successfully"}

@app.put("/tasks/{task_id}", response_model=Task)
def update_task(task_id: int, task: TaskCreate, db: Session = Depends(get_db)):
    db_task = db.query(TaskDB).filter(TaskDB.id == task_id).first()
    if not db_task:
        raise HTTPException(status_code=404, detail="Task not found")
    db_task.content = task.content
    db.commit()
    db.refresh(db_task)
    return db_task

# New route to toggle completion
@app.patch("/tasks/{task_id}/toggle", response_model=Task)
def toggle_task(task_id: int, db: Session = Depends(get_db)):
    db_task = db.query(TaskDB).filter(TaskDB.id == task_id).first()
    if not db_task:
        raise HTTPException(status_code=404, detail="Task not found")
    db_task.completed = not db_task.completed
    db.commit()
    db.refresh(db_task)
    return db_task