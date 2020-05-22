import React from 'react';
import { render } from '@testing-library/react';

import Heading from '.';

describe('TS-001: Heading test Suite', () => {
  it('TC-001: should render the Heading component', () => {
    const { container } = render(
      <Heading type="h1" className="heading-element">
        Title
      </Heading>
    );
    expect(container).toBeDefined();

    const element = container.querySelector('h1');

    expect(element).toBeDefined();
    expect(element.className).toBe('heading-element');
  });
});
