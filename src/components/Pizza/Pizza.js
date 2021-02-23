import React from 'react';
import './Sandwich.css';
import SandwichIngredient from '../SandwichIngredient/SandwichIngredient';
const Sandwich = (props) => {
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
