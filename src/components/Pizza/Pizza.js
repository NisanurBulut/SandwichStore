import React from 'react';
import './Pizza.css';
import PizzaIngredient from '../PizzaIngredient/PizzaIngredient';
const pizza = (props) => {
  console.log(props.ingredients);
  const transformedIngredients=Object.keys(props.ingredients)
  .map((igKey)=>{
    debugger;
    return [...Array(props.ingredients[igKey])].map((_,i)=>{
     return <PizzaIngredient key={igKey+i} type={igKey} />
    })
  });
  console.log(transformedIngredients);
  return (
    <div>
      <div className="Pizza">
        <PizzaIngredient type="crust" />
        <PizzaIngredient type="cheese" />
        <PizzaIngredient type="pepperoni" />
        {transformedIngredients}
      </div>
    </div>
  );
};

export default pizza;
