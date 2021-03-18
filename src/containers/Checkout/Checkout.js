import React, { Component } from 'react';
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary';
import ContactData from '../../components/ContactData/ContactData';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Checkout extends Component {
  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };
  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  };
  render() {
    let summaryElement = <Redirect to="/" />
    if(this.props.ings){
      summaryElement =(<><CheckoutSummary
        checkoutCancelled={this.checkoutCancelledHandler}
        checkoutContinued={this.checkoutContinuedHandler}
        ingredients={this.props.ings}
      />
      <Route
      path={this.props.match.path + '/contact-data'}
      component={ContactData}
    /></>)
    }
    return (
      <div>
        {summaryElement}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ings: state.ingredients,
  };
};
export default connect(mapStateToProps)(Checkout);
