import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Layout from './hoc/Layout/Layout';
import SandwichBuilder from './containers/SandwichBuilder/SandwichBuilder';
import Orders from './containers/Orders/Orders';
import Checkout from './containers/Checkout/Checkout';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout';
import * as actions from './store/actions/index';

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoLogin();
  }
  render() {
    let routes = (
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/" exact component={SandwichBuilder} />
        <Redirect to="/" />
      </Switch>
    );
    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
          <Route path="/logout" component={Logout} />
          <Route path="/" exact component={SandwichBuilder} />
          <Redirect to="/" />
        </Switch>
      );
    }
    return <Layout>{routes}</Layout>;
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoLogin: () => dispatch(actions.authCheckState()),
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
