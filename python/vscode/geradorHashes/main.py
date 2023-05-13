import hashlib
from Menu import Menu

password = input("Digite sua senha: ")

result = hashlib.md5(password.encode('utf-8'))

print(f"O hash é: {result.hexdigest()}")

print(Menu.initial())
menu = input('Digite a opção desejada: ')

if menu == '1':
    result = hashlib.md5(password.encode('utf-8'))
    print(f"O hash é: {result.hexdigest()}")
elif menu == '2':
    result = hashlib.sha1(password.encode('utf-8'))
    print(f"O hash é: {result.hexdigest()}")
elif menu == '3':
    result = hashlib.sha256(password.encode('utf-8'))
    print(f"O hash é: {result.hexdigest()}")
elif menu == '4':
    result = hashlib.sha512(password.encode('utf-8'))
    print(f"O hash é: {result.hexdigest()}")