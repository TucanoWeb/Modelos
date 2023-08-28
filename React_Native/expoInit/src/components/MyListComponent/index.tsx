import {
    Container,
    Title,
    Rated,
    DetailsContainer,
    DetailsButton,
    DetailsText,
    WrapperRated,
    DeleteButton
} from "./style"

import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { DeleteDataAsync } from "../../services/asyncStorage/deleteData";

interface IData {
    data: {
        title: string
        id: string
        vote_average: string
    }

}

const MyListComponent = ({ data }: IData) => {

    const navigation: any = useNavigation()


    return (
        <Container>
            <Title numberOfLines={1}>
                {data.title}
            </Title>

            <WrapperRated>
                <Ionicons name="md-star" size={12} color="#E7A74e" />
                <Rated>
                    {data.vote_average}/10
                </Rated>
            </WrapperRated>

            <DetailsContainer>
                <DetailsButton onPress={() => navigation.navigate("Detail", { data: data.id })}>
                    <DetailsText>
                        Ver Detalhes
                    </DetailsText>
                </DetailsButton>
                <DeleteButton onPress={() => DeleteDataAsync("my-movies", data.id)}>
                    <Feather name="trash" size={20} color="white" />
                </DeleteButton>
            </DetailsContainer>

        </Container>
    )
}

export default MyListComponent