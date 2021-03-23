import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustomButton from '../UI/Button/CustomButton';
import classes from './ContactData.module.css';
import { Form, Grid } from 'semantic-ui-react';
import axios from '../../services/general-service';
import Spinner from '../UI/Spinner/Spinner';
import WithErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler';
import * as actionTypes from '../../store/actions/index';
import { Redirect } from 'react-router';

class ContactData extends Component {
  state = {
    address: {
      name: '',
      email: '',
      address: '',
    },
  };
  orderHandler = (event) => {
    event.preventDefault();

    const order = {
      ingredients: this.props.ings,
      price: this.props.price,
      customer: {
        name: event.target.elements.name.value,
        address: event.target.elements.address.value,
        email: event.target.elements.email.value,
      },
      deliveryMethod: 'fastest',
    };

    this.props.onOrderSandwich(order, this.props.token);
  };
  render() {
    let formElement = (
      <Form onSubmit={this.orderHandler} className={classes.form}>
        <Grid>
          <Form.Group inline widths="equal">
            <Form.Input
              size="small"
              fluid
              type="text"
              label="Name"
              placeholder="Name"
              name="name"
              required
            />
            <Form.Input
              size="small"
              type="email"
              label="Email"
              placeholder="Email"
              name="email"
              required
            />
            <Form.Input
              size="small"
              type="text"
              label="Address"
              placeholder="Address"
              name="address"
              required
            />
          </Form.Group>
          <CustomButton btnType="Success">Send Order</CustomButton>
        </Grid>
      </Form>
    );

    if (this.props.loading) {
      formElement = <Spinner />;
    }
    if (this.props.purchased) {
      this.props.onSetOrderSandwinchFinish();
      formElement = <Redirect to="/" />;
    }
    return (
      <div className={classes.ContactData}>
        <h1>
          <i>Contact Information</i>
        </h1>
        {formElement}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ings: state.sandwichBuilder.ingredients,
    price: state.sandwichBuilder.totalPrice,
    loading: state.order.loading,
    purchased: state.order.purchased,
    token: state.auth.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onOrderSandwich: (orderData, token) =>
      dispatch(actionTypes.purchaseSandwich(orderData, token)),
    onSetOrderSandwinchFinish: () => {
      dispatch(actionTypes.setOrderFinish());
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithErrorHandler(ContactData, axios));
