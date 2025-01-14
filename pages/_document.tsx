import { ColorModeScript } from '@chakra-ui/react';
import type { DocumentContext } from 'next/document';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

import logRequestFromBot from 'nextjs/utils/logRequestFromBot';
import * as serverTiming from 'nextjs/utils/serverTiming';

import theme from 'theme/theme';
import * as svgSprite from 'ui/shared/IconSvg';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = async() => {
      const start = Date.now();
      const result = await originalRenderPage();
      const end = Date.now();

      serverTiming.appendValue(ctx.res, 'renderPage', end - start);

      return result;
    };

    await logRequestFromBot(ctx.req, ctx.res, ctx.pathname);

    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          { /* FONTS */ }
          <style>{ `
            @font-face {
                font-family: Geist;
                font-weight: 300;
                font-style: normal;
                font-stretch: normal;
                font-display: swap;
                src: url(/fonts/Geist/Geist-Light.woff) format("woff")
            }
            
            @font-face {
                font-family: Geist;
                font-weight: 400;
                font-style: normal;
                font-stretch: normal;
                font-display: swap;
                src: url(/fonts/Geist/Geist-Regular.woff) format("woff")
            }
            
            @font-face {
                font-family: Geist;
                font-weight: 500;
                font-style: normal;
                font-stretch: normal;
                font-display: swap;
                src: url(/fonts/Geist/Geist-Medium.woff) format("woff")
            }
            
            @font-face {
                font-family: Geist Mono;
                font-weight: 300;
                font-style: normal;
                font-stretch: normal;
                font-display: swap;
                src: url(/fonts/GeistMono/GeistMono-Light.woff) format("woff")
            }
            
            @font-face {
                font-family: Geist Mono;
                font-weight: 400;
                font-style: normal;
                font-stretch: normal;
                font-display: swap;
                src: url(/fonts/GeistMono/GeistMono-Regular.woff) format("woff")
            }
            
            @font-face {
                font-family: Geist Mono;
                font-weight: 500;
                font-style: normal;
                font-stretch: normal;
                font-display: swap;
                src: url(/fonts/GeistMono/GeistMono-Medium.woff) format("woff")
            }
          ` }</style>

          { /* eslint-disable-next-line @next/next/no-sync-scripts */ }
          <script src="/assets/envs.js"/>

          { /* FAVICON */ }
          <link rel="icon" href="/assets/favicon/favicon.ico" sizes="48x48"/>
          <link rel="icon" sizes="32x32" type="image/png" href="/assets/favicon/favicon-32x32.png"/>
          <link rel="icon" sizes="16x16" type="image/png"href="/assets/favicon/favicon-16x16.png"/>
          <link rel="apple-touch-icon" href="/assets/favicon/apple-touch-icon-180x180.png"/>
          <link rel="mask-icon" href="/assets/favicon/safari-pinned-tab.svg"/>

          <link rel="preload" as="image" href={ svgSprite.href }/>
        </Head>
        <body>
          <ColorModeScript initialColorMode={ theme.config.initialColorMode }/>
          <Main/>
          <NextScript/>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
