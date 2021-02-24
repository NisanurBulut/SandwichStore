import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './SandwichIngredient.module.css'

class SandwichIngredient extends Component {
  render() {
    let ingredient = null;
    switch (this.props.type) {
      case 'bread-bottom': {
        ingredient = <div className={classes.BreadBottom}></div>;
        break;
      }
      case 'bread-top': {
        ingredient = <div className={classes.BreadTop}></div>;
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
