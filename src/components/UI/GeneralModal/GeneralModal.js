import React, { Component } from 'react';
import classes from './GeneralModal.module.css';
import Auxiliary from '../../../hoc/Auxiliary';
import Backdrop from '../BackDrop/Backdrop';

class GeneralModal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }
  componentWillUpdate() {
    console.log('Modal is updating');
  }
  render() {
    return (
      <Auxiliary>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0',
          }}
          className={classes.Modal}
        >
          {this.props.children}
        </div>
      </Auxiliary>
    );
  }
}
export default GeneralModal;
