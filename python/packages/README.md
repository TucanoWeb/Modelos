# Tutorial 

Tutorial inicial para criação de pacotes e upload no pip.

## Installation

Crie o ambiente virtual

```python
python -m venv env1
```

Após a criação do ambiente virtual, desenvolva seu pacote. Segue arquitetura modelo:

├── name_package
│   ├── Module1_name
│   │   ├── __init__.py
|   |   ├── file1_name.py
|   ├── Module2_name
│   │   ├── __init__.py
|   |   ├── file2_name.py
│   ├── __init__.py
├── README.md
├── requeriments.txt
├── setup.py


**Setup.py:** Estrutura modelo do arquivo setup.py

```python
from setuptools import setup, find_packages

with open("README.md", "r") as f:
    page_description = f.read()
    
with open("requirements.txt") as f:
    requirements = f.read().splitlines()

setup(
    name="calc_processing",
    version="0.0.1",
    author="TucanoWeb",
    author_email="suporte@tucanoweb.com.br",
    description="Mult Table and array sum",
    long_description=page_description,
    long_description_content_type="text/markdown",
    url="https://github.com/TucanoWeb/projetos/tree/master/python/calc-package",
    packages=find_packages(),
    install_requires=requirements,
    python_requires='>=3.8',
)
```

**Requeriments.txt:** Em requeriments, é necessário colocar os pacotes de terceiros que são utilizados. Evitar colocar versão

**Recomendação:** Após criar o pacote, enviar primeiro para o git, de forma que possa atualizar o link da url nos parâmetros do setup.py

Para compilar o pacote, é necessário instalar:

Wheel:
```python
python -m pip install wheel
```

SetupTools:
```python
python -m pip install setuptools
```

Twine:
```python
python -m pip install twine
```

Após isso, execute o comando abaixo para compilar o pacote:


```python
python setup.py sdist bdist_wheel 
```




