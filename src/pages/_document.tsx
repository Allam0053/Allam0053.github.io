import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

class _Document extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <link
            rel='preload'
            href='/fonts/inter-var-latin.woff2'
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />
          <link rel='manifest' href='/manifest.json' />

          <script async src='https://www.googletagmanager.com/gtag/js?id=G-EVVPR6LFF7'></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag() { dataLayer.push(arguments); }
                gtag('js', new Date());
                gtag('config', 'G-EVVPR6LFF7');
              `,
            }}
          />
        </Head>
        <body className='w-screen' style={{ overflowX: 'hidden' }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default _Document;
