import React, { FC } from 'react';
import Backdrop from '../backdrop/backdrop';

import classes from './modal.module.scss';

/* eslint-disable-next-line */
type ModalProps = {
  header: string;
  show: boolean;
  modalClicked: () => void;
};

export const Modal: FC<ModalProps> = ({ header, children, show , modalClicked}) => {
  return (
    <>
      <Backdrop show={show} clicked={modalClicked}/>
        <div
          className={classes.modal}
          style={{ transform: show ? 'translateY(0)' : 'translateY(-100vh)',
                  opacity: show? '1' :'0' }}
        >
          {children}
        </div>
    </>
  );
};

export default Modal;
