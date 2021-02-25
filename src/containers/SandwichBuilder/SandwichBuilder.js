import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Sandwich from '../../components/Sandwich/Sandwich';
import BuildControls from '../../components/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class SandwichBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 5,
    },
    totalPrice: 4,
  };
  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCounted = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCounted;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
  };
  removeIngredientHandler = (type) => {};
  render() {
    return (
      <Auxiliary>
        <Sandwich ingredients={this.state.ingredients} />
        <BuildControls ingredientAdded={this.addIngredientHandler} />
      </Auxiliary>
    );
  }
}
export default SandwichBuilder;
