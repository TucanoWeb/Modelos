"""
    Utilizando o marshmallow, é possível imprimir o resultado como um json, ao invés de ter que ficar mapeando o retorno da resposta do banco de dados. Abaixo, basta apenas informar os campos que devem aparecer

    """

from flask import Flask
from flask_marshmallow import Marshmallow

app = Flask(__name__)
ma = Marshmallow(app)


class UserSchema(ma.Schema):
    class Meta:
        fields = ("id", "email", "password")