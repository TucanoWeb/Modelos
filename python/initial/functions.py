# Ao retornar mais de um valor, é retorno uma tupla com os valores
def multiple_return(numero: int) -> tuple:
    back: int = numero - 1
    next: int = numero + 1
    return back, next

print(multiple_return(10))

# O retorno de funções em python tem como padrão o None, caso o return não seja explicitado
def teste() -> str:
    print('Olá Mundo')

print(teste())

# Para que o retorno não tenha None, basta atribuir explicitamente o retorno
def teste_2() -> str:
    return 'Olá mundo 2'

print(teste_2())

# Com *args (vira tupla) e **kwargs (dicionário). Ou seja, a função vai separar baseado em como é fornecido os argumentos. Quando é tupla, é separado por vírgulas e o dicionário é chave/valor
def render_meta_data(value: dict) -> str:
    for chaves, values in value:
        print(f'{chaves.title()}: {values}')
    
def exibir_poema(value: str, *args: list, **kwargs: dict)->str:
    message: str = '\n'.join(args)
    
    meta_data = '\n'.join([
        f'{chave.title()}: {valor}' for chave, valor in kwargs.items() 
        # O método title faz com que a string tenha a primeira letra maiúscula
        # Em 'for', chave / valor permite que tanto chave quanto valor sejam separados e possam ser manipulados.
        # O método items converte o dicionário em uma tupla, ou seja, uma lista imutável. Desta forma, o comando for consegue percorrer a tupla, que como já foi dito, é uma lista imutável (array)
    ])
    
    result = f'{value}\n\n{message}\n\n{meta_data}'
    print(result)
    
    
exibir_poema(
    '17/02/2023', #Primeiro valor será para o value
    'Primeira linha do poema',
    'Segunda linha do poema',
    'Terceira linha do poema',
    'Quarta linha do poema',
    'Quinta linha do poema',
    'Sexta linha do poema',
    author = 'TucanoWeb',
    when = '2023'
    )    


# Existem os argumentos especiais que forçam a chamada da função a repassar os argumentos somente com posição ou nomeada, ou até hibrido. Exemplo:

def somente_posicao(posicao, /):
    return posicao

print(somente_posicao('posição 1'))


    
def somente_nomeado(*, nomeado):
    return nomeado

print(somente_nomeado(nomeado = 'nomeado'))

def posicao_nomeado(posicao,/,posicao_ou_nomeado,*,apenas_nomeado):
    return None

# É possível passar funções como parâmetros também
def somar(a: int, b: int)-> int:
    return a + b


def exibir_resultado(a: int, b: int, funcao) -> str:
    resultado: int = somar(a, b)
    return f'Resultado de {a} + {b} = {resultado}'

print(type(somar))

print(exibir_resultado(1,2, somar))

