import React from 'react';
import classes from './CustomButton.module.css';

const CustomButton = (props) => {
  return (
    <button
      className={[classes.Button, classes[props.btnType]].join(' ')}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  );
};

export default CustomButton;
