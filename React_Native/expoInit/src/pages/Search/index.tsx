import { BackButton } from "../../components/ModalLink/style"
import {
    Container,
    ContentArea,
    Header,
    Title,
    ListMovies,
    ContainerWarning,
    DescriptonWarning,
    WrapperWarning
} from "./style"
import { Feather, Ionicons } from "@expo/vector-icons"

import { useNavigation, useRoute } from "@react-navigation/native"
import SliderSearch from "../../components/SliderSearch"
import { GetMoviesSearch } from "../../services/movies/search"


interface IData {
    id: string
    poster_path: string
    title: string
    vote_average: string
    genres: Array<any>
    overview: string
    homepage: string
    length: any
}

const Search = () => {

    const navigation = useNavigation()
    const route: any = useRoute()

    // Recebe os dados repassados pelo componente que chamando essa rota
    const search: string = route.params?.data

    const MoviesResult: IData = GetMoviesSearch(search)


    return (
        <Container>
            <Header>
                <BackButton
                    onPress={() => navigation.goBack()}
                >
                    <Feather
                        name="arrow-left"
                        size={35}
                        color={"#FFF"}
                    />
                </BackButton>

                <Title>
                    Sua Busca
                </Title>
            </Header>


            <ContentArea>
                {MoviesResult.length > 0 ?
                    <ListMovies
                        horizontal={false}
                        showsVerticalScrollIndicator={false}
                        data={MoviesResult as any}
                        renderItem={({ item }) => <SliderSearch data={item} />}
                        keyExtractor={(item: any) => item.id}
                    >
                    </ListMovies>
                    :
                    <ContainerWarning>
                        <WrapperWarning>
                            <Ionicons name="warning-outline" size={35} color="yellow" />
                            <Title>Que Pena :(</Title>
                        </WrapperWarning>
                        <DescriptonWarning>
                            Não localizamos nenhum registro utilizando a palavra chave: "{search}"
                        </DescriptonWarning>
                        <DescriptonWarning>
                            Por favor, refaça sua busca.
                        </DescriptonWarning>
                    </ContainerWarning>
                }
            </ContentArea>
        </Container>
    )
}


export default Search