import React, {Component} from 'react';

class Titulo extends Component {
  // esta es la manera pro
  state = {
    titulo: this.props.texto
  }

  modificarTitulo = () => {
    this.setState({
      titulo: this.state.titulo + '_'
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.titulo}</h1>
        <h2>{this.props.sub}</h2>
        <button onClick={this.modificarTitulo}>Haz click 1</button>
        <button onClick={() => this.setState({titulo: this.state.titulo + '_'})}>Haz click 2</button>
      </div>
    );
  }
}

Titulo.propTypes = {
  titulo: React.PropTypes.string
}

class Juego extends Component {
  // todo lo que hicimos aquí fue porque no usamos state-2

  // esta es la manera convencional
  constructor(props) {
    super(props);

    this.state = {
      clicks: 0
    };
  }

  saludar = () => {
    this.setState({
      clicks: this.state.clicks + 1
    });
  }

  render() {
    return (
      <div>
        <p>Número de clicks {this.state.clicks}</p>
        <button
          onClick={this.saludar}
          >
          Haz click
        </button>
      </div>
    );
  }
}

export class Hello extends Component {
  render() {
    const titulo = "Esto es un titulo";
    return (
      <div>
        <Titulo texto={titulo} sub="Esto es un subtitulo"/>
        <Titulo texto="Esto es otro título"/>
        <p>Esto es un pàrrafo</p>
        <Juego />
      </div>
    );
  }
}
