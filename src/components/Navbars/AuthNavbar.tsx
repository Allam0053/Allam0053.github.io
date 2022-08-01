import React from 'react';

import clsxm from '@/lib/clsxm';

// components
import UnstyledLink from '@/components/links/UnstyledLink';

type NavbarPropsT = React.ComponentPropsWithRef<'nav'>;

const Navbar = React.forwardRef<HTMLElement, NavbarPropsT>(
  ({ children, className, ...rest }, ref) => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
      <>
        <nav
          className={clsxm(
            'navbar-expand-lg absolute top-0 z-50 flex w-full flex-wrap items-center justify-between px-2 py-3',
            className
          )}
          {...rest}
          ref={ref}
        >
          <div className='container mx-auto flex flex-wrap items-center justify-between px-4'>
            <div className='relative flex w-full justify-between lg:static lg:block lg:w-auto lg:justify-start'>
              <UnstyledLink
                href='/'
                openNewTab={false}
                className='mr-4 inline-block whitespace-nowrap py-2 text-sm font-bold uppercase leading-relaxed text-white'
              >
                HOME
              </UnstyledLink>
              <button
                className='block cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none outline-none focus:outline-none lg:hidden'
                type='button'
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <i className='fas fa-bars text-white'></i>
              </button>
            </div>
            <div
              className={
                'flex-grow items-center bg-white lg:flex lg:bg-opacity-0 lg:shadow-none' +
                (navbarOpen ? ' block rounded shadow-lg' : ' hidden')
              }
              id='example-navbar-warning'
            >
              <ul className='flex list-none flex-col lg:ml-auto lg:flex-row'>
                <li className='flex items-center'>
                  <a
                    className='flex items-center px-3 py-4 text-xs font-bold uppercase text-slate-700 lg:py-2 lg:text-white lg:hover:text-slate-200'
                    href='https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-nextjs%2F'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i className='fab fa-facebook leading-lg text-lg text-slate-400 lg:text-slate-200 ' />
                    <span className='ml-2 inline-block lg:hidden'>Share</span>
                  </a>
                </li>

                <li className='flex items-center'>
                  <a
                    className='flex items-center px-3 py-4 text-xs font-bold uppercase text-slate-700 lg:py-2 lg:text-white lg:hover:text-slate-200'
                    href='https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-nextjs%2F&text=Start%20your%20development%20with%20a%20Free%20Tailwind%20CSS%20and%20NextJS%20UI%20Kit%20and%20Admin.%20Let%20Notus%20NextJS%20amaze%20you%20with%20its%20cool%20features%20and%20build%20tools%20and%20get%20your%20project%20to%20a%20whole%20new%20level.'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i className='fab fa-twitter leading-lg text-lg text-slate-400 lg:text-slate-200 ' />
                    <span className='ml-2 inline-block lg:hidden'>Tweet</span>
                  </a>
                </li>

                <li className='flex items-center'>
                  <a
                    className='flex items-center px-3 py-4 text-xs font-bold uppercase text-slate-700 lg:py-2 lg:text-white lg:hover:text-slate-200'
                    href='https://github.com/creativetimofficial/notus-nextjs?ref=nnjs-auth-navbar'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i className='fab fa-github leading-lg text-lg text-slate-400 lg:text-slate-200 ' />
                    <span className='ml-2 inline-block lg:hidden'>Star</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {children}
        </nav>
      </>
    );
  }
);

export default Navbar;
