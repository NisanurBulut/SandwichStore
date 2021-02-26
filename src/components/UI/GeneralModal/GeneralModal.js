import React from 'react';
import classes from './GeneralModal.module.css';

const GeneralModal = (props) => {
  return (
    <div
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0',
      }}
      className={classes.Modal}
    >
      {props.children}
    </div>
  );
};
export default GeneralModal;
