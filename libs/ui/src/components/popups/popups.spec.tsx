import React from 'react';
import { render } from '@testing-library/react';

import Popups from './popups';

describe('Popups', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Popups />);
    expect(baseElement).toBeTruthy();
  });
});
