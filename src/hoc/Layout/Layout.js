import React, { Component } from 'react';
import { connect } from 'react-redux';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css';
import { Container } from 'semantic-ui-react';

class Layout extends Component {
  render() {
    return (
      <Auxiliary>
        <Toolbar isAuth={this.props.isAuthenticated} />
        <Container className={classes.Content}>{this.props.children}</Container>
      </Auxiliary>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state.auth.token);
  return {
    isAuthenticated: state.auth.token === null ? false : true,
  };
};
export default connect(mapStateToProps, null)(Layout);
