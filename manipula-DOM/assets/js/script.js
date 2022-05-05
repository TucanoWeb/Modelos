//Extrai o valor e atribui para a constante botaoCor
const botaoCor = document.getElementById('botaoMode');


function alterarModo() {

    //Extrai o valor de document.body.style.backgroundColor e verifica se a condição e igualdade é verdadeira. É possível verificar o valor de saída também  inserindo um console.log(document.body.style.backgroundColor) e inspecionando via browser
    if (document.body.style.backgroundColor == 'black') {

        document.body.style.backgroundColor = 'white';
        document.getElementById('tituloH1').style.color = 'black';
        document.getElementById('tituloH1').textContent = 'Light Mode ON';
        document.getElementById('botaoMode').textContent = 'Ligar Dark Mode';
        document.getElementById('botaoMode').className = 'btn btn-warning';

        return; //return encerra a cadeia de eventos dentro do condição. É possível também colocar um else.

    }

    document.body.style.backgroundColor = 'black';
    document.getElementById('tituloH1').style.color = 'white';
    document.getElementById('tituloH1').textContent = 'Dark Mode ON';
    document.getElementById('botaoMode').textContent = 'Ligar Light Mode';
    document.getElementById('botaoMode').className = 'btn btn-success';
}

//trigger para acionamento da cadeia de eventos quando o usuário clicar  (click) no botão, chamando a função alterarModo
botaoCor.addEventListener('click', alterarModo);