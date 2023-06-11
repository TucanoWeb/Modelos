from flask_restful import Resource
from repositories.atividades.findOne import FindOne


class FindOneAtividades(Resource):
    def get(self, pessoa_id):
        result = FindOne.get(pessoa_id)
        return result
