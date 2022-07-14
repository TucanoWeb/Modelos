import ExemploFragments from '../Fragments/ExemploFragments';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Counter from '../Counter/Counter';
import ExemploPropTypes from '../propTypes/ExemploPropTypes';
import ExemploUseRefs from '../useRefs/ExemploUseRefs';


import './App.css';

function App() {
  
  const imprime = () => (

    console.log('Imprime')
  )



  
  return (
    <ErrorBoundary>

      <ExemploFragments />
      <Counter />
      <ExemploPropTypes array={[1, 2, 3]}  funcao={imprime} numbers={1} objectItem={{Nome: 'Ana', Idade: 32}} booleanItem={true} />
      < ExemploUseRefs />

    </ ErrorBoundary>
  );
}

export default App;
