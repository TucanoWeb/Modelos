"""
Classe que comporta os métodos relacionados a sessão, criação de banco de dados e commit das alterações. 

"""

from sqlalchemy import create_engine, text
from sqlalchemy.orm import scoped_session, sessionmaker
from models.entities.schemas.pessoaSchema import PessoasSchema
from models.entities.schemas.atividadeSchema import AtividadeSchema
from models.entities.schemas.userSchema import UserSchema


class CreateDBModel():

    # Cria o banco de dados
    @classmethod
    def engine(self):
        engine = create_engine('sqlite:///database.db')
        return engine

    # Inicializa sessão. No momento, não está sendo utilizado.
    @classmethod
    def session(self):
        engine = self.engine()
        db_session = scoped_session(
            sessionmaker(autocommit=False, bind=engine))
        return db_session

    """Método que utiliza a classe tendo como herança o comando transparente das querys do banco de dados. Ex. Ao invés de utilizar SELECT * FROM tabela, é Nome_Class_Tabela.query.findall(). No momento, não está sendo utilizado, pois optei por utilizar os comandos diretamente."""
    @classmethod
    def query(self):
        db_session = self.session()
        query = db_session.query_property()
        return query

    # Responsável por gravar as alterações (realizar o commit)
    @classmethod
    def connection(self, stmt):
        engine = self.engine()
        with engine.connect() as conn:
            result = conn.execute(text(stmt))
            conn.commit()
            return result

    # Responsável por retornar um objeto, para que não seja necessário realizar o mapeamento dos itens. Facilite para enviar o retorno para quem realizar a requisição.
    @classmethod
    def schemaPessoas(self, value):
        pessoa_schema = PessoasSchema(many=True)
        response = pessoa_schema.dump(value)
        return response

    # Responsável por retornar um objeto, para que não seja necessário realizar o mapeamento dos itens. Facilite para enviar o retorno para quem realizar a requisição.
    @classmethod
    def schemaAtividades(self, value):
        atividade_schema = AtividadeSchema(many=True)
        response = atividade_schema.dump(value)
        return response

    # Responsável por retornar um objeto, para que não seja necessário realizar o mapeamento dos itens. Facilite para enviar o retorno para quem realizar a requisição.
    @classmethod
    def schemaUsers(self, value):
        users_schema = UserSchema(many=True)
        response = users_schema.dump(value)
        return response
