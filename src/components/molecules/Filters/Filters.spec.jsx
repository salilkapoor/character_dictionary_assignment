import React from 'react';
import { render } from '@testing-library/react';

import Filters from '.';

describe('TS-001: Filters test Suite', () => {
  it('TC-001: should render the Filters component', () => {
    const { container } = render(
      <Filters />
    );
    expect(container).toBeDefined();
  });
});
