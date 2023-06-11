from models.sqlite import CreateDBModel
from flask import jsonify


class Insert():

    @classmethod
    def post(self, value):
        data = value
        self._describe = data['describe']
        self._pessoas_id = data['pessoa_id']

        stmt = f"INSERT INTO atividades ( describe, pessoa_id, status) VALUES ('{self._describe}', '{self._pessoas_id}', {0})"

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
