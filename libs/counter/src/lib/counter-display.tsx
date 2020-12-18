import React from 'react';
import { CounterControl} from './counter-control/counter-control';
import {CounterOutput} from './counter-output/counter-output';
import { useSelector, useStore } from 'react-redux';

import { increment, decrement,addition, substraction, selectCounter} from  '@git-explorer/data';

export const CounterDisplay =() => {


 const counter = useSelector(selectCounter);
    const store = useStore();

   const counterChangedHandler =(action:string, value?: number) => {
     switch (action) {
       case 'INC':
         store.dispatch(increment());
         break;
         case 'DEC':
          store.dispatch(decrement());
           break;
        case 'ADD':
         store.dispatch(addition(value));
         break;
        case 'SUB':
        store.dispatch(substraction(value));
     }
   }


  return (

      <>
          {<CounterOutput value= {counter} />}
          <CounterControl label="Increment" clicked={() => counterChangedHandler( 'INC' )} />
          <CounterControl label="Decrement" clicked={() => counterChangedHandler( 'DEC' )}  />
          <CounterControl label="Add 5" clicked={() =>     counterChangedHandler( 'ADD', 5 )}  />
          <CounterControl label="Subtract 5" clicked={() => counterChangedHandler( 'SUB', 5 )}  />
      </>

  );
}

export default CounterDisplay;
