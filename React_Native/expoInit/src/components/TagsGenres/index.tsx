import {
    Container,
    Tag,
    Text
} from "./styles"

interface ITagGenres {
    data: {
        nome: string
    } | any
}

const TagGenres = ({ data }: ITagGenres) => {

    return (
        <Container>
            <Tag>
                <Text>{data.name}</Text>
            </Tag>
        </Container>
    )
}

export default TagGenres