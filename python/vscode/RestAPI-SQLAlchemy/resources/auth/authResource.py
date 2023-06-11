from flask_restful import Resource
from repositories.auth.api import Auth
from flask_httpauth import HTTPBasicAuth


class AuthLoginAdmin(Resource):

    auth = HTTPBasicAuth()

    # O envio dos dados é via cabeçalho da requisição, como se fosse Bearer, mas utilizando o Auth Basic. Tem essa opção no postman. O decorator auth.login_required informa que essa rota é protegida e necessita de autenticação.
    @auth.login_required
    def get(self):
        return {
            "error": False,
            "message": "Success"
        }

    # O decorator auth.verify_password é chamado e a função que encapsula (no caso o def auth) é executada de forma automática quando a rota com o decorator auth.lgoin_required é chamado.
    @auth.verify_password
    def auth(login, password):
        return Auth.verify(login, password)
