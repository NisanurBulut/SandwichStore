import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const BuildControls = (props) => {
  const controls = [
    { label: 'bacon', type: 'bacon' },
    { label: 'salad', type: 'salad' },
  ];
  return (
    <div className={classes.BuildControls}>
      {controls.map((ctrl) => {
        return (
          <BuildControl
            key={ctrl.label}
            label={ctrl.label}
            added={() => props.ingredientAdded(ctrl.type)}
          />
        );
      })}
    </div>
  );
};

export default BuildControls;
