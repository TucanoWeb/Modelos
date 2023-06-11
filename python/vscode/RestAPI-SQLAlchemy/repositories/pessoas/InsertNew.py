from models.sqlite import CreateDBModel
from flask import jsonify


class Insert():

    @classmethod
    def post(self, value):
        data = value
        self._name = data['name']
        self._age = data['age']

        stmt = f"INSERT INTO pessoas ( name, age) VALUES ('{self._name}', '{self._age}')"

        try:
            CreateDBModel.connection(stmt)
            return jsonify({
                'error': False,
                'message': 'Success'
            })
        except:
            return jsonify({
                'error': True,
                'message': 'Error'
            })
