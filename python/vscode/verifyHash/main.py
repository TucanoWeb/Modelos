import hashlib

# Objetos arquivos criados recebem os documentos criados
arquivo1 = 'achev1.txt'
arquivo2 = 'achev2.txt'

# hash1 e 2 utilizam o hashlib para criar as hashs utilizando o ripemd160
hash1 = hashlib.new('ripemd160')
hash2 = hashlib.new('ripemd160')

# Agora é feito o update da hash considerando cada arquivo. O arquivo é aberto, lido com "rb(read em binary mode - verificar na documentação de python hashlib para outras opções)"
hash1.update(open(arquivo1, 'rb').read())
hash2.update(open(arquivo2, 'rb').read())

mensagem = f"Hash do {arquivo1} é {hash1.hexdigest()}\nHash do {arquivo2} é {hash2.hexdigest()}"

# Verifica se o resumo em haxadecimal (hexdigest) dos dados resultantes de hash1 e 2 .update
if hash1.hexdigest() != hash2.hexdigest():
    print("Diferente")
    print(mensagem)
else:
    print("Igual")
    print(mensagem)
