import React from 'react';
import Head from 'next/head';

import RenderApp from '../src';

export const Index = () => (
  <>
    <Head>
      <title>Character Dictionary</title>
      <meta
        name="description"
        content="a character dictionary, from the movie shaw"
      />
    </Head>
    <RenderApp />
  </>
);

export default Index;
