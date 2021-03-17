import React, { Component } from 'react';
import GeneralModal from '../../components/UI/GeneralModal/GeneralModal';
import Sandwich from '../../components/Sandwich/Sandwich';
import BuildControls from '../../components/BuildControls/BuildControls';
import classes from './SandwichBuilder.module.css';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import axios from '../../services/general-service';
import Spinner from '../../components/UI/Spinner/Spinner';
import WithErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class SandwichBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 0,
    purchasable: false,
    purchasing: false,
    loading: false,
    error: false,
  };
  componentDidMount() {
    axios
      .get('ingredients')
      .then((response) => {
        console.log(response.data);
        this.setState({ ingredients: response.data, loading: false });
      })
      .catch((err) => {
        this.setState({ loading: false, error: true });
      });
  }
  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };
  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchasable: sum > 0 });
  }
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
    this.updatePurchaseState(updatedIngredients);
  };
  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCounted = oldCount - 1;
    if (oldCount <= 0) {
      return;
    }
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCounted;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };
  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };
  purchaseContinueHandler = () => {
    // this.setState({ loading: true });
    // const order = {
    //   ingredients: this.state.ingredients,
    //   price: this.state.totalPrice,
    //   customer: {
    //     name: 'Nisanur Bulut',
    //     address: 'Eskişehir',
    //   },
    //   email: 'nisanur@gmail.com',
    //   deliveryMethod: 'fastest',
    // };
    // axios
    //   .post('orders', order)
    //   .then((response) => {
    //     this.setState({ loading: false, purchasing: false });
    //   })
    //   .catch((err) => {
    //     this.setState({ loading: false, purchasing: false });
    //     console.log(err);
    //   });
    const queryParams = [];
    for (let i in this.state.ingredients) {
      queryParams.push(
        encodeURIComponent(i) +
          '=' +
          encodeURIComponent(this.state.ingredients[i])
      );
    }
    const queryString = queryParams.join('&');
    this.props.history.push({
      pathname: '/checkout',
      search: '?' + queryString,
    });
  };
  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let orderSummary = null;
    let sandwich = this.state.error ? (
      <p>Ingredients doesnt load</p>
    ) : (
      <Spinner />
    );

    if (this.state.ingredients) {
      sandwich = (
        <Auxiliary>
          <div className={classes.row}>
            <div className={classes.column}>
              <Sandwich
                className={classes.column}
                ingredients={this.state.ingredients}
              />
            </div>
            <div className={classes.column}>
              <BuildControls
                className={classes.column}
                ingredientAdded={this.addIngredientHandler}
                ingredientRemoved={this.removeIngredientHandler}
                disabled={disabledInfo}
                price={this.state.totalPrice}
                purchasable={this.state.purchasable}
                ordered={this.purchaseHandler}
              />
            </div>
          </div>
        </Auxiliary>
      );
      orderSummary = (
        <OrderSummary
          price={this.state.totalPrice}
          ingredients={this.state.ingredients}
          purchaseCancelled={this.purchaseCancelHandler}
          purchaseContinued={this.purchaseContinueHandler}
        />
      );
    }
    if (this.state.loading) {
      orderSummary = <Spinner />;
    }
    return (
      <Auxiliary>
        <GeneralModal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
        </GeneralModal>
        {sandwich}
      </Auxiliary>
    );
  }
}
export default WithErrorHandler(SandwichBuilder, axios);
