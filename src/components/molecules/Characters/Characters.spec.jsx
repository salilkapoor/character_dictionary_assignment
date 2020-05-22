import React from 'react';
import { render } from '@testing-library/react';

import Characters from '.';

describe('TS-001: Characters test Suite', () => {
  it('TC-001: should render the Characters component', () => {
    const { container } = render(
      <Characters />
    );
    expect(container).toBeDefined();
  });
});
