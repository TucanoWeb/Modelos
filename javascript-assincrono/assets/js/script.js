// Define uma constante para um valor que irá ser utilizado em mais de uma requisição
const BASE_URL = 'https://thatcopy.pw/catapi/rest/';

//Define uma constante, o qual seleciona o valor do respectivo elemento no DOM
const catBtn = document.getElementById('change-cat');

//getCats assincrono, no qual a constante data aguarda a promise (fetch) tendo como parâmetro o valor da constante BASE_URL. Ou seja, ele aguarda a resposta da url. A promessa de acesso pode retornar uma resposta http de sucesso, por exemplo.
const getCats = async () => {

    //Aguarda o retorno da promise e em caso de sucesso armazena o valor da base_url na constante data
    const data = await fetch(BASE_URL)

        //Quando obtêm sucesso no retorno da promise recebe uma string em 'res' e converte em js em res.json()
        .then(res => res.json())

        //Pode ser usado 1 por encadeamento de promise, para apanhar erros imprevistos. Dessa forma, 'e' com função de console.log utilizando o parâmetro 'e'.
        .catch(e => console.log(e))

    //O retorno da função, com o valor da constante 'data', com a extensão da imagem .webpurl. É possível verificar as extensões disponíveis ao acessar o url que foi definida como valor da constante BASE_URL.
    return data.webpurl;
};

//Constante loadImg assincrona, com a constante catImg selecionando o elemento cat no DOM. Logo em seguida, catImg.src aguarda getCats e ao receber o retorno da função, atribui o valor recebido (return data.webpurl) para catImg.src
const loadImg = async () => {
    const catImg = document.getElementById('cat');
    catImg.src = await getCats();
};

//catBtn adiciona o evento click e toda vez que for executado, chama a função loadImg, que carrega uma imagem
catBtn.addEventListener('click', loadImg);

//chama a função loadImg(), sem parâmetros.
loadImg();

