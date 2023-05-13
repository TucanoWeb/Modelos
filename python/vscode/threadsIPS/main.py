from threading import Thread
from threads import Carros


Carros.carro1(10)
Carros.carro2(10)

# Com paralelismo

t_carro1 = Thread(target=Carros.carroParalelo, args=[10, "Carro1"])
t_carro2 = Thread(target=Carros.carroParalelo, args=[10, "Carro2"])

t_carro1.start()
t_carro2.start()


