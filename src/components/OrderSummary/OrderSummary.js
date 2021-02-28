import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import CustomButton from '../UI/Button/CustomButton';
import classes from './OrderSummary.module.css';

class OrderSummary extends Component {
  componentWillUpdate(){
    console.log('Order summary will upda');
  }
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map((igKey) => {
      return (
        <li key={igKey}>
          <span className={classes.Label}>{igKey}</span> :{' '}
          {this.props.ingredients[igKey]}
        </li>
      );
    });
    return (
      <Auxiliary>
        <h3>Your Order</h3>
        <p>A delicious Sandwich with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p className={classes.priceLabel}>
          total Cost: <strong>{this.props.price.toFixed(2)}</strong>
        </p>
        <div className={classes.btnGroup}>
          <CustomButton btnType="Danger" clicked={this.props.purchaseCancelled}>
            Cancel
          </CustomButton>
          <CustomButton btnType="Success" clicked={this.props.purchaseContinued}>
            Continue
          </CustomButton>
        </div>
      </Auxiliary>
    );
  }
}

export default OrderSummary;
