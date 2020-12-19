import React from 'react';
import { render } from '@testing-library/react';

import BurgerIngredient from './burger-ingredient';

describe('BurgerIngredient', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BurgerIngredient />);
    expect(baseElement).toBeTruthy();
  });
});
