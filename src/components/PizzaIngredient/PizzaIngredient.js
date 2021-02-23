import React, { Component } from 'react';
import  './PizzaIngredient.css';
import PropTypes from 'prop-types';

class PizzaIngredient extends Component {
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
        ingredient = <div className="pepperoni"></div>;
        break;
      }
      case 'pep1': {
        ingredient = <div className="pep1"></div>;
        break;
      }
      default:
        ingredient = null;
        break;
    }
    return ingredient;
  }
}

PizzaIngredient.propTypes={
  type:PropTypes.string.isRequired
}
export default PizzaIngredient;
