import React from 'react';
import classes from './Button.module.css';

const Button = () => {
  return <Button className={[classes.Button, classes[props.btnType]]} onClick={props.clicked}>{props.children}</Button>;
};

export default Button;
