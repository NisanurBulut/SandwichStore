import React from 'react';
import './Sandwich.css';
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
      <div className="Sandwich">
        <SandwichIngredient type="crust" />
        <SandwichIngredient type="cheese" />
        {transformedIngredients}
      </div>
    </div>
  );
};

export default Sandwich;
