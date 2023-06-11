from flask_restful import Resource
from repositories.pessoas.listaAll import ListAll
from flask_httpauth import HTTPBasicAuth
from repositories.auth.api import Auth


class ListAllPessoas(Resource):

    auth = HTTPBasicAuth()

    @auth.login_required
    def get(self):
        result = ListAll.get()
        return result

    @auth.verify_password
    def auth(login, password):
        return Auth.verify(login, password)