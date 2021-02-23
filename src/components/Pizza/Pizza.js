import React from 'react';
import './Pizza.css';
import PizzaIngredient from '../PizzaIngredient/PizzaIngredient';
const pizza = (props) => {
  return (
    <div>
      <div class="Pizza">
        <PizzaIngredient type="crust" />
        <PizzaIngredient type="cheese" />
        <PizzaIngredient type="pepperoni" />
      </div>
    </div>
  );
};

export default pizza;
