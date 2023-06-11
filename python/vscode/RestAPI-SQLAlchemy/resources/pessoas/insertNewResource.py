from flask_restful import Resource
from flask import request, json
from repositories.pessoas.InsertNew import Insert



class InsertPessoa(Resource):
    def post(self):
        body = json.loads(request.data)
        result = Insert.post(body)
        return result
