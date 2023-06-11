from flask_restful import Resource
from repositories.pessoas.findOne import FindOne


class FindOnePessoa(Resource):
    def get(self, idUser):
        result = FindOne.get(idUser)
        return result
