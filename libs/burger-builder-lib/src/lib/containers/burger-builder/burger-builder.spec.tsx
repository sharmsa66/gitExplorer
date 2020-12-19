import React from 'react';
import { render } from '@testing-library/react';

import BurgerBuilder from './burger-builder';

describe('BurgerBuilder', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BurgerBuilder />);
    expect(baseElement).toBeTruthy();
  });
});
