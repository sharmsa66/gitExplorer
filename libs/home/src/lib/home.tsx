import React from 'react';

import classes from './home.module.css';

import { ProgressBar } from '@git-explorer/ui';

const steps = [
  { id: 1, name: 'Peronsal Information', url: '/shop/person' },
  { id: 2, name: 'Dependents', url: '/shop/dependent' },
  { id: 3, name: 'Registration', url: '/shop/registeration' },
  { id: 4, name: 'Payment', url: '/shop/payment' },
  { id: 5, name: 'Order', url: '/shop/order' },
  { id: 6, name: 'Welcome', url: '/shop/welcome' },
];

/* eslint-disable-next-line */
export interface HomeProps {}

export function Home(props: HomeProps) {
  const handleStep = (val) => {
    console.log(val);
  };

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <ProgressBar
          onStepActivated={handleStep}
          steps={steps}
          currentStep={steps[0]}
        />
      </div>

      <p>Welcome to React Experimental App</p>
      <p>Please see the side nav for avilable features</p>
    </div>
  );
}

export default Home;
