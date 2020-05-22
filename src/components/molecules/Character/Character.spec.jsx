import React from 'react';
import { render } from '@testing-library/react';

import Character from '.';
import setupProps from '../../../../__mocks__/characters';

describe('TS-001: Character test Suite', () => {
  it('TC-001: should render the Character component', () => {
    const { container } = render(
      <Character character={setupProps()} />
    );
    expect(container).toBeDefined();
  });
});
