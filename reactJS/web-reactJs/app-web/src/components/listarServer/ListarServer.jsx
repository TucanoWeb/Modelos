import React, { useState, useEffect } from 'react';

function GetServer() {
    const [data, setData] = useState({})
    const [hardware, setHardware] = useState ({})

    const URL = 'https://api-servidores.locaweb.com.br/v1/vps/servers/vps39101/';

    let myHeaders = new Headers();
    myHeaders.append("X-User-Token", "4015ce2ef2020cc6339659ce2fbdc0dcc2a74068c34384ca7fd89e84");
    myHeaders.append("X-User-Login", "tucanoweb2");

    let requestOptions = {
        method: 'GET',
        headers: myHeaders
    };

    useEffect(() => {
        fetchData()


    }, [])


    const fetchData = () => {
        fetch(URL, requestOptions)
            .then((res) =>
                res.json())

            .then((response) => {
                console.log(response);
                setData(response.data['attributes'])
                setHardware(response.data['attributes']['base_hardware']);
            })

    }


    return (
        <>
            <h1>How to display JSON data to table in React JS</h1>
            <p>
                -- Nome: {data.title}
                                </p>
            <p>
                
                Memória: {hardware.cpus}
                </p>
            
            <p>
                Sistema Operacional: {data.operating_system}
                                </p>

        </>
    );
}



export default GetServer;