import React from 'react';
import { render } from '@testing-library/react';

import CounterControl from './counter-control';

describe('CounterControl', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CounterControl />);
    expect(baseElement).toBeTruthy();
  });
});
