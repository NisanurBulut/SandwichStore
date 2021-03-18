import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustomButton from '../UI/Button/CustomButton';
import classes from './ContactData.module.css';
import { Form, Grid } from 'semantic-ui-react';
import axios from '../../services/general-service';
import Spinner from '../UI/Spinner/Spinner';

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
    console.log(event.target.elements.name.value);
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ings,
      price: this.props.price,
      customer: {
        name: event.target.elements.name.value,
        address: event.target.elements.address.value,
      },
      email: event.target.elements.email.value,
      deliveryMethod: 'fastest',
    };
    axios
      .post('orders', order)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.push('/');
      })
      .catch((err) => {
        this.setState({ loading: false });
        console.log(err);
      });
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
            />
            <Form.Input
              size="small"
              type="email"
              label="Email"
              placeholder="Email"
              name="email"
            />
            <Form.Input
              size="small"
              type="text"
              label="Address"
              placeholder="Address"
              name="address"
            />
          </Form.Group>
          <CustomButton btnType="Success">
            Send Order
          </CustomButton>
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
export default connect(mapStateToProps)(ContactData);
