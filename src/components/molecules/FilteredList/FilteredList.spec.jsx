import React from 'react';
import { render } from '@testing-library/react';

import FilteredList from '.';

describe('TS-001: FilteredList test Suite', () => {
  it('TC-001: should render the FilteredList component', () => {
    const { container } = render(<FilteredList />);
    expect(container).toBeDefined();
  });
});
