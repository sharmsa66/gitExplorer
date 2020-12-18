import React from 'react';
import { render } from '@testing-library/react';

import BurgerBuilderLib from './burger-builder-lib';

describe('BurgerBuilderLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BurgerBuilderLib />);
    expect(baseElement).toBeTruthy();
  });
});
