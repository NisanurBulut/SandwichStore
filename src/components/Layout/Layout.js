import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css';

const Layout = (props) => {
  return (
    <Auxiliary>
     <Toolbar />
      <main className={classes.Content}>{props.children}</main>
    </Auxiliary>
  );
};

export default Layout;
