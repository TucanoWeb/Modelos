"""
Tabela banco de dados
"""

from sqlalchemy import Column, Integer, String
from models.sqlite import CreateDBModel
from models.base import Base


engine = CreateDBModel.engine()


class Pessoas(Base):
    __tablename__ = 'pessoas'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(40), index=True)
    age = Column(Integer)

    def init_db():
        Base.metadata.create_all(bind=engine)
