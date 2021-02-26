import React from 'react'
import classes from './Toolbar.module.css';

const Toolbar=()=>{
    return (
        <header className={classes.Toolbar}>
           <div>Menü</div>
           <div>Logo</div>
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
