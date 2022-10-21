import {ErrorBoundaries} from '../ErrorsBoundaries/index';
import { Input } from '../index'
import './App.css';

function App() {


  return (
    <>
      <ErrorBoundaries>
        <Input />
      </ErrorBoundaries>
    </>
  );


}



export default App;
