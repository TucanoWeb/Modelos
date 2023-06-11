from flask_restful import Resource
from flask import request, json
from repositories.atividades.editStatus import EditStatus


class EditStatusAtividade(Resource):
    def put(self):
        body = json.loads(request.data)
        result = EditStatus.put(body)
        return result