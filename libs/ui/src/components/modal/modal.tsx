import React, { FC } from 'react';

import classes from './modal.module.scss';

/* eslint-disable-next-line */
type ModalProps = {
  header: string;
};

const Modal: FC<ModalProps> = ({ header, children }) => {
  return (
    <div id="myModal" className={classes.modal}>
      <h2>{header}</h2>
      <div className={classes['modal-content']}>
        <span className={classes.close}>&times;</span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
