import axios from "axios"


export const key = "5c05c9e3d3a8bb8bd9ff6d9c0b5a8a89"
export const bearer = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzA1YzllM2QzYThiYjhiZDlmZjZkOWMwYjVhOGE4OSIsInN1YiI6IjY0ZTE0NTAwNWFiODFhMDBmZmMyN2JiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3v2aIsZre0dBuVRdD1UQnbo--K8xVG2dFPglfHbN2zw"

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

export default api