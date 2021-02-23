import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const BuildControls = (props) => {
  const controls = [
    { label: 'oil', type: 'oil' },
    { label: 'pepper', type: 'pepper' },
  ];
  return (
    <div className="BuildControls">
      {controls.map((ctrl) => {
        return <BuildControl key={ctrl.label} label={ctrl.label} />;
      })}
    </div>
  );
};

export default BuildControls;
