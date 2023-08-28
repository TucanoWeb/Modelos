export const SizeListMovies = (size: number, movies: []) => {
    const arrayMovies: Array<object> = []

    for (let i = 0; i <= size; i++) {
        if(movies[i] !== undefined){
            arrayMovies.push(movies[i])
        }
    }

    return arrayMovies
}