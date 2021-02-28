import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const BuildControls = (props) => {
  const controls = [
    { label: 'bacon', type: 'bacon' },
    { label: 'salad', type: 'salad' },
    { label: 'cheese', type: 'cheese' },
    { label: 'meat', type: 'meat' },
  ];
  return (
    <div className={classes.BuildControls}>
      <p className={classes.PriceLabel}>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
      {controls.map((ctrl) => {
        return (
          <BuildControl
            key={ctrl.label}
            label={ctrl.label}
            added={() => props.ingredientAdded(ctrl.type)}
            removed={()=>props.ingredientRemoved(ctrl.type)}
            disabled={props.disabled[ctrl.type]}
          />
        );
      })}
      <button
      onClick={props.ordered}
      disabled={!props.purchasable}
      className={classes.OrderButton}>order now</button>
    </div>
  );
};

export default BuildControls;
