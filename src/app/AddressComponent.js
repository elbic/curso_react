import React, {Component} from 'react';

export default class AddressComponent extends Component {
  render() {
    return (
      <div>
        <div>
          <strong>Long Name:</strong>
          <span>{this.props.long_name}</span>
        </div>
        <div>
          <strong>Short Name:</strong>
          <span>{this.props.short_name}</span>
        </div>
        <div>
          <strong>Types:</strong>
          <span>{this.props.types.join(', ')}</span>
        </div>
        <br/>
        <br/>
      </div>
    );
  }
}

AddressComponent.propTypes = {
  long_name: React.PropTypes.string,
  short_name: React.PropTypes.string,
  types: React.PropTypes.array
}
