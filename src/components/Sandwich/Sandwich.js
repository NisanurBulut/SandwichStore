import React from 'react';
import classes from './Sandwich.module.css';

import SandwichIngredient from '../SandwichIngredient/SandwichIngredient';
const Sandwich = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <SandwichIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients</p>;
  }
  return (
    <div>
      <div className={classes.Sandwich}>
        <SandwichIngredient type="bread-top" />
        <SandwichIngredient type="bread-bottom" />
        {transformedIngredients}
      </div>
    </div>
  );
};

export default Sandwich;