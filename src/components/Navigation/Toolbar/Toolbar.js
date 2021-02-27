import React from 'react'
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Toolbar.module.css';

const Toolbar=()=>{
    return (
        <header className={classes.Toolbar}>
           <div>Menü</div>
           <Logo />
           <nav>
               <NavigationItems />
           </nav>
        </header>
    )
}

export default Toolbar
