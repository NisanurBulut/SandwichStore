import React, { Component } from 'react'
import CustomButton from '../UI/Button/CustomButton';
import classes from './ContactData.module.css';
import { Form, Grid } from 'semantic-ui-react';
import axios from '../../services/general-service';
class ContactData extends Component {
   state = {
       address:{
        name:'',
        email:'',
        address:''
       },
       loading:false
   }
   orderHandler =(event)=>{
       event.preventDefault();
           this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Nisanur Bulut',
        address: 'Eskişehir',
      },
      email: 'nisanur@gmail.com',
      deliveryMethod: 'fastest',
    };
    axios
      .post('orders', order)
      .then((response) => {
        this.setState({ loading: false});
      })
      .catch((err) => {
        this.setState({ loading: false});
        console.log(err);
      });
   }
    render() {
        return (
            <div className={classes.ContactData}>
                <br/>
               <h1><center><i>Contact Information</i></center></h1>
                <Form>
                    <Grid>
                    <Form.Group inline widths="equal">
                    <Form.Input size="small" fluid type="text" label="Name" placeholder="Name" name="name" />
                    <Form.Input size="small" type="email" label="Email" placeholder="Email" name="email" />
                    <Form.Input size="small" type="text" label="Address" placeholder="Address" name="address" />
                   </Form.Group>
                    <CustomButton  btnType='Success' clicked={this.orderHandler}>Send Order</CustomButton>
                    </Grid>
                </Form>
            </div>
        )
    }
}

export default ContactData;