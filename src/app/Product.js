import React, {Component} from 'react';

export default class Product extends Component {
  render() {
    const {image, name, price, available} = this.props.product;
    return (
      <div style={{
        maxWidth: "400px",
        display: "flex",
        border: "1px solid #4d4d4d" ,
        marginBottom: "20px"
      }}>
        <div>
          <img
            src={image}
            style={{
              maxWidth: "100%",
              width: "200px"
            }}
            />
        </div>
        <div>
          <p>
            <strong>Nombre:</strong>
            <br/>
            {name}
          </p>
          <p>
            <strong>Precio:</strong>
            <br/>
            ${price}
          </p>
          <p>
            <strong>Disponible:</strong>
            <br/>
            {available ? 'Sí' : 'No'}
          </p>
        </div>
      </div>
    );
  }
}