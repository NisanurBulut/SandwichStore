import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import classes from './OrderSummary.module.css';

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span className={classes.Label}>{igKey}</span> : {props.ingredients[igKey]}</li>
    );
  });
  return (
    <Auxiliary>
      <h3>Your Order</h3>
      <p>A delicious Sandwich with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>continue to checkout</p>
    </Auxiliary>
  );
};

export default OrderSummary;
