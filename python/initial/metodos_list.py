lista: list = ['a', 'b', 'c', 'd']

#Copiar lista
lista_2: list = lista
print(lista_2)


#Adicionar em alguma posição
lista_2[0] = 'y'
print(lista_2)

#remover com pop
lista_2.pop()
print(lista_2)

#remover passando o index
lista_2.pop(0)
print(lista_2)

#adicionar ao final
lista_2.append('z')
print(lista_2)

# Ordernar por ordem alfabética
lista_2.sort()
print(lista_2)

# Retirar um determinado item item
lista.remove('z')
print(lista_2)

#via sorted
print(sorted(lista_2))