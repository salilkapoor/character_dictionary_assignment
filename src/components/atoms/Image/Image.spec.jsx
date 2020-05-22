import React from 'react';
import { render } from '@testing-library/react';

import Image from '.';

describe('TS-001: Image test Suite', () => {
  it('TC-001: should render the Image component', () => {
    const { container } = render(
      <Image
        type="img"
        src="/"
        alt="img-text-to-accessible"
        className="img-element"
      />
    );
    expect(container).toBeDefined();

    const element = container.querySelector('img');

    expect(element).toBeDefined();
    expect(element.getAttribute('alt')).toBe(
      'img-text-to-accessible'
    );
  });
});
