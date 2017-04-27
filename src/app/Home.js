import React, {Component} from 'react';
import Menu from './Menu';
import axios from 'axios';
import AddressComponent from './AddressComponent';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      results: [],
      error: false
    }
  }

  onChangeText = (event) => {
    this.setState({
      search: event.target.value
    });
  }

  searchAddress = () => {
    const {search} = this.state;
    axios
      .get(`https://maps.googleapis.com/maps/api/geocode/json?address=${search}`)
      .then(resultado => {
        this.setState({
          results: resultado.data.results[0].address_components
        });
      })
      .catch(error => {
        this.setState({
          error: true
        })
      });
  }

  render() {
    return (
      <div>
        <Menu />
        <h1>Esto es el home</h1>
        <form>
          <input type="text" placeholder="Escribe aquí tu dirección" onChange={this.onChangeText} />
          <button type="button" onClick={this.searchAddress}>Buscar</button>
        </form>
        <div>
          buscando: {this.state.search}
        </div>
        <div>
          {this.state.error ? <p style={{color: 'red'}}>Hubo un error</p> : null}
        </div>
        <div>
          {this.state.results.map((obj, index) => {
            return <AddressComponent
              key={index}
              long_name={obj.long_name}
              short_name={obj.short_name}
              types={obj.types} />;
          })}
        </div>
      </div>
    );
  }
}
