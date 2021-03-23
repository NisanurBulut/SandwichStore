import React from 'react'
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Toolbar.module.css';

const Toolbar=(props)=>{
    return (
        <header className={classes.Toolbar}>
           <Logo />
           <nav>
               <NavigationItems isAuthenticated={props.isAuth} />
           </nav>
        </header>
    )
}

export default Toolbar
