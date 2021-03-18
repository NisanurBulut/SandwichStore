import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import classes from './Orders.module.css';
import axios from '../../services/general-service';
import WithErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';
import { Grid, Pagination, Transition } from 'semantic-ui-react';

class Orders extends Component {
  state = {
    orders: [],
    loading: true,
    activePage: 1
  };
  componentWillMount() {
    console.log('ORders');
  }
  componentDidMount() {
    axios
      .get('orders')
      .then((response) => {
        console.log(response);
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
    if (this.state.loading) {
      return <Spinner />;
    } else {
     return (
     <Grid columns={4}>
     <Grid.Row>
     <Transition.Group className={classes.Orders}>
        {this.state.orders.map((order) => (
     <Grid.Column>
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
     </Grid>)
    }
  }
}
export default WithErrorHandler(Orders, axios);
