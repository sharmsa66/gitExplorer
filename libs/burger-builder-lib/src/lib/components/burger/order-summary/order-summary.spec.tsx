import React from 'react';
import { render } from '@testing-library/react';

import OrderSummary from './order-summary';

describe('OrderSummary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OrderSummary />);
    expect(baseElement).toBeTruthy();
  });
});
