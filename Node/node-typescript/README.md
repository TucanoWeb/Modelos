# Node com Typescript + Teste Unitários	



- Utilização de Node;
- Typescript;
- Jest;
- Supertest.



Rotas e funções separadas em suas respectivas camadas, assim como os testes.



Abaixo, tutorial de inicialização.



# Inicializa o node

npm init --y

# Instala o typescript

npm install -D typescript ts-node-dev

# Inicializa o typescript

npx tsc --init

# Configura o package.json no objeto script

"dev": "ts-node-dev ./src/index.ts",
"build": "rimraf ./build && tsc",
"start": "node ./build/index.js"

# Inseri o objeto no final do arquivo tsconfig.json

"skipLibCheck": true                                 /* Skip type checking all .d.ts files. */
  },
  "include": [
    "src"
  ]

# Tira o comentário da linha abaixo no tsconfig.json

    "outDir": "./build",                                   /* Specify an output folder for all emitted files. */

# Cria o .gitignore e coloca a pasta build e node_modules

build
node_modules

# Utilizar o Supertest para realizar os testes unitários de rotas, simulando requisições

npm i -D jest ts-jest supertest @types/jest @types/supertest



