import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import '@/styles/animation.css';
import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import useIsLandscape from '@/hooks/useIsLandscape';
import { useEffect } from 'react';

/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

function MyApp({ Component, pageProps }: AppProps) {
  const isLandscape = useIsLandscape();

  useEffect(() => {
    if (!document) {
      return;
    }

    if (document && isLandscape) {
      document.documentElement.setAttribute('data-orientation', 'landscape');
    } else {
      document.documentElement.setAttribute('data-orientation', 'portrait');
    }
  }, [isLandscape]);

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
