import {
    BackButton,
    Name
} from "./style"
import { Feather } from "@expo/vector-icons"

import WebView from "react-native-webview"

interface IModalLink {
    link: string
    title: string
    closeModal: () => void
}

const ModalLink = ({ link, title, closeModal }: IModalLink) => {

    return (
        <>
            <BackButton onPress={closeModal}>
                <Feather name="x" size={35} color={"#FFF"} />
                <Name numberOfLines={1}>
                    {title}
                </Name>
            </BackButton>

            <WebView
                source={{ uri: link }}
            />
        </>
    )
}

export default ModalLink