import React, { Component } from 'react';
import { connect } from 'react-redux';
import Order from '../../components/Order/Order';
import classes from './Orders.module.css';
import axios from '../../services/general-service';
import WithErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';
import { Grid, Transition } from 'semantic-ui-react';
import * as actionTypes from '../../store/actions/index';

class Orders extends Component {
  componentDidMount() {
    this.props.onFetchOrders(this.props.token);
  }
  render() {
    if (this.props.loading) {
      return <Spinner />;
    } else {
      return (
        <Grid columns={3}>
          <Grid.Row className={classes.Orders}>
            <Transition.Group>
              {this.props.orders.map((order) => (
                <Grid.Column key={order.id}>
                  <Order
                    key={order.id}
                    ingredients={order.ingredients}
                    price={order.price}
                    customer={order.customer}
                  />
                </Grid.Column>
              ))}
            </Transition.Group>
          </Grid.Row>
        </Grid>
      );
    }
  }
}
const mapStateToProps = (state) => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
    token: state.auth.token,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onFetchOrders: (token) => dispatch(actionTypes.fetchOrders(token)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithErrorHandler(Orders, axios));
