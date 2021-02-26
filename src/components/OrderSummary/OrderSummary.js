import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Button from '../UI/Button/Button';
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
      <div>
        <Button btnType={Danger} />
        <Button btnType={Success} />
      </div>
    </Auxiliary>
  );
};

export default OrderSummary;
