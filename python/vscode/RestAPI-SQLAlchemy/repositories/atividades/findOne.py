from models.sqlite import CreateDBModel
from flask import jsonify


class FindOne():

    @classmethod
    def get(self, pessoa_id):

        stmt: str = f"SELECT * FROM atividades WHERE pessoa_id='{pessoa_id}'"

        try:
            atividade = CreateDBModel.connection(stmt)
            response_atividades = CreateDBModel.schemaAtividades(atividade)
            return jsonify({'atividade': response_atividades})
        except:
            return "Error"
