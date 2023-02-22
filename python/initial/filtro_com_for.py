lista: list = [1,2,3,4,5,6,10,20,55,40,60,91]

#Primeiro exemplo
pares: list = []

for numeros in lista:
    if numeros %2 == 0:
        pares.append(numeros)

print(f'Primeiro exemplo: {pares}')

#Segundo exemplo
pares_dois: list = [numeros for numeros in lista if numeros %2 == 0]
print(f'Segundo exemplo: {pares_dois}')