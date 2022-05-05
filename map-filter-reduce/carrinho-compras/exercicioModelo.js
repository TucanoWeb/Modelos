
//Cria a constante com objetos, sendo seus atributos nome e preço.
const lista = [
    {
        name: 'Sabão em pó',
        preco: 30
    },
    {
        name: 'cereal',
        preco: 12
    },
    {
        name: 'toalha',
        preco: 30
    },
];

//Cria a constante do saldo inicial
const saldoDisponivel = 100;

//Cria a constante do saldo final e atribui o valor utilizando reduce da array lista. Veja que foi necessário especificar o atributo do objeto na array, pois queremos capturar o preço. Ou seja, se não especificar, ele irá pegar name e preco. Portanto, no método reduce foi utilizado os parâmetros no primeiro parenteses, depois foi definido o retorno da arrow function (=>) para prev - (menos) current.preco(selecionado o atributo preço), tendo como valor inicial saldoDisponivel.
const calculaSaldo = lista.reduce((prev, current) => prev - current.preco, saldoDisponivel);

//Imprime no console o valor da constante calculaSaldo
console.log(calculaSaldo);