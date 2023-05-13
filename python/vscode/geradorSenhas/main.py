import random
import string

# Tamanho da senha(número de caracteres)
tamanho: int = 16

# Em chars, está sendo definido que a senha gerada pode receber string do tipo minúsculas e maiúsculas (string.ascii_letteres) + digítos (string.digits) + caracteres especiais
chars: any = string.ascii_letters + string.digits + "!@#$%&*()-=+"

# Aqui está sendo utilizada um método da classe random que atribui a rnd uma função de randomização baseado em um parâmetro repassado, que no caso, foi repassado em print
rnd = random.SystemRandom()

# Em print, o join está juntando todos os caracteres do laço de repetição sem espaço (""), que está rodando a construção dos caracteres baseado em chars, pois está utilizando a função do método random. O tamanho foi definido em "tamanho".
print("".join(rnd.choice(chars) for i in range(tamanho)))
