import { Button } from "@chakra-ui/react"
import { IButtonForm } from "./types"

const ButtonForm: React.FC<IButtonForm> = ({description, onClick, type}) => {
    return (
        <>
        <Button onClick={onClick} type={type} >
            {description}
        </Button>
        </>
    )
}

export default ButtonForm