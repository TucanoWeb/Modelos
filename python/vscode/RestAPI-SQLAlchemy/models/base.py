"""_summary_

Essa classe foi utilizada para gerar herança múltiplas nas classes que utilizam chaves estrangeiras.

"""

from sqlalchemy.orm import DeclarativeBase
from models.sqlite import CreateDBModel

class Base(DeclarativeBase):
    query = CreateDBModel.query()