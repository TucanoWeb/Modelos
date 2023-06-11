"""_summary_

Centralização dos entities, de forma a não gerar grande listagem de códigos no main

"""

from models.entities.atividadeEntity import Atividade
from models.entities.pessoasEntity import Pessoas
from models.entities.userEntity import Users


class CreateAll():

    @classmethod
    def init(self):
        Pessoas.init_db()
        Atividade.init_db()
        Users.init_db()
