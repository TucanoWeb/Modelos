"""
Tabela banco de dados
"""

from sqlalchemy import Column, Integer, String
from models.sqlite import CreateDBModel
from models.base import Base


engine = CreateDBModel.engine()


class Users(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, autoincrement=True)
    email = Column(String(255))
    password = Column(String(255))

    def init_db():
        Base.metadata.create_all(bind=engine)
