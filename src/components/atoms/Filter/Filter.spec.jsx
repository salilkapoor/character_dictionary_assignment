import React from 'react';
import { render } from '@testing-library/react';

import Filter from '.';

describe('TS-001: Filter test Suite', () => {
  it('TC-001: should render the Filter component', () => {
    const { container } = render(
      <Filter type="gender" filter={['Male', 'Female']} />
    );
    expect(container).toBeDefined();
  });
});
