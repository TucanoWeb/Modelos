from models.sqlite import CreateDBModel
from flask import jsonify


class FindOne():

    @classmethod
    def get(self, idUser):

        stmt_1: str = f"SELECT * FROM pessoas WHERE id='{idUser}'"
        stmt_2: str = f"SELECT * FROM atividades WHERE pessoa_id='{idUser}'"

        try:
            pessoa = CreateDBModel.connection(stmt_1)
            atividade = CreateDBModel.connection(stmt_2)
            response_pessoas = CreateDBModel.schemaPessoas(pessoa)
            response_atividades = CreateDBModel.schemaAtividades(atividade)
            return jsonify({'data': {'profile': response_pessoas, 'atividade': response_atividades}})
        except:
            return "Error"
