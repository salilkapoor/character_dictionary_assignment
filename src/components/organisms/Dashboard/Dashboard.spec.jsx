import React from 'react';
import { render } from '@testing-library/react';

import Dashboard from '.';

describe('TS-001: Dashboard test Suite', () => {
  it('TC-001: should render the dashboard component', () => {
    const { container } = render(<Dashboard />);
    expect(container).toBeDefined();
  });
});
