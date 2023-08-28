import { styled } from "styled-components/native";

export const Container = styled.View`
`

export const Title = styled.Text`
    color: white;
    font-size: 18px;
    font-weight: bold;
`

export const WrapperRated = styled.View`
    flex-direction: row;
    align-items: center;
    height: 30px;
`

export const Rated = styled.Text`
    color: white;
    font-size: 15px;
    font-weight: bold;
    margin-left: 5px;
`

export const DetailsContainer = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 30px;

`

export const DetailsButton = styled.TouchableOpacity`
    background-color: #E72f49;
    width: 85%;
    height: 25px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
`

export const DeleteButton = styled.TouchableOpacity`
    width: 20%;
    align-items: center;
`


export const DetailsText = styled.Text`
    color: white;
    font-size: 17px;
    font-weight: bold;
`