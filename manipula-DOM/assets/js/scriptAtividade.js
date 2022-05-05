//Define a constante botaoTrigger, que recebe o valor de document.getElementByID, com id 'botaoMode'. Mas abaixo declaramos botaoTrigger como escuta de evento click, chamando a função iniciaMudanca
const botaoTrigger = document.getElementById('botaoMode');

//Define a contante corpoCor, recebendo o valor de documento.getElementsByTagName, com tag 'body'. É necessário declarar a index da array, pois o valor de documento.getElementsByTagName é uma array com objeto HTMLCollection. É possível ver os valores apenas inserindo o método documento.getElementsByTagName('body') no console, inspecionando via browser
const corpoCor = document.getElementsByTagName('body')[0];

const textCor = document.getElementById('tituloH1');

//Adiciona um escuta para que ao clicar no botão com id botaoMode, a função iniciaMudanca seja chamada
botaoTrigger.addEventListener('click', iniciaMudanca);

//Uma função que chama outras duas funções. Foi realizado dessa forma para que cada função seja responsável por determinadas ações. O código fica mais organizado.
function iniciaMudanca() {
    trocaCores();
    trocaTexto();

}

//Função de troca de cores.
function trocaCores() {

    //corpoCor é uma constante que foi declarado no início do script. classList.toggle funciona como uma espécie de interruptor. Ao ser chamado, verifica se o elemento possui, em seu atributo classe, o valor dark-mode. Se não tiver, é inserido. Se tiver, é retirado.
    corpoCor.classList.toggle('dark-mode');
    textCor.classList.toggle('dark-mode');

    //A condição verifica se no elemento textCor há uma classe com nome dark-mode.
    if (textCor.classList.contains('dark-mode')) {

        //classList substitui o nome da classe btn-warning por btn-success do elemento botaoTrigger
        botaoTrigger.classList.replace('btn-warning', 'btn-success');

    } else {

        botaoTrigger.classList.replace('btn-success', 'btn-warning');
    }
}


function trocaTexto() {

    if (textCor.classList.contains('dark-mode')) {

        //Altera o texto do elemento botaoTrigger.
        botaoTrigger.innerHTML = 'Alterar para Light Mode';
        textCor.innerHTML = 'Dark Mode ON';

        return;

    }

    botaoTrigger.innerHTML = 'Alterar para Dark Mode';
    textCor.innerHTML = 'Light Mode ON';

}