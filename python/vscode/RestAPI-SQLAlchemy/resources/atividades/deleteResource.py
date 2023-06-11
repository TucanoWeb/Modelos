from flask_restful import Resource
from repositories.atividades.delete import Delete



class DeleteAtividade(Resource):
    def delete(self, idAtividade):
        result = Delete.delete(idAtividade)
        return result