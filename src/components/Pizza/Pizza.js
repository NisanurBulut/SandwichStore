import React from 'react';
import './Pizza.css';
import PizzaIngredient from '../PizzaIngredient/PizzaIngredient';
const pizza = (props) => {
  function getToppingPosition(toppingRadius){
    var posX, posY;
    posX = -400-(Math.floor(Math.random() * ((325 * 2) - 1)));
    posY = -100+Math.floor(Math.random() * ((125 * 2) - 1));
    return { x: posX+'px', y: posY+'px' }
 }
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        var position=getToppingPosition(-15);
        console.log(position);
        return <PizzaIngredient key={igKey + i} type={igKey} />;
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
      <div className="Pizza">
        <PizzaIngredient type="crust" />
        <PizzaIngredient type="cheese" />
        {transformedIngredients}
      </div>
    </div>
  );
};

export default pizza;
