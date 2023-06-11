from flask_restful import Resource
from flask import request, json
from repositories.atividades.edit import Edit


class EditAtividade(Resource):
    def put(self):
        body = json.loads(request.data)
        result = Edit.put(body)
        return result