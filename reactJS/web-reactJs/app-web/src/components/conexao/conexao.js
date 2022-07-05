import { useState } from "react";

export const nomeServer = {};

const BuscarDados = () => {

    const [dadoServidor, setDadosServidor] = useState({});


    let myHeaders = new Headers();
    myHeaders.append("X-User-Token", "4015ce2ef2020cc6339659ce2fbdc0dcc2a74068c34384ca7fd89e84");
    myHeaders.append("X-User-Login", "tucanoweb2");

    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

   

    fetch('https://api-servidores.locaweb.com.br/v1/vps/servers/vps39101/\n', requestOptions)
        .then(response => response.json())
        .then(data => {setDadosServidor(data)})
        .catch(error => console.log('error', error));

        
       }




export default BuscarDados