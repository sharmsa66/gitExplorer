import React from 'react';
import { render } from '@testing-library/react';

import ContactData from './contact-data';

describe('ContactData', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ContactData />);
    expect(baseElement).toBeTruthy();
  });
});
