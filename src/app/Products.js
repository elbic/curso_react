import React, {Component} from 'react';
import Product from './Product';
import axios from 'axios';

export default class Products extends Component {

  constructor(props) {
    super(props);

    this.state = {
      list: [],
      cart: [],
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

  addProduct = product => {
    this.setState({
      cart: this.state.cart.concat([product])
    });
  }

  removeProduct = (index) => {
    const newCart = this.state.cart.concat([]);
    newCart.splice(index, 1);
    this.setState({
      cart: newCart
    });
  }

  render() {
    return (
      <div>
        <h1>Lista de productos</h1>
        {this.state.loading ? <p>Cargando...</p> : null}
        <div style={{display: 'flex'}}>
          <div>
            {this.state.list.map((obj, index) => {
              return <Product
                index={index}
                key={index}
                product={obj}
                addProduct={this.addProduct}
                />;
            })}
          </div>
          <div style={{marginLeft: '30px'}}>
            <h3>Carrito</h3>
            {this.state.cart.map((obj, index) => {
              return <Product
                key={index}
                index={index}
                isCart={true}
                product={obj}
                removeProduct={this.removeProduct}
                />;
            })}
          </div>
        </div>
      </div>
    );
  }
}