import React from 'react';
import './Pizza.css';
import PizzaIngredient from '../PizzaIngredient/PizzaIngredient';
const pizza = (props) => {
  const getRandom = (min, max) => Math.floor(Math.random()*(max-min+1)+min);
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        var posx = getRandom(-420, -400)+'px';
        var posy = getRandom(50, 220)+'px'; // 👈🏼 Vertically

        console.log(posx,posy);
        return <PizzaIngredient key={igKey + i} type={igKey} posx={posx} posy={posy} />;
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
