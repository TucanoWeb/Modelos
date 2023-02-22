class Pessoa:
    def __init__(self, nome: str, idade: int) -> None:
        self.nome = nome
        self.idade = idade
        
    def __del__(self):   # Não é necessário no Python, mas é uma implementação interessante para mostrar uma mensagem no momento em que a instância criada estiver sendo destruída
        print('Removendo a classe...')
        
    def __str__(self):
        return f"{self.__class__.__name__}: {', '.join([f'{chave}: {valor}' for chave, valor in self.__dict__.items()])}"
        
        
pessoa1: Pessoa = Pessoa('Teste', 1)

print(pessoa1)

del pessoa1  # O del pode ser adicionado para destruir o item (desalocar da memória) manualmente, quando se tem certeza que o objeto não será mais utilizado. 

def instanciando_local():
    pessoa2: Pessoa = Pessoa('Teste2', 2)
    return print(pessoa2)

instanciando_local()

        