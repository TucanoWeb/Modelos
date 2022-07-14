import './App.css';
import Button from '../Buttons';
import GalleryPhotos from '../GalleryPhotos/GalerryPhotos';

function App() {
  
  
  function clicar() {
    console.log('Clicado')
  }


//Envia propriedades para GallerPhotos


const Photos = [

  'https://s2.glbimg.com/LmiYv9SkiVZfagGxsRyFuM3DBtI=/620x430/e.glbimg.com/og/ed/f/original/2022/07/12/main_image_star-forming_region_carina_nircam_final-1280.jpg',
  'https://i.pinimg.com/564x/e4/06/5f/e4065f8e59ddd0706dcd1abd38081735.jpg',
  'https://www.2net.com.br//Repositorio/251/Publicacoes/23883/3c2fd25f-c.jpg'

]

  
  return (
    
    <>
    <p>
      Dumb components são components que geralmente não possuem estado ou regras de negócio. Podem ser utilizados em várias partes do projeto, pois as propriedades repassadas são genéricas. Como exemplo, temos o botão abaixo. Ele pode ser utilizado em vários componentes diferentes, pois o código interno do componente recebe os valores repassados pelo componente em si ou muitas vezes nem recebe nenhuma propriedade.
    </p>
    <Button exportaFuncao={clicar}>
      Nome do Botão
    </Button>

    <p>
    Já os smart components possuem um algoritmo específico. Nada impede de receber propriedades ou ser reutilizado, mas geralmente acompla-se à um determinado componente, pois possui um código mais específico. Como exemplo, temos a galeria abaixo.

    </p>

    <GalleryPhotos exportGallery={Photos} />

  

    </>
  );
}

export default App;
