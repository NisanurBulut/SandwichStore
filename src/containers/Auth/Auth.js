import React, { Component } from 'react';
import { connect } from 'react-redux';
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
  loginHandler = (event) => {
    event.preventDefault();
    const loginData = {
      email: event.target.elements.email.value,
      password: event.target.elements.password.value,
    };
   this.props.onAuth(loginData.email, loginData.password);
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
          <Form size="large" onSubmit={this.loginHandler}>
            <Segment stacked>
              <Form.Input
                fluid
                name="email"
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
                required
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                name="password"
                value="bestPassw0rd"
                required
              />

              <Button color="red" fluid size="large">
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us? <a href="#">Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
    );
    return <div>{LoginForm}</div>;
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password) => dispatch(actions.auth(email, password)),
  };
};
export default connect(null, mapDispatchToProps)(Auth);
