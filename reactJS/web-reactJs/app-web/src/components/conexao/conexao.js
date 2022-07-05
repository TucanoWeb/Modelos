import { useState } from "react";

export const nomeServer = {};

const BuscarDados = () => {

    const [dadoServidor, setDadosServidor] = useState({});


    let myHeaders = new Headers();
    myHeaders.append("X-User-Token", "TOKEN");
    myHeaders.append("X-User-Login", "USER");

    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

   

    fetch('URL/\n', requestOptions)
        .then(response => response.json())
        .then(data => {setDadosServidor(data)})
        .catch(error => console.log('error', error));

        
       }




export default BuscarDados
