import React, { Component } from 'react';
import { connect } from 'react-redux';
import GeneralModal from '../../components/UI/GeneralModal/GeneralModal';
import Sandwich from '../../components/Sandwich/Sandwich';
import BuildControls from '../../components/BuildControls/BuildControls';
import classes from './SandwichBuilder.module.css';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import axios from '../../services/general-service';
import Spinner from '../../components/UI/Spinner/Spinner';
import WithErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler';
import * as sandwichBuilderActionTypes from '../../store/actions/index';

class SandwichBuilder extends Component {
  state = {
    purchasing: false
  };
  componentDidMount() {

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
    return sum > 0;
  }
  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };
  purchaseContinueHandler = () => {
    this.props.history.push('/checkout');
  };
  render() {
    const disabledInfo = {
      ...this.props.ings,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let orderSummaryElement = null;
    let sandwichElement = this.props.error ? (
      <p>Ingredients doesnt load</p>
    ) : (
      <Spinner />
    );

    if (this.props.ings) {
      sandwichElement = (
        <Auxiliary>
          <div className={classes.row}>
            <div className={classes.column}>
              <Sandwich
                className={classes.column}
                ingredients={this.props.ings}
              />
            </div>
            <div className={classes.column}>
              <BuildControls
                className={classes.column}
                ingredientAdded={this.props.onIngredientAdded}
                ingredientRemoved={this.props.onIngredientRemoved}
                disabled={disabledInfo}
                price={this.props.price}
                purchasable={this.updatePurchaseState(this.props.ings)}
                ordered={this.purchaseHandler}
              />
            </div>
          </div>
        </Auxiliary>
      );
      orderSummaryElement = (
        <OrderSummary
          price={this.props.price}
          ingredients={this.props.ings}
          purchaseCancelled={this.purchaseCancelHandler}
          purchaseContinued={this.purchaseContinueHandler}
        />
      );
    }
    if (this.state.loading) {
      orderSummaryElement = <Spinner />;
    }
    return (
      <Auxiliary>
        <GeneralModal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummaryElement}
        </GeneralModal>
        {sandwichElement}
      </Auxiliary>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ings: state.ingredients,
    price: state.totalPrice,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onIngredientAdded: (ingName) =>
      dispatch(sandwichBuilderActionTypes.addIngredient(ingName)),
    onIngredientRemoved: (ingName) =>
      dispatch(sandwichBuilderActionTypes.removeIngredient(ingName)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithErrorHandler(SandwichBuilder, axios));
