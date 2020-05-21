import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  color: teal;
  font-size: 2em;
`;

export const Button = () => (
  <ButtonWrapper onClick={() => {}}>text</ButtonWrapper>
);

export default Button;
