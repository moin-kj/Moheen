import React from 'react';
import classNames from 'classnames';

function StepperItem({ index, label, isActive, onClick }) {
  return (
    <button
      className={classNames({
        ['CompletedStep']: isActive,
        ['StepperStepActionable']: isActive,
      })}
      onClick={onClick}
      disabled={!isActive}
    >
      {label}
    </button>
  );
}

export default StepperItem;
