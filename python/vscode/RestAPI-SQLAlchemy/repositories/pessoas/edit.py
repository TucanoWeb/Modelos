from models.sqlite import CreateDBModel
from flask import jsonify


class Edit():

    @classmethod
    def put(self, value):

        stmt: str = f"UPDATE pessoas SET name='{value['name']}', age={value['age']} WHERE id={value['id']}"

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
