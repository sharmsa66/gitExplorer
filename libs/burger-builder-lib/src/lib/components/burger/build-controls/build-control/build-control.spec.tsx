import React from 'react';
import { render } from '@testing-library/react';

import BuildControl from './build-control';

describe('BuildControl', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BuildControl />);
    expect(baseElement).toBeTruthy();
  });
});
