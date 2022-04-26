import React from 'react';

import Document, { Html, Head, Main, NextScript } from 'next/document';

import { GA_TRACKING_ID } from '../lib/gtag';
import { getCssText } from '../stitches.config';

export default class extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const lang = this.props.__NEXT_DATA__.props.pageProps?.post?.lang;

    return (
      <Html lang={lang ? lang : 'pt-BR'}>
        <Head>
          <meta charSet="utf-8" />
          <meta content="Primata" name="author" />
          <meta property="og:type" content="website" />
          <meta content="summary_large_image" name="twitter:card" />
          <meta name="theme-color" content="#08070b" />
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
          <link rel="shortcut icon" href="../public/favicon.ico" />
          <link
            rel="icon"
            href="../public/favicon.ico"
            sizes="any"
            type="image/svg+xml"
          />
        </Head>
        <Main />
        <NextScript />
      </Html>
    );
  }
}
