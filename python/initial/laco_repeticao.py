MENU = 'MENU: \nSelecione uma opção: \n1 - Somar \n2 - Subtrair \n3 - Multiplicar \n0 - Sair'

print(MENU)

data: int = int(input('\nDigite a opção desejada: '))
result: int = 0


def somar(value1: int, value2: int):
    return value1 + value2


def subtrair(value1: int, value2: int):
    return value1 - value2


def multiplicar(value1: int, value2: int):
    return value1 * value2


while data != 0:
    if data == 1:
        value1: int = int(input('\nDigite o primeiro valor: '))
        value2: int = int(input('\nDigite o segundo valor: '))
        result = somar(value1, value2)
        print(f'>>> O resultado da operação é {result}' if result >
              0 else 'Nenhuma operação realizada')
        print('\n', MENU)
        data: int = int(input('\nDigite a opção desejada: '))

    elif data == 2:
        value1: int = int(input('\nDigite o primeiro valor: '))
        value2: int = int(input('\nDigite o segundo valor: '))
        result = subtrair(value1, value2)
        print(f'>>> O resultado da operação é {result}' if result >
              0 else 'Nenhuma operação realizada')
        print('\n', MENU)
        data: int = int(input('\nDigite a opção desejada: '))

    elif data == 3:
        value1: int = int(input('\nDigite o primeiro valor: '))
        value2: int = int(input('\nDigite o segundo valor: '))
        result = multiplicar(value1, value2)
        print(f'>>> O resultado da operação é {result}' if result >
              0 else 'Nenhuma operação realizada')
        print('\n', MENU)
        data: int = int(input('\nDigite a opção desejada: '))

    else:
        print(
            f'\nO valor digitado foi {data}, que não corresponde à nenhuma opção.')
        print('\n', MENU)
        data: int = int(input('\nDigite a opção desejada: '))

print('Nenhuma operação realizada')
print('Execução finalizada')
