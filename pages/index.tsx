import Head from 'next/head';
import styled from 'styled-components';
import Link from 'next/link';

const Hello = styled.h1`
  color: teal;
  font-size: 50px;
`;

export const Index = () => {
  return (
    <>
      <Head>
        <title>Character Dictionary</title>
        <meta
          name="description"
          content="a character dictionary, from the movies shaw"
        />
      </Head>
      <Hello>Hello World!</Hello>
      <Link href="/counter">
        <button>Go to counter</button>
      </Link>
    </>
  );
};

export default Index;
