import socket

class connectSocket():
    def __init__(self) -> None:
        pass
    
    @classmethod
    def connectUDP (self):
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        return s