from flask_restful import Resource
from flask import request, json
from repositories.atividades.InsertNew import Insert



class InsertAtividade(Resource):
    def post(self):
        body = json.loads(request.data)
        result = Insert.post(body)
        return result
