import React from 'react';
import classes from './GeneralModal.module.css';

const GeneralModal = (props) => {
  return <div className={classes.Modal}>{props.children}</div>;
};
export default GeneralModal;
