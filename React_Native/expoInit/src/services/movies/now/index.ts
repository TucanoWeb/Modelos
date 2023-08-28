import { MoviesNowContextProps } from "../../../context/moviesContext";
import api, { key, bearer } from "../../api";
import { useEffect, useContext } from 'react';
import { SizeListMovies } from "../../../utils/sizeMoviesList";

const GetMoviesNow = () => {

    const [moviesNow, setMoviewsNow] = useContext(MoviesNowContextProps)


    useEffect(() => {
        async function GetMovies() {
            const response = await api.get('/movie/now_playing?language=pt-BR&page=1', {
                headers: {
                    accept: key,
                    Authorization: `Bearer ${bearer}`
                }
            })

            const sizeListMovie = SizeListMovies(5, response.data.results)

            setMoviewsNow(sizeListMovie)

        }

        GetMovies()

    }, [])

}

export default GetMoviesNow