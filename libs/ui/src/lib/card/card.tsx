import React, { FC } from 'react';

import classes from './card.module.scss';

/* eslint-disable-next-line */
export interface CardProps {
  title: string;
  paragraph: string;
}

export const Card: FC<CardProps> = ({ title, paragraph, children }) => (
  <aside className={classes.card}>
    <h2>{title}</h2>
    <p>{paragraph}</p>
    <div>{children}</div>
  </aside>
);
export default Card;
