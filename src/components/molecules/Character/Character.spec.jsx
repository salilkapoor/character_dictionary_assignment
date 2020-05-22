import React from 'react';
import { render } from '@testing-library/react';

import Character from '.';

describe('TS-001: Character test Suite', () => {
  it('TC-001: should render the Character component', () => {
    const { container } = render(<Character />);
    expect(container).toBeDefined();
  });
});
