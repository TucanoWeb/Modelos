import './App.css';
import {Button, Contador} from './components'


function App() {
  
  
  function click () {
    console.log('click')
  }
  
  return (
    <>
    <Button exportFunction={click} >
      Nome do Botão
    </Button>
    <Contador exportValue={'Valor exportado'}/>
    </>
  );
}

export default App;
