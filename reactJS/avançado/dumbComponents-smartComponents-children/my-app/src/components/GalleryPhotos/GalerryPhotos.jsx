import { useState } from "react"
import Button from "../Buttons"


const GalleryPhotos = (props) => {

    const [showGallery, setShowGallery] = useState(false)
    const [contador, SetContador] = useState(1)


    function clicar() {

        SetContador(contador + 1)        

if (contador %2 === 0) {
    setShowGallery(false)

} else {
    setShowGallery(true)

}


        

    }


   function renderPhotos (img, key) {

    return (

        <div key={key}>
            <img src={img} />

        </div>

    )


}


    return (

        <>
            <Button exportaFuncao={clicar}>
                Mostrar Galeria
            </Button>
            {showGallery === true ? (

                <div>
                    {props.exportGallery.map(renderPhotos)}

                </div>

            )
                :
                (

                    <h1>Não mostrar</h1>
                )
            }


        </>



    )

}


export default GalleryPhotos