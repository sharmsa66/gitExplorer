import React from 'react';
import { render } from '@testing-library/react';

import CounterOutput from './counter-output';

describe('CounterOutput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CounterOutput />);
    expect(baseElement).toBeTruthy();
  });
});
