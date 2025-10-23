# imports 
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import delclarative_base
from sqlalchemy.orm import sessionmaker

DATABASE_URL = "postgresql://postgres:postgres@localhost:5434/taskmanager"

engine = create_engine( DATABASE_URL, connect_args={"check_same_thread": False})