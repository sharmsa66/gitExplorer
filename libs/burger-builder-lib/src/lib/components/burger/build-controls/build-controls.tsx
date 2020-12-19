import React,{FC} from 'react';

import classes from  './build-controls.module.scss';
import BuildControl from './build-control/build-control';
import { createBrotliCompress } from 'zlib';

/* eslint-disable-next-line */
export interface BuildControlsProps {
  ingredientAdded: (type) => void;
  ingredientRemoved: (type) => void;
}

export const   BuildControls:FC<BuildControlsProps> = ({ingredientAdded, ingredientRemoved}) => {
  const controls = [
    {label: 'Salad', type:'salad'},
    {label: 'Bacon', type:'bacon'},
    {label: 'Cheese', type:'cheese'},
    {label: 'Meat', type:'meat'}
  ];

  return (
    <div className={classes['build-controls']}>
     {controls.map(ctrl => <BuildControl
     label ={ctrl.label} 
      key={ctrl.label}
      added ={() =>  ingredientAdded(ctrl.type)  }
      removed = {() => ingredientRemoved(ctrl.type)}
      />) }
    </div>
  );
}

export default BuildControls;
