import api, { key, bearer } from "../../api";
import { useEffect, useState } from 'react';

const GetMoviesDetails = (idMovie: string) => {


    const [details, setDetails] = useState<any>([])

    useEffect(() => {
        async function GetMovies() {
            const response = await api.get(`/movie/${idMovie}?language=pt-BR`, {
                headers: {
                    accept: key,
                    Authorization: `Bearer ${bearer}`
                }
            })

            setDetails(response.data)

        }

        GetMovies()

    }, [])

    return details

}

export default GetMoviesDetails