import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';
import '@/styles/mdx.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

function MyApp({ Component, pageProps }: AppProps) {
  // useVisit();
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='light'
      themes={['light', 'dark']}
      enableSystem={false}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
