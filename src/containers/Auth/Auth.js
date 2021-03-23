import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Spinner from '../../components/UI/Spinner/Spinner';
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from 'semantic-ui-react';
import imageLogo from '../../assests/images/sanwich-logo.PNG';
import * as actions from '../../store/actions/index';

export class Auth extends Component {
  state = {
    email: '',
    password: 'bestPassw0rd',
  };

  loginHandler = (event) => {
    event.preventDefault();
    this.props.onAuth(this.state.email, this.state.password);
  };
  registerHandler = (event) => {
    event.preventDefault();
    this.props.onRegister(this.state.email, this.state.password);
  };
  render() {
    const LoginForm = (
      <Grid
        textAlign="center"
        style={{ height: '100vh' }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="red" textAlign="center">
            <Image src={imageLogo} /> Log-in to your account
          </Header>
          {this.props.loading == true ? (
            <Spinner />
          ) : (
            <Form size="large">
              <Segment stacked>
                <Form.Input
                  fluid
                  name="email"
                  icon="user"
                  iconPosition="left"
                  placeholder="E-mail address"
                  value={this.state.email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                  required
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  name="password"
                  required
                  value={this.state.password}
                  onChange={(e) => this.setState({ password: e.target.value })}
                />

                <Button
                  color="red"
                  fluid
                  size="large"
                  onClick={this.loginHandler}
                  type="submit"
                >
                  Login
                </Button>
              </Segment>
            </Form>
          )}
          <Message>
            New to us? <a onClick={this.registerHandler}>Sign Up</a>
          </Message>
          {this.props.error ? (
            <Message color="red" size="small">
              {this.props.error.message}
            </Message>
          ) : null}
        </Grid.Column>
      </Grid>
    );
    if (this.props.state.isAuthenticated) {
      <Redirect to="/" />;
    } else {
      return <div>{LoginForm}</div>;
    }
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password) => dispatch(actions.auth(email, password)),
    onRegister: (email, password) =>
      dispatch(actions.register(email, password)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Auth);
