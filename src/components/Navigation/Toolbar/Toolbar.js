import React from 'react'
import Logo from '../../Logo/Logo';
import classes from './Toolbar.module.css';

const Toolbar=()=>{
    return (
        <header className={classes.Toolbar}>
           <div>Menü</div>
           <Logo />
           <nav>
               <ul>
                   <li>
                       Links
                   </li>
               </ul>
           </nav>
        </header>
    )
}

export default Toolbar
