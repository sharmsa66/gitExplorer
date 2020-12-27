import React, { FC } from 'react';

import classes from './button.module.scss';

/* eslint-disable-next-line */
export interface ButtonProps {
  clicked?: (event?) => void;
  btnType: string;
}

export const Button: FC<ButtonProps> = ({ clicked, btnType, children }) => {
  return (
    <button
      className={[classes.button, classes[btnType]].join(' ')}
      onClick={clicked}
    >
      {children}
    </button>
  );
};

export default Button;
