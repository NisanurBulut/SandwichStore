import React, { Component } from 'react'
import CustomButton from '../UI/Button/CustomButton';
import classes from './ContactData.module.css';
import { Form, Input, Grid } from 'semantic-ui-react';

class ContactData extends Component {
   state = {
       name:'',
       email:'',
       address:''
   }
   orderHandler =()=>{

   }
    render() {
        return (
            <div>
                <br/>
               <h1><center><i>Contact Information</i></center></h1>
                <Form>
                    <Grid>
                    <Form.Group inline widths="equal">
                    <Form.Input size="small" fluid type="text" label="Name" placeholder="Name" name="name" />
                    <Form.Input size="small" type="email" label="Email" placeholder="Email" name="email" />
                    <Form.Input size="small" type="text" label="Address" placeholder="Address" name="address" />
                   </Form.Group>
                    </Grid>
                    <CustomButton btnType='Success' clicked={this.orderHandler}>Order</CustomButton>
                </Form>
            </div>
        )
    }
}

export default ContactData;