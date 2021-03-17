import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import classes from './Orders.module.css';

class Orders extends Component {
  render() {
    return (
      <div className={classes.Orders}>
           <Order />
           <Order />
           <Order />
      </div>
    );
  }
}
export default Orders;
