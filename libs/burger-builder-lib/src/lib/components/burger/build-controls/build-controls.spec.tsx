import React from 'react';
import { render } from '@testing-library/react';

import BuildControls from './build-controls';

describe('BuildControls', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BuildControls />);
    expect(baseElement).toBeTruthy();
  });
});
