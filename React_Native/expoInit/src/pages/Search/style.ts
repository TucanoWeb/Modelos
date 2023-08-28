import { styled } from "styled-components/native";


export const Container = styled.View`
    flex: 1;
    display: flex;
    width: 100%;
    background-color: #141a29;
`

export const Header = styled.View`
    width: 100%;
    padding: 0 14px;
    height: 10%;
    flex-direction: row;
    align-items: center;
`

export const Title = styled.Text`
    color: #FFF;
    font-size: 30px;
    font-weight: bold;
    margin-left: 14px;
    text-transform: capitalize;
`

export const ContentArea = styled.View`
    width: 100%;
    height: 90%;
`

export const ListMovies = styled.FlatList`
    padding: 0 14px;
`

export const ContainerWarning = styled.View`
    padding: 0 14px;
    justify-content: center;
    align-items: center;
`

export const WrapperWarning = styled.View`
    margin-top: 25px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const DescriptonWarning = styled.Text`
    margin-top: 25px;
    color: white;
    font-size: 20px;
`
