import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import RenderApp from '../src';

const Hello = styled.h1`
  color: teal;
  font-size: 50px;
`;

export const Index = () => (
  <>
    <Head>
      <title>Character Dictionary</title>
      <meta
        name="description"
        content="a character dictionary, from the movie shaw"
      />
    </Head>
    <Hello>Hello World!</Hello>
    <RenderApp />
  </>
);

export default Index;
