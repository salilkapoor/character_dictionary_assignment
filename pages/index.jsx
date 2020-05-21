import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import Dashboard from '../src/components/organisms/Dashboard';

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
    <Dashboard />
  </>
);

export default Index;
