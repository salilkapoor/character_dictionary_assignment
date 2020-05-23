import React from 'react';
import { render } from '@testing-library/react';

import Sort from '.';

describe('TS-001: Sort test Suite', () => {
  it('TC-001: should render the Sort component', () => {
    const { container } = render(<Sort />);
    expect(container).toBeDefined();
  });
});
