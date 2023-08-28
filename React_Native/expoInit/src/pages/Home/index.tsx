import {
    Containner,
    Input,
    SearchButton,
    SearchContainer,
    Title,
    Banner,
    BannerButton,
    SliderMovie
} from "./style"
import { Feather } from "@expo/vector-icons"

import { ActivityIndicator, ScrollView } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { useContext, useEffect, useState } from 'react';

import Header from "../../components/Header"
import SliderItem from "../../components/SliderItem"
import GetMoviesNow from "../../services/movies/now"
import { MoviesNowContext } from "../../context/moviesContext"
import GetMoviesPopular from "../../services/movies/popular"
import GetMoviesRated from "../../services/movies/rated"
import { randomNumber } from "../../utils/randomNumber"
import { StoreData } from "../../services/asyncStorage";

const Home = () => {

    // Para abortar requisições na DOM, controlado pelo unmount no useEffect
    const ac = new AbortController()

    // Inicia Async Storage para "Meus Filmes"
    StoreData("my-movies", "[]")

    const navigation: any = useNavigation()

    GetMoviesNow()
    const popularMovies = GetMoviesPopular()
    const topRatedMovies = GetMoviesRated()
    const moviesNow = useContext(MoviesNowContext)

    const number = randomNumber(moviesNow.length)
    const bannerMovie = moviesNow[number]

    const [input, setInput] = useState<string>("")


    useEffect(() => {

        // unmount or refresh component
        return () => {
            ac.abort()
        }

    }, [])



    return (
        <Containner>
            <Header
                title="React Prime"
            />

            <SearchContainer>
                <Input
                    placeholder="Ex Vingadores"
                    placeholderTextColor="#ddd"
                    value={input}
                    onChangeText={(e) => setInput(e)}
                />
                <SearchButton onPress={() => {
                    if (input.length < 3) {
                        alert("Digite pelo menos 3 letras")
                    } else {
                        navigation.navigate("Search", { data: input })
                    }

                }
                }>
                    <Feather name="search" size={30} color={"#FFF"} />
                </SearchButton>
            </SearchContainer>

            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <Title>
                    Em Cartaz
                </Title>

                {moviesNow.length > 0 ?
                    <>
                        <BannerButton activeOpacity={0.9} onPress={() => navigation.navigate("Detail", { data: bannerMovie.id })}>
                            <Banner
                                source={{ uri: `https://image.tmdb.org/t/p/original/${bannerMovie.poster_path}` }}
                            />
                        </BannerButton>
                        <SliderMovie
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={moviesNow}
                            renderItem={({ item }) => <SliderItem data={item} />}
                            keyExtractor={(item: any) => item.id}
                        >
                        </SliderMovie>
                    </>
                    :
                    <>
                        <ActivityIndicator size={"large"} color={"#FFF"} />
                    </>
                }


                <Title>
                    Populares
                </Title>
                {popularMovies.length > 0 ?
                    <>
                        <SliderMovie
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={popularMovies}
                            renderItem={({ item }) => <SliderItem data={item} />}
                            keyExtractor={(item: any) => item.id}
                        >
                        </SliderMovie>
                    </>
                    :
                    <>
                        <ActivityIndicator size={"large"} color={"#FFF"} />
                    </>

                }

                <Title>
                    Mais Votados
                </Title>
                {topRatedMovies.length > 0 ?
                    <>
                        <SliderMovie
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={topRatedMovies}
                            renderItem={({ item }) => <SliderItem data={item} />}
                            keyExtractor={(item: any) => item.id}

                        >
                        </SliderMovie>
                    </>
                    :
                    <>
                        <ActivityIndicator size={"large"} color={"#FFF"} />
                    </>
                }
            </ScrollView>
        </Containner>
    )
}


export default Home