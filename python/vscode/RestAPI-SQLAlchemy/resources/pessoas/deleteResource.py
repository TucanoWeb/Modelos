from flask_restful import Resource
from repositories.pessoas.delete import Delete



class DeletePessoa(Resource):
    def delete(self, idUser):
        result = Delete.delete(idUser)
        return result