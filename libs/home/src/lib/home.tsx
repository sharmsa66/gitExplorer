import React, { useState } from 'react';

import classes from './home.module.css';

import { Collapsible, Loaders, ProgressBar, RangeSlider } from '@git-explorer/ui';
import { Step, StepDirection } from '@git-explorer/data';

const steps: [Step] = [
  {
    id: 1,
    name: 'Peronsal Information',
    description: 'Personal Information',
    url: '/shop/person',
  },
  {
    id: 2,
    name: 'Dependents',
    url: '/shop/dependent',
    description: 'Dependents',
  },
  {
    id: 3,
    name: 'Registration',
    url: '/shop/registeration',
    description: 'Registration',
  },
  { id: 4, name: 'Payment', url: '/shop/payment', description: 'Payment' },
  { id: 5, name: 'Order', url: '/shop/order', description: 'Order' },
  { id: 6, name: 'Welcome', url: '/shop/welcome', description: 'Welcome' },
  { id: 7, name: 'Get Lost', url: '/shop/welcome', description: 'Get Lost' },
];

/* eslint-disable-next-line */
export interface HomeProps {}

export function Home(props: HomeProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const stepNavigationHandler = (direction: StepDirection) => {
    if (direction === StepDirection.INC && currentStep < steps.length - 1 ) {
      setCurrentStep(currentStep + 1);
    } else if (direction === StepDirection.DEC && currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const activeStepHandler = (step: Step) => {
    console.log('step clicked', JSON.stringify(step));
  };
  const LLorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis molestiae fugit, doloremque sint non maiores suscipit esse possimus blanditiis ipsam sit tempore facere, facilis maxime excepturi quos veritatis, assumenda iste?";

  return (
    <div className={classes.container}>
      <RangeSlider />
      <Collapsible title={'Angular'} description={LLorem}/>
      <Collapsible title={'React'} description={LLorem}/>
      <Collapsible title={'Vue'} description={LLorem}/>
      <Loaders show={false} />

      <div className={classes.header}>
        <ProgressBar
          onStepActivated={activeStepHandler}
          steps={steps}
          stepIndex={currentStep}
        />
      </div>

      <div className="buttons">
        <button onClick={() => stepNavigationHandler(StepDirection.INC)}>
          +
        </button>
        <button onClick={() => stepNavigationHandler(StepDirection.DEC)}>
          -
        </button>
      </div>
    </div>
  );
}

export default Home;
