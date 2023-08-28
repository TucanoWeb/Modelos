import {
    Container,
    Header,
    HeaderButton,
    Banner,
    ButtonLink,
    Title,
    ContentArea,
    Rate,
    GenresArea,
    TagList,
    Descripton,
    ContainerDescripton
} from "./style"
import { Feather, Ionicons } from "@expo/vector-icons"

import { useIsFocused, useNavigation, useRoute } from "@react-navigation/native"
import Stars from 'react-native-stars'
import GetMoviesDetails from "../../services/movies/details"
import TagGenres from "../../components/TagsGenres"
import { ScrollView } from "react-native-gesture-handler"
import { Modal } from "react-native"
import { useEffect, useState } from 'react';
import ModalLink from "../../components/ModalLink"
import { SaveDataAsync } from "../../services/asyncStorage/saveData"
import { VerifyMyList } from "../../utils/verifyListMovie"
import { DeleteDataAsync } from "../../services/asyncStorage/deleteData"


interface IData {
    id: string
    poster_path: string
    title: string
    vote_average: string
    genres: Array<any>
    overview: string
    homepage: string
}


const Detail = () => {

    const navigation = useNavigation()
    const route: any = useRoute()

    // Recebe os dados repassados pelo componente que chamando essa rota
    const movie: IData = GetMoviesDetails(route.params?.data)

    // ------- Verificação minha lista filmes ---------
    const [resultVerifyList, setResultVerifyList] = useState(false)


    const [openLink, setOpenLink] = useState<boolean>(false)


    useEffect(() => {

        // ------- Verificação minha lista filmes ---------
        async function verifyList() {
            // Verifica se o filme já está salvo no asyncStorage na listagem "my-movies"
            const myMovies: boolean = await VerifyMyList(movie.id, "my-movies")
            setResultVerifyList(myMovies)
        }
        verifyList()

    }, [movie])

    return (
        <Container>
            <Header>

                <HeaderButton
                    activeOpacity={0.7}
                    onPress={() => navigation.goBack()}
                >
                    <Feather
                        name="arrow-left"
                        size={28}
                        color={"#FFF"}
                    />
                </HeaderButton>
                <HeaderButton onPress={() => {
                    {
                        resultVerifyList ?
                            <>
                                {DeleteDataAsync("my-movies", movie.id)}
                                {setResultVerifyList(false)}
                            </>
                            :
                            <>
                                {SaveDataAsync('my-movies', movie)}
                                {setResultVerifyList(true)}
                            </>
                    }
                }

                }>
                    <Ionicons
                        name={resultVerifyList ? "checkmark-circle-outline" : "bookmark"}
                        size={resultVerifyList ? 35 : 28}
                        color={resultVerifyList ? "green" : "#FFF"}
                    />
                </HeaderButton>
            </Header>

            {movie.poster_path ?
                <Banner
                    resizeMethod="auto"
                    source={{ uri: `https://image.tmdb.org/t/p/original/${movie.poster_path}` }}
                />
                :
                <Banner
                    source={require("../../../assets/hvniceday.jpg")}
                />
            }

            <ButtonLink onPress={() => {
                if (movie.homepage === "") {
                    alert("Esse filme não possui um link associado")
                } else {
                    setOpenLink(true)
                }
            }}>
                <Feather
                    name="link"
                    size={24}
                    color={"#FFF"}
                />
            </ButtonLink>
            <Title numberOfLines={2}>{movie.title}</Title>

            <ContentArea>
                <Stars
                    default={movie.vote_average}
                    count={10}
                    half={true}
                    starSize={20}
                    fullStar={<Ionicons name="md-star" size={24} color={"#E7A74e"} />}
                    emptyStar={<Ionicons name="md-star-outline" size={24} color={"#E7A74e"} />}
                    halfStar={<Ionicons name="md-star-half" size={24} color={"#E7A74e"} />}
                    disable={true}
                />
                <Rate>{movie.vote_average}/10</Rate>
            </ContentArea>

            <GenresArea>
                <TagList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={movie?.genres}
                    renderItem={({ item }) => <TagGenres data={item} />}
                    keyExtractor={(item: any) => item.id}
                />
            </GenresArea>

            <ScrollView>
                <ContainerDescripton>
                    <Title>Descrição</Title>
                    {movie.overview ?
                        <Descripton>
                            {movie.overview}
                        </Descripton>
                        :
                        <Descripton>
                            Esse filme não possui uma descrição
                        </Descripton>
                    }
                </ContainerDescripton>
            </ScrollView>

            <Modal
                animationType="slide"
                visible={openLink}
            >
                <ModalLink
                    link={movie?.homepage}
                    title={movie?.title}
                    closeModal={() => setOpenLink(false)}
                />

            </Modal>
        </Container>
    )
}

export default Detail