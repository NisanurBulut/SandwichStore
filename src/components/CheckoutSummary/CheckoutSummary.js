import React from 'react';
import Sandwich from '../Sandwich/Sandwich';
import CustomButton from '../UI/Button/CustomButton';
import classes from './CheckoutSummary.module.css';

const CheckoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <div style={{ width: '100%', margin:"auto" }}>
        <Sandwich ingredients={props.ingredients} />
      </div>
      <CustomButton btnType="Danger" clicked={props.checkoutCancelled}>Cancel</CustomButton>
      <CustomButton btnType="Success" clicked={props.checkoutContinued}>Continue</CustomButton>
    </div>
  );
};

export default CheckoutSummary;
