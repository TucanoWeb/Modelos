import {
    Container,
    ContentArea
} from "./style"

import Header from "../../components/Header"
import { ListMovies } from "../Search/style"
import MyListComponent from "../../components/MyListComponent"
import { useEffect, useState } from 'react';
import { ReadDataAsync } from "../../services/asyncStorage/readData";



const Moveis = () => {

    const [list, setList] = useState([])


    useEffect(() => {

        async function GetListAsync() {
            const myList: any = await ReadDataAsync('my-movies')
            setList(myList)
        }

        GetListAsync()

    }, [list])

    return (
        <Container>
            <Header
                title="Meus filmes"
            />

            <ContentArea>
                <ListMovies
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    data={list}
                    renderItem={({ item }) => <MyListComponent data={item as any} />}
                    keyExtractor={(item: any) => item.id}
                >
                </ListMovies>
            </ContentArea>
        </Container>
    )
}

export default Moveis