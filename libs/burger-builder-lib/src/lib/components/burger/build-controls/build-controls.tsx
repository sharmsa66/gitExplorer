import React, { FC } from 'react';

import classes from './build-controls.module.scss';
import BuildControl from './build-control/build-control';


/* eslint-disable-next-line */
export interface BuildControlsProps {
  ingredientAdded: (type) => void;
  ingredientRemoved: (type) => void;
  disabledItems: unknown;
  ordered: () => void;
  isAuth: boolean;

  price: number;
}

export const BuildControls: FC<BuildControlsProps> = ({
  ingredientAdded,
  ingredientRemoved,
  disabledItems,
  price,
  ordered,
  isAuth
}) => {
  const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
  ];

  return (
    <div className={classes['build-controls']}>

      <p>Current Price: <strong>{price.toFixed(2)} </strong></p>
      {controls.map((ctrl) => (
        <BuildControl
          label={ctrl.label}
          key={ctrl.label}
          added={() => ingredientAdded(ctrl.type)}
          removed={() => ingredientRemoved(ctrl.type)}
          disabled={disabledItems[ctrl.type]}
        />
      ))}
      <button onClick={() => ordered()} className={classes.OrderButton} disabled={!(price > 4)}>
      {isAuth? 'Order Now': 'Sing Up  to Order'} </button>
    </div>
  );
};

export default BuildControls;
