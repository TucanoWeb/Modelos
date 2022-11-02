export interface IButton {
    title: string,
    variant?: string, //O ponto de interrogação informa que esse valor é opcional
    onClick?: () => void, //O ponto de interrogação informa que esse valor é opcional
    type?: string
}

export interface IButtonStyled {
    variant: string
}