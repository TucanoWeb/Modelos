import datetime
import pymongo


client = pymongo.MongoClient(
    "mongodb+srv://admin:4qtaFtiDDn6FWYtu@cluster0.zvrvqx5.mongodb.net/?retryWrites=true&w=majority")
db = client.test

collection = db.test_collection

print("Testando a conexão: ", collection)

# Pode ser definida a estrutura do documento que quiser. noSQL é bem flexível e não vai dar erro.
data = {
    "author": "TucanoWeb2",
    "text": "The best of world",
    "title": "Infraestrutura e Programação",
    "tags": ["Programação", "Infraestrutura"],
    "date": datetime.datetime.utcnow()
}

datas = [{
    "author": "TucanoWeb3",
    "text": "The best of world",
    "title": "Infraestrutura e Programação",
    "tags": ["Programação", "Infraestrutura"],
    "date": datetime.datetime.utcnow()
},
    {
    "author": "TucanoWeb4",
    "text": "The best of world",
    "title": "Infraestrutura e Programação",
    "tags": ["Programação", "Infraestrutura"],
    "date": datetime.datetime.utcnow()
}]

# Bloco de inserção
# post_id = db.posts.insert_one(data).inserted_id

# Para inserir vários ao mesmo tempo
# post_id = db.posts.insert_many(datas)

i = 0
# Listar objetos
for post in db.posts.find():
    i += 1
    print(f"\n{i} - Lista Completa: ", post)

# Buscar um objeto especifico
print("\nBusca individual: ", db.posts.find_one({
    "author": "TucanoWeb2"
}))

# Printar a quantidade de documentos relacionados a determinados parâmetros
print("\nQuantidade de documentos Gerais: ", db.posts.count_documents({}))
print("\nQuantidade de documentos com text The best of world 2: ",
      db.posts.count_documents({"text": "The best of world 2"}))
print("\nQuantidade de documentos com author Tucanoweb: ",
      db.posts.count_documents({"author": "TucanoWeb"}))


print("\nListar documentos por data: ")
i = 0
for posts in db.posts.find().sort('date'):
    i += 1
    print(f"\n{i} - ", posts)

# A indexação cria uma nova coleção que possibilita o controle através de algum atributo. No caso abaixo, foi criado uma coleção chamada profiles tendo como indexador o default do mongo, que é o id e, adicionalmente, o atributo author.

result = db.profiles.create_index([('author', pymongo.ASCENDING)], unique=True)
print(sorted(list(db.profiles.index_information())))

# Agora, vamos inserir novos documentos na nova coleção

user_profiles = [
    {
        'author': 'Autor 1',
        'title': 'Título do livro do autor 1',
        'date': datetime.datetime.utcnow()
    },
    {
        'author': 'Autor 2',
        'title': 'Título do livro do autor 2',
        'date': datetime.datetime.utcnow()
    }
]

# result = db.profiles.insert_many(user_profiles)

for profiles in db.profiles.find():
    print('\nImprimindo documentos na coleção Profiles: ', profiles)

# Para puxar o nome das coleções
collections = db.list_collection_names()


# Para deletar todas as coleções, é possível utilizar por exemplo um for e pegar o valor atribuido a variável collections, mais acima, que tem como valor uma lista com o nome das coleções
for i in range(len(collections)):
    print(f"\n\n{i} - {collections[i]}")
    # Para apagar, basta utilizar o método drop
    collectionName = collections[i]
    # db.collectionName.drop()


# Para testar, vamos criar uma nova coleção, inserir 1 documento, listar as coleções, listar o documento na coleção criada e depois excluir a coleção

# Criando nova coleção que será apagada
# result = db.novacolecao.create_index([{'user_id', pymongo.ASCENDING}], unique=True)

# data que será inserida
user_novacolecao = [
    {
        'user_id': 1,
        'author': 'Autor 1',
        'title': 'Título do livro do autor 1',
        'date': datetime.datetime.utcnow()
    },
    {
        'user_id': 2,
        'author': 'Autor 2',
        'title': 'Título do livro do autor 2',
        'date': datetime.datetime.utcnow()
    }
]

# inserindo data
# result = db.novacolecao.insert_many(user_novacolecao)

# Listando documentos em novacolecao
for lista in db.novacolecao.find():
    print('\nImprimindo documentos na coleção novacolecao: ', lista)

# Para puxar o nome das coleções
collections = db.list_collection_names()


# Listando coleções
for i in range(len(collections)):
    print(f"\n\n{i} - {collections[i]}")


# Deletando um arquivo específico em novacolecao
result = db.novacolecao.delete_one({"user_id": 1})

# Listando documentos em novacolecao após exclusão acima
for lista in db.novacolecao.find():
    print('\nImprimindo documentos na coleção novacolecao: ', lista)


# Para dropar a coleção (incluindo os indexs e todos os documentos contidos na coleção)
db.novacolecao.drop()


# Listando coleções após dropar a coleção novacolecao
for i in range(len(collections)):
    print(f"\n\n{i} - {collections[i]}")


# Para dropar o banco de dados, para o qual foi dado o nome no momento da criação de test
# client.drop_database('test')
