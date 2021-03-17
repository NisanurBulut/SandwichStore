import React, { Component } from 'react'
import CustomButton from '../UI/Button/CustomButton';
import classes from './ContactData.module.css';

class ContactData extends Component {
   state = {
       name:'',
       email:'',
       address:''
   }

    render() {
        return (
            <div className={classes.ContactData}>
                <h1>enter your contact</h1>
                <form>
                    <input type="text" name="name" placeholder="name" />
                    <input type="email" name="email" placeholder="email" />
                    <input type="text" name="address" placeholder="address" />
                    <CustomButton btnType='Success'>Order</CustomButton>
                </form>
            </div>
        )
    }
}

export default ContactData;