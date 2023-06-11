from flask_restful import Resource
from flask import request, json
from repositories.pessoas.edit import Edit


class EditPessoa(Resource):
    def put(self):
        body = json.loads(request.data)
        result = Edit.put(body)
        return result
