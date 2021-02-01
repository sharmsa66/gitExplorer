import React, { useState, useRef } from 'react';

import classes from './collapsible.module.scss';

/* eslint-disable-next-line */
export interface CollapsibleProps {
  title:string,
  description:string
}

export function Collapsible(props: CollapsibleProps) {
  const [collapse, setCollapse] = useState(false);
  const elContent = useRef(null);
  const elButton = useRef(null);

  const collapsibleHandler = () => {
    setCollapse(!collapse);
    elButton.current.classList.toggle('active');
    if (elContent.current.style['maxHeight']) {
      elContent.current.style.maxHeight = null;
    } else {
      elContent.current.style.maxHeight = elContent.current.scrollHeight + 'px';
    }
  };

  return (
    <div>
      <button
        className={classes.collapsible}
        onClick={collapsibleHandler}
        ref={elButton}
      >
        {props.title}
      </button>
      <div className={classes.content} ref={elContent}>
        <p>
         {props.description}
        </p>
      </div>
    </div>
  );
}

export default Collapsible;
