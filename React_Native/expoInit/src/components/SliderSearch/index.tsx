import { Ionicons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import "../../../assets/hvniceday.jpg"


import {
    Container,
    BannerItem,
    Rate,
    RateContainer,
    Title
} from "./styles"


interface IData {
    data: {
        poster_path?: string
        id?: string
        title?: string
        vote_average?: string
    } | any
}

const SliderSearch = ({ data }: IData) => {

    const navigation: any = useNavigation()

    return (
        <Container
            activeOpacity={0.7}
            onPress={() => navigation.navigate("Detail", { data: data.id })}
        >
            {data.poster_path !== null ?
                <BannerItem
                    source={{ uri: `https://image.tmdb.org/t/p/original/${data.poster_path}` }}
                />
                :
                <BannerItem
                    source={require("../../../assets/hvniceday.jpg")}
                />
            }

            <Title numberOfLines={1}>{data.title}</Title>
            <RateContainer>
                <Ionicons name="md-star" size={12} color="#E7A74e" />
                <Rate>{data.vote_average}/10</Rate>
            </RateContainer>
        </Container>
    )
}

export default SliderSearch