import React, { Component } from 'react';
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary';
import Sandwich from '../../components/Sandwich/Sandwich';

class Checkout extends Component {
  state = {
    ingredients:{
      bacon:1,
      cheese:1,
      salad:1,
      meat:1
    }
  }
  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    for (let param in query.entries()) {
      ingredients[param[0]] = +param[1];
    }
    this.setState({ ingredients: ingredients });
    console.log(ingredients);
  }
  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };
  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  };
  render() {
    return (
      <div>
        <CheckoutSummary
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
          ingredients={this.state.ingredients}
        />
      </div>
    );
  }
}

export default Checkout;
