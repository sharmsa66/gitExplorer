import React from 'react';
import { render } from '@testing-library/react';

import { Gifs } from './gifs';

describe('Gifs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Gifs apiKey="" />);
    expect(baseElement).toBeTruthy();
  });
});
