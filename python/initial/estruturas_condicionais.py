ALLOW_AGE: int = 18
SPECIAL_AGE: int = 12

user_age = int(input('Insira sua idade: '))

if user_age >= ALLOW_AGE:
    print('Permitido')

elif user_age == SPECIAL_AGE:
    print('Idade especial.')

else:
    print('Não permitido')
    
    
# Condicionais ternários


