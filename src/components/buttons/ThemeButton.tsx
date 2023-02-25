// import '@fortawesome/fontawesome-free/css/all.min.css';

import clsx from 'clsx';
import { useTheme } from 'next-themes';
import * as React from 'react';

type ThemeButtonProps = React.ComponentPropsWithoutRef<'button'>;

export default function ThemeButton({ className, ...rest }: ThemeButtonProps) {
  const { theme, setTheme } = useTheme();
  React.useEffect(() => {
    setTheme('light');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <button
      className={clsx(
        'ml-3 mb-3 rounded px-4 py-2 text-xs font-bold uppercase shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none lg:mr-1 lg:mb-0',
        'bg-slate-700 text-white active:bg-slate-600',
        'dark:bg-slate-200 dark:text-slate-800 dark:active:bg-slate-100',
        className
      )}
      type='button'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      {...rest}
    >
      {(theme ? theme : 'light') === 'light' ? (
        <>
          <i className='fas fa-moon dark:fa-sun'></i> dark
        </>
      ) : (
        <>
          <i className='fas fa-sun'></i> light
        </>
      )}
    </button>
  );
}
