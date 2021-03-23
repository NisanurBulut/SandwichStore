import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from '../NavigationItem/NavigationItem';

const NavigationItems = (props) => {
  return (
    <ul className={classes.NavigationItems}>
      {props.isAuthenticated === false ? (
        <NavigationItem link="/auth">Authenticate</NavigationItem>
      ) : (
        <>
          <NavigationItem link="/" exact> Sandwich</NavigationItem>
          <NavigationItem link="/orders">Orders</NavigationItem>
          <NavigationItem link="/logout">Logout</NavigationItem>
        </>
      )}
    </ul>
  );
};

export default NavigationItems;
