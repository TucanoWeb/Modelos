VALUE: int = 50

data: int = int(input('Digite um inteiro até 50 para subtração: '))

controller: str = 'Número inválido' if data > VALUE else 'Número registrado com sucesso.'

def operation(value1: int, value2: int):
    return value1 - value2
    
if data > 50:
    print(controller)
else:
    print('O resultado é: ',operation(VALUE, data))