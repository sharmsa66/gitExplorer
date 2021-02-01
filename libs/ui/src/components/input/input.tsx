import React, { FC } from 'react';

import classes from './input.module.scss';

export interface InputProps {
  label?: string;
  inputtype: string;
  value: string;
  name: string;
  handleInputChange: (event) => void;
  elementConfig: any;
}

export const Input: FC<InputProps> = ({
  label,
  inputtype,
  value,
  name,
  elementConfig,
  handleInputChange,
  ...props
}) => {
  let inputElement;

  switch (inputtype) {
    case 'input':
      inputElement = (
        <input
          className={classes.InputElement}
          name={name}
          value={value}
          {...elementConfig}
          onChange={(event) => handleInputChange(event)}
        />
      );
      break;
    case 'select':
      inputElement = (
        <select
          value={value}
          onChange={(event) => handleInputChange(event)}
          className={classes.InputElement}
        >
          <option key={0} value={-1}>
            Select...
          </option>
          {elementConfig.options.map((item) => (
            <option key={item.value} value={item.value}>
              {item.displayName}
            </option>
          ))}
        </select>
      );

      break;
    case 'checkbox':
      inputElement = (
        <>
          <label className={classes.Checkbox}>{label}</label>
          <input
            type="checkbox"
            name={name}
            value={value}
            {...elementConfig}
            onChange={(event) => handleInputChange(event)}
          />
        </>
      );
      break;
    default:
      inputElement = (
        <input
          name={name}
          {...elementConfig}
          onChange={(event) => handleInputChange(event)}
        />
      );
      break;
  }
  return <div className={classes.Input}>{inputElement}</div>;
};

export default Input;
