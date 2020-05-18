import React from 'react';
import { render } from '@testing-library/react';

import Counter from '../pages/counter';

describe('Counter test suite', () => {
  it('should render the counter with 0 as the initial value', () => {
    const { getByText } = render(<Counter />);
    const initialCount = getByText('1');

    expect(initialCount).toBeInTheDocument();
  });
});
