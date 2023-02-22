# Modo convencional

pessoa_1: dict = {
    'nome': 'Teste1',
    'email': 'email1@mail.com',
}
print(pessoa_1['nome'])


# Outro modo de criação
pessoa_2: dict = dict(nome='teste2', email='email2@mail.com')
print(pessoa_2)

# Adicionar uma chave
pessoa_2['telefone'] = '123456-1234'
print(pessoa_2)

# Aninhar dicionário
lista_pessoas: list = [
    pessoa_1,
    pessoa_2,
    {
        'nome': 'Teste3',
        'email': 'teste3@mail.com'
    }
]

print(lista_pessoas[2])

print('Mapeamento')

for listas in enumerate(lista_pessoas):
    print(listas, end='\n')


# Criar conjunto de chaves
nova_pessoa: dict = dict.fromkeys(['Nome', 'Email'])
print(nova_pessoa)

# Criando via fromkeys e atribuindo "Vazio" as chaves, ao invés de none
nova_pessoa_2: dict = dict.fromkeys(['Nome', 'Email'], 'Vazio')
print(nova_pessoa_2)

# Método Get. O método get faz com que uma chave que foi solicitada, caso não exista, não retorne erro. Exemplo:
# print(pessoa_2['Endereço'])  nesse exemplo, retornaria um key error, pois não existe a chave Endereço. Para que esse erro não ocorra, é possível utilizar o método get.

print(pessoa_2.get('Endereço', 'Não existe uma chave com esse nome'))
print(pessoa_2.get('nome'))


# O método items retorna uma tupla com os valores das chaves
items: tuple = pessoa_2.items()
print(items)

# O método key retorna apenas a chave
print(pessoa_2.keys())

# Método para inserir um valor sem sobreescrever
pessoa_2.setdefault('nome', 'teste3')
print(pessoa_2)

pessoa_2.setdefault('Endereço', 'rua tal')
print(pessoa_2)


# Método update. O método update permite que seja adicionado um valor ou outro dicionário, sem sobreescrever todo o valor
pessoa_2.update({'Dependentes': {'nome': 'a', 'idade': 11}})
print(pessoa_2)


# Verificar se uma chave ou valor existe dentro do dicionário

resultado_1: bool = 'nome' in pessoa_2
print(resultado_1)

resultado_2: bool = 'telefone' in pessoa_2['Dependentes']
print(resultado_2)


# Método del. Com o del, é possível também deletar todo o dicionário. Exemplo: del pessoa_2

del pessoa_2['telefone']
print(pessoa_2)

del pessoa_2['Dependentes']['idade']
print(pessoa_2)
