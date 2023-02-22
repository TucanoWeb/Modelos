# Aqui, list cria uma array com os números, sendo o primeiro opcional, monstrando o ponto de início, no caso 0.
# O segundo argumento é o final (stop), obrigatório e o terceiro é o step (passos) que representa a sequência,
# no caso sendo de 5 em 5
print(list(range(0, 51, 5)))

# Aqui ele não cria uma array, apenas imprime os números da range conforme determinado. Veja que o primeiro argumento e o segundo não são obrigatórios, sendo que foi inserido apenas o argumento stop, sendo 10, ou seja, imprime de 0 à 9
for numbers in range(10):
    print(numbers, end= ' ')
    
print('\n\n Quebra de linha \n')

for numbers_with_break in range(21):
    if numbers_with_break == 15:
        break  
    print(numbers_with_break, end=' ')


print('\n\n Quebra de linha \n')

for numbers_with_continue in range(21):
    if numbers_with_continue == 15:
        continue
    print(numbers_with_continue, end=' ')