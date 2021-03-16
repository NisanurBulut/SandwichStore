import React from 'react';
import Sandwich from '../Sandwich/Sandwich';
import CustomButton from '../UI/Button/CustomButton';
import classes from './CheckoutSummary.module.css';

const CheckoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <div style={{ width: '100p%', margin:"auto" }}>
        <Sandwich ingredients={props.ingredients} />
      </div>
      <CustomButton btnType="Danger">Cancel</CustomButton>
      <CustomButton btnType="Success">Continue</CustomButton>
    </div>
  );
};

export default CheckoutSummary;
