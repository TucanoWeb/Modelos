import api, { key, bearer } from "../../api";
import { SizeListMovies } from "../../../utils/sizeMoviesList";
import { useEffect, useState } from 'react';

export const GetMoviesSearch = (value: string) => {

    const [search, setSearch] = useState<any>([])


    useEffect(() => {
        async function getMovie() {
            const response = await api.get(`/search/movie?query=${value}&include_adult=false&language=pt-BR&page=1`, {
                headers: {
                    accept: key,
                    Authorization: `Bearer ${bearer}`
                }
            })

            const sizeListMovie = SizeListMovies(10, response.data.results)

            setSearch(sizeListMovie)
        }

        getMovie()
    }, [])

    return search
}

