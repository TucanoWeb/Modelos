import React, { useState, useEffect } from 'react';

function GetServer() {
    const [data, setData] = useState({})
    const [hardware, setHardware] = useState ({})

    const URL = 'URL';

    let myHeaders = new Headers();
    myHeaders.append("X-User-Token", "TOKEN);
    myHeaders.append("X-User-Login", "USER");

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
