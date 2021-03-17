import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import classes from './Orders.module.css';
import axios from '../../services/general-service';
import WithErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler';

class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  };
  componentWillMount() {
    console.log('ORders');
  }
  componentDidMount() {
    axios
      .get('orders')
      .then((response) => {
        const fetchedOrders = [];
        for (let key in response.data) {
          fetchedOrders.push({ id: key, ...response.data[key] });
        }
        this.setState({ loading: false, orders: fetchedOrders });
      })
      .catch((err) => {
        this.setState({ loading: false });
      });
  }
  render() {
    return (
      <div className={classes.Orders}>
        {this.state.orders.map((order) => (
          <Order
            key={order.id}
            ingredients={order.ingredients}
            price={order.price}
          />
        ))}
      </div>
    );
  }
}
export default WithErrorHandler(Orders, axios);
