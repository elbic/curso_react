import React, {Component} from 'react';
import Product from './Product';
import axios from 'axios';

export default class Products extends Component {

  constructor(props) {
    super(props);

    this.state = {
      list: [],
      loading: true
    }
  }

  componentWillMount() {
    axios
      .get('http://royal-api-dev.mellow.online/api/Products?access_token=PvlYgnUvNracIs5fqG3ni3zmk30qW85j8p46YzTi0jES58tlgDjYC1esohTxjfNR')
      .then(result => {
        this.setState({
          list: result.data,
          loading: false
        });
      });
  }

  render() {
    return (
      <div>
        <h1>Lista de productos</h1>
        {this.state.loading ? <p>Cargando...</p> : null}
        <div>
          {this.state.list.map((obj, index) => {
            return <Product key={index} product={obj} />;
          })}
        </div>
      </div>
    );
  }
}