def sacar(valor: float):
    saldo: float = 500
    
    if saldo >= valor:
        print('Valor sacado')
    else:
        print('Saldo insuficiente')


sacar(100)
sacar(600)
