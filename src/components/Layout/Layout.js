import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
const Layout = (props) => {
  return (
    <Auxiliary>
      Toolbar, SideDrawer, BackDrop
      <main>{props.children}</main>
    </Auxiliary>
  );
};

export default Layout;
