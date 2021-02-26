import React from 'react';
import classes from './GeneralModal.module.css';
import Auxiliary  from '../../../hoc/Auxiliary';
import Backdrop from '../BackDrop/Backdrop';

const GeneralModal = (props) => {
  return (
    <Auxiliary>
      <Backdrop show={props.show} clicked={props.modalClosed}/>
    <div
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0',
      }}
      className={classes.Modal}
    >
      {props.children}
    </div>
    </Auxiliary>
  );
};
export default GeneralModal;
