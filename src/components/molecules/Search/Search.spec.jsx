import React from 'react';
import { render } from '@testing-library/react';

import Search from '.';

describe('TS-001: Search test Suite', () => {
  it('TC-001: should render the Search component', () => {
    const { container } = render(<Search />);
    expect(container).toBeDefined();
  });
});
