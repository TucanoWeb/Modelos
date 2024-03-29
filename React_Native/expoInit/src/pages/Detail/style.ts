import styled from "styled-components/native"


export const Container = styled.View`
    flex: 1;
    background-color: #191a30 ;
`

export const Header = styled.View`
    z-index: 99;
    position: absolute;
    top: 35px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 14px;
`

export const HeaderButton = styled.TouchableOpacity`
    width: 46px;
    height: 46px;
    background-color: rgba(25, 26, 48, 0.8);
    border-radius: 23px;
    border-radius: 23px;
    justify-content: center;
    align-items: center;
`

export const Banner = styled.Image`
    width: 100%;
    height: 350px;
    border-bottom-left-radius: 75px;
`

export const ButtonLink = styled.TouchableOpacity`
    background-color: #E72f49;
    width: 63px;
    height: 63px;
    border-radius: 35px;
    position: absolute;
    top: 300px;
    right: 15px;
    justify-content: center;
    align-items: center;
    z-index: 99;
`

export const Title = styled.Text`
    color: white;
    font-size: 22px;
    font-weight: bold;
    padding: 8px 14px;
    margin-top: 4px;
`

export const ContentArea = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 0 14px;
    justify-content: space-between;
`

export const Rate = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: white;
`

export const GenresArea = styled.View`
    flex-direction: row;
    width: 100%;
    height: auto;
    margin-top: 8px;
    padding: 0 14px;
    margin-bottom: 10px;
`

export const TagList = styled.FlatList`
`

export const ContainerDescripton = styled.View`
    margin-top: 5px;
`

export const Descripton = styled.Text`
    padding: 15px 14px;
    color: white;
    font-size: 15px;
    line-height: 25px;
`
