import React from 'react';
import { render } from '@testing-library/react';

import Checkbox from '.';

describe('TS-001: Checkbox test Suite', () => {
  it('TC-001: should render the Checkbox component', () => {
    const { container } = render(
      <Checkbox name="gender" value="male" />
    );
    expect(container).toBeDefined();
  });
});
