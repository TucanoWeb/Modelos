import api, { key, bearer } from "../../api";
import { useEffect, useState } from 'react';
import { SizeListMovies } from "../../../utils/sizeMoviesList";

const GetMoviesPopular = () => {

    const [popular, setPopular] = useState<any>([])

    useEffect(() => {
        async function GetMovies() {
            const response = await api.get('/movie/popular?language=pt-BR&page=1', {
                headers: {
                    accept: key,
                    Authorization: `Bearer ${bearer}`
                }
            })

            const sizeListMovie = SizeListMovies(10, response.data.results)

            setPopular(sizeListMovie)

        }

        GetMovies()

    }, [])

    return popular

}

export default GetMoviesPopular