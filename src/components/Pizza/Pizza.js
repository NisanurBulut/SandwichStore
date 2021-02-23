import React from 'react';
import classes from './Pizza.css';
import PizzaIngredient from '../PizzaIngredient/PizzaIngredient';
const pizza = (props)=>{
    return (
        <div className={classes.Pizza}>
            <PizzaIngredient type="bread-top"></PizzaIngredient>
            <PizzaIngredient type="cheese"></PizzaIngredient>
            <PizzaIngredient type="meat"></PizzaIngredient>
            <PizzaIngredient type="bread-bottom"></PizzaIngredient>
        </div>
    );
}

export default pizza;