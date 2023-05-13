import itertools

# Aqui, é utilizado o método permutations de itertools, utilizando as letras 'abcdef', sendo que serão gerados apenas combinações com 3 caracteres
result = itertools.permutations('abcdef', 3)

for i in result:
    print(i)  # sem join
    print(''.join(i))  # com join
