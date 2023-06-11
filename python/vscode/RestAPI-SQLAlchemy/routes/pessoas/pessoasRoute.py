from resources.pessoas.findAllResource import ListAllPessoas
from resources.pessoas.findOneResource import FindOnePessoa
from resources.pessoas.insertNewResource import InsertPessoa
from resources.pessoas.editResource import EditPessoa
from resources.pessoas.deleteResource import DeletePessoa


class RoutesPessoas():

    def init(api):
        api.add_resource(ListAllPessoas, '/pessoas/all')
        api.add_resource(FindOnePessoa, '/search/pessoa/<int:idUser>')
        api.add_resource(InsertPessoa, '/insert/pessoa')
        api.add_resource(EditPessoa, '/edit/pessoa')
        api.add_resource(DeletePessoa, '/delete/pessoa/<int:idUser>')
