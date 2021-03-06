import React from "react";
import { hot } from 'react-hot-loader/root';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1>
          Hello {name}
        </h1>
        <button type="button" class="btn btn-primary">
          This is a bootstrap button
        </button>
        <div className="buttonWrapper">
          <button className="botaoA"> Botao A</button>
          <button className="botaoB"> Botao A</button>
        </div>
      </>
    );
  }
}

export default hot(App);