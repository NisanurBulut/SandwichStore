import React from 'react'
import logo from '../../assests/images/logo.png';
import classes from './Logo.module.css';

const Logo=(props)=>{
    return (
        <div className={classes.Logo}>
            <p>My Sandwich Builder</p>
            <img src={logo} alt="MySandwich"/>
        </div>
    )
}

export default Logo
