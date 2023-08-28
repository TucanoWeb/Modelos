import api, { key, bearer } from "../../api";
import { useEffect, useState } from 'react';
import { SizeListMovies } from "../../../utils/sizeMoviesList";

const GetMoviesRated = () => {

    const [topRated, setTopRated] = useState<any>([])

    useEffect(() => {
        async function GetMovies() {
            const response = await api.get('/movie/top_rated?language=pt-BR&page=1', {
                headers: {
                    accept: key,
                    Authorization: `Bearer ${bearer}`
                }
            })

            const sizeListMovie = SizeListMovies(10, response.data.results)

            setTopRated(sizeListMovie)

        }

        GetMovies()

    }, [])

    return topRated

}

export default GetMoviesRated