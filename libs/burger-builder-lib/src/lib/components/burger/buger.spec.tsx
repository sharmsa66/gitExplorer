import React from 'react';
import { render } from '@testing-library/react';

import Buger from './buger';

describe('Buger', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Buger />);
    expect(baseElement).toBeTruthy();
  });
});
