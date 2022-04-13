import React from 'react';

import Head from 'next/head';

import categories from '../data/setup';
import Base from '../layouts/Base';
import stripHtml from '../lib/strip-html';

export async function getStaticProps() {
  const meta = {
    title: 'Setup | Primata LAB',
    description:
      'Sempre buscando os melhores meios e ferramentas para o seu problema',
    tagline: 'Ferramentas de trabalho',
    image: '#',
    primaryColor: 'cyan',
    secondaryColor: 'green',
  };

  return { props: meta };
}

function Uses(props) {
  const { title, description, image } = props;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={stripHtml(description)} name="description" />
        <meta content={stripHtml(description)} property="og:description" />
        <meta content="https://ialexanderbrito.dev/setup" property="og:url" />
        <meta
          content={`https://ialexanderbrito.dev${image}`}
          property="og:image"
        />
      </Head>

      <h2>Em manutenção...</h2>
    </>
  );
}

Uses.Layout = Base;

export default Uses;
