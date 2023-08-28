import { Containner, Title, MenuButton } from "./style"
import { useNavigation, DrawerActions } from '@react-navigation/native';

import { Feather } from "@expo/vector-icons"

interface IHeader {
    title: string
}

const Header = ({title}: IHeader) => {

    const navigation = useNavigation()

    return (
        <Containner>
            <MenuButton onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                <Feather name="menu" size={36} color={"#FFF"} />
            </MenuButton>
            <Title>
                {title}
            </Title>
        </Containner>
    )
}

export default Header