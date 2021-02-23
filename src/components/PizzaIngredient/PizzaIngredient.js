import React, { Component } from 'react';
import  './SandwichIngredient.css';
import PropTypes from 'prop-types';

class SandwichIngredient extends Component {
  render() {
    let ingredient = null;
    switch (this.props.type) {
      case 'crust': {
        ingredient = <div className="crust"></div>;
        break;
      }
      case 'cheese': {
        ingredient = <div className="cheese"></div>;
        break;
      }
      case 'pepperoni': {
        ingredient = <div className="pepperoni" style={{top:this.props.posx, left:this.props.posy}}></div>;
        break;
      }
      case 'oil': {
        ingredient = <div className="oil"></div>;
        break;
      }
      default:
        ingredient = null;
        break;
    }
    return ingredient;
  }
}

SandwichIngredient.propTypes={
  type:PropTypes.string.isRequired
}
export default SandwichIngredient;
