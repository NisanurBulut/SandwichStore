import React from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css';
import { Container } from 'semantic-ui-react';
const Layout = (props) => {
  return (
    <Auxiliary>
     <Toolbar />
      <Container className={classes.Content}>{props.children}</Container>
    </Auxiliary>
  );
};

export default Layout;
