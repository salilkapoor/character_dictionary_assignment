import React from 'react';
import { render } from '@testing-library/react';

import Card from '.';
import setupProps from '../../../../__mocks__/characters';

describe('TS-001: Card test Suite', () => {
  it('TC-001: should render the Card component', () => {
    const { container } = render(
      <Card character={setupProps()} />
    );
    expect(container).toBeDefined();
  });
});
