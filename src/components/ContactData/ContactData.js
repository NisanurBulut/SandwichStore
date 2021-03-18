import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustomButton from '../UI/Button/CustomButton';
import classes from './ContactData.module.css';
import { Form, Grid } from 'semantic-ui-react';
import axios from '../../services/general-service';
import Spinner from '../UI/Spinner/Spinner';
import WithErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler';
import * as actionTypes from '../../store/actions/index';

class ContactData extends Component {
  state = {
    address: {
      name: '',
      email: '',
      address: '',
    },
    loading: false,
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

    this.props.onOrderSandwich(order);
  };
  render() {
    let formElement = (
      <Form onSubmit={this.orderHandler}>
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
    if (this.state.loading) {
      formElement = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <br />
        <h1>
          <center>
            <i>Contact Information</i>
          </center>
        </h1>
        {formElement}
      </div>
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
    onOrderSandwich: (orderData) =>
      dispatch(actionTypes.purchaseSandwichStart(orderData)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithErrorHandler(ContactData, axios));
