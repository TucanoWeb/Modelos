"""
Tabela banco de dados
"""

from sqlalchemy import Column, Integer, String, ForeignKey
from models.entities.pessoasEntity import Pessoas
from models.sqlite import CreateDBModel
from models.base import Base

engine = CreateDBModel.engine()


class Atividade(Base):

    __tablename__ = 'atividades'

    id = Column(Integer, primary_key=True, autoincrement=True)
    describe = Column(String(255))
    status = Column(Integer)
    # Aqui em foreignKey é colocado o nome da tabela
    pessoa_id = Column(Integer, ForeignKey(f'{Pessoas.__tablename__}.id'))

    def init_db():
        Base.metadata.create_all(bind=engine)
