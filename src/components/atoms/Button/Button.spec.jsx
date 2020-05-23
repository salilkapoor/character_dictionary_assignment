import React from 'react';
import { render } from '@testing-library/react';

import Button from '.';

describe('TS-001: Button test Suite', () => {
  it('TC-001: should render the Button component', () => {
    const { container } = render(
      <Button className="Button-element">
        Title
      </Button>
    );
    expect(container).toBeDefined();

    const element = container.querySelector('button');

    expect(element).toBeDefined();
    expect(element.className).toBe('Button-element');
  });
});
