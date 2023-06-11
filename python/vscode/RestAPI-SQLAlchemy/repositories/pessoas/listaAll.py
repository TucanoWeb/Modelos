from models.sqlite import CreateDBModel
from flask import jsonify


class ListAll():

    @classmethod
    def get(self):

        stmt = "SELECT * FROM pessoas"

        try:
            all_pessoas = CreateDBModel.connection(stmt)
            response = CreateDBModel.schemaPessoas(all_pessoas)
            return jsonify({'pessoas': response})
        except:
            return 'Error'
