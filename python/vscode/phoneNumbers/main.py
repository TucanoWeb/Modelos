import phonenumbers
from phonenumbers import geocoder

phone = input("Digite o telefone (+5531992954087): ")

phone_numbers = phonenumbers.parse(phone)

print(geocoder.description_for_number(phone_numbers, 'pt'))