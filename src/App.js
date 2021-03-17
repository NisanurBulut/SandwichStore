import './App.css';
import Layout from './hoc/Layout/Layout';
import SandwichBuilder from './containers/SandwichBuilder/SandwichBuilder';
import React, { Component } from 'react';
import Checkout from './containers/Checkout/Checkout';
import { Route, Switch } from "react-router-dom";
import Orders from './containers/Orders/Orders';
class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
        <Route path="/checkout" component={Checkout}/>
        <Route path="/orders" exact component={Orders}></Route>
        <Route path="/" exact component={SandwichBuilder}></Route>
        </Switch>
      </Layout>
    );
  }
}

export default App;
