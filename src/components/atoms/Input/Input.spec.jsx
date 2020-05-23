import React from 'react';
import { render } from '@testing-library/react';

import Input from '.';

describe('TS-001: Input test Suite', () => {
  it('TC-001: should render the Input component', () => {
    const { container } = render(
      <Input className="Input-element" />
    );
    expect(container).toBeDefined();

    const element = container.querySelector('input');

    expect(element).toBeDefined();
    expect(element.className).toBe('Input-element');
  });
});
