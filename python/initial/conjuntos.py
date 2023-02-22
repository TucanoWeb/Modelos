# O conjunto cria uma coleção. Ou seja, elimina
#forma menos comum. Pouco utilizada
numeros: set = {1,2,3,4,2}
print(numeros)


#Forma mais utilizada: passando um iterável
modelo: list = [1,2,3,2,4,5,6,1]
numeros_2: set = set(modelo)
print(numeros_2)

#Para acessar um conjunto, é necessário transformar ele em lista primeiro
numeros_2: list = list(numeros_2)
print(numeros_2[0])


# Método de adição
numeros_3: set = set(modelo)
numeros_3.add(45)
print(numeros_3)

# Remoção. Usando discard não dá erro se o item não existir. No caso do remove, retorna erro caso o elemento não exista
numeros_3.remove(45)
numeros_3.discard(1)
numeros_3.pop() #fifo, diferente da lista. Ou seja, sistema de fila: primeiro que entra, primeiro que sai
print(numeros_3)

# Verificar se há um determinado elemento no conjunto
print(2 in numeros_3)

# Vários métodos 
print(f'Diferença: {numeros_3.difference(numeros)}')
print(f'Interseção (iguais): {numeros_3.intersection(numeros)}')
print(f'Todos os números que estão no numeros_3 estão em numeros?:  {numeros_3.issubset(numeros)}')
print(f'Todos os números que estão em numeros também estão em numero_3?:  {numeros.issubset(numeros_3)}')

