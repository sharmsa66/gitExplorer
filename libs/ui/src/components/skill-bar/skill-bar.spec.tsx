import React from 'react';
import { render } from '@testing-library/react';

import SkillBar from './skill-bar';

describe('SkillBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SkillBar />);
    expect(baseElement).toBeTruthy();
  });
});
