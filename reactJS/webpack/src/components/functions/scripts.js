const alertDeletClient = (nome) => {
    alert(`Deletar Cliente: ${nome}`)
}

export const showEvent = (e) => {
    console.log('Evento clicado')
    console.log(e)

}


export const handleChange = (e) => {
    const { value } = e.target
    console.log(value)

}


export default alertDeletClient