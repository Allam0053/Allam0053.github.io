import React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

export default function Footer() {
  return (
    <footer className='relative w-screen overflow-visible bg-slate-200 pt-8 pb-6'>
      <div
        className='pointer-events-none absolute bottom-auto top-0 left-0 right-0 -mt-20 h-20 w-full overflow-hidden'
        style={{ transform: 'translateZ(0)' }}
      >
        <svg
          className='absolute bottom-0 overflow-hidden'
          xmlns='http://www.w3.org/2000/svg'
          preserveAspectRatio='none'
          version='1.1'
          viewBox='0 0 2560 100'
          x='0'
          y='0'
        >
          <polygon
            className='fill-current text-slate-200'
            points='2560 0 2560 100 0 100'
          ></polygon>
        </svg>
      </div>
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap text-center lg:text-left'>
          <div className='w-full px-4 lg:w-6/12'>
            <h4 className='text-3xl font-semibold'>{`Let's`} keep in touch!</h4>
            <div className='mt-6 mb-6 lg:mb-0'>
              <UnstyledLink
                href='https://twitter.com/masmaserius'
                openNewTab={true}
              >
                <button className='align-center mr-2 h-10 w-10 items-center justify-center rounded-full bg-white font-normal text-sky-400 shadow-lg outline-none focus:outline-none'>
                  <i className='fab fa-twitter'></i>
                </button>
              </UnstyledLink>
              <UnstyledLink
                href='https://www.instagram.com/alt_rof/'
                openNewTab={true}
              >
                <button className='align-center mr-2 h-10 w-10 items-center justify-center rounded-full bg-white font-normal text-pink-500 shadow-lg outline-none focus:outline-none'>
                  <i className='fab fa-instagram'></i>
                </button>
              </UnstyledLink>
              <UnstyledLink
                href='https://www.linkedin.com/in/allam-taju-sarof-34a2151b4/'
                openNewTab={true}
              >
                <button className='align-center mr-2 h-10 w-10 items-center justify-center rounded-full bg-white font-normal text-blue-600 shadow-lg outline-none focus:outline-none'>
                  <i className='fab fa-linkedin'></i>
                </button>
              </UnstyledLink>
              <UnstyledLink
                openNewTab={true}
                href='https://github.com/Allam0053'
              >
                <button className='align-center mr-2 h-10 w-10 items-center justify-center rounded-full bg-white font-normal text-slate-800 shadow-lg outline-none focus:outline-none'>
                  <i className='fab fa-github'></i>
                </button>
              </UnstyledLink>
            </div>
          </div>
          <div className='w-full px-4 lg:w-6/12'>
            <div className='items-top mb-6 flex flex-wrap'>
              <div className='ml-auto w-1/2 px-4 lg:w-4/12'>
                <span className='mb-2 block text-sm font-semibold uppercase text-slate-500'>
                  Useful Links
                </span>
                <ul className='list-unstyled'>
                  <li>
                    <UnstyledLink
                      className='block pb-2 text-sm font-semibold text-slate-600 hover:text-slate-800'
                      href='/about/me'
                    >
                      About Me
                    </UnstyledLink>
                  </li>
                  <li>
                    <UnstyledLink
                      className='block pb-2 text-sm font-semibold text-slate-600 hover:text-slate-800'
                      href='/blogs/'
                    >
                      Blog
                    </UnstyledLink>
                  </li>
                  <li>
                    <a
                      className='block pb-2 text-sm font-semibold text-slate-600 hover:text-slate-800'
                      href='https://www.github.com/allam0053'
                    >
                      Github
                    </a>
                  </li>
                </ul>
              </div>
              <div className='w-1/2 px-4 lg:w-4/12'>
                <span className='mb-2 block text-sm font-semibold uppercase text-slate-500'>
                  Other Resources
                </span>
                <ul className='list-unstyled'>
                  <li>
                    <a
                      className='block pb-2 text-sm font-semibold text-slate-600 hover:text-slate-800'
                      href='wa.me/6282142770220'
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className='my-6 border-slate-300' />
        <div className='flex flex-wrap items-center justify-center md:justify-between'>
          <div className='mx-auto w-full px-4 text-center md:w-4/12'>
            <div className='py-1 text-sm font-semibold text-slate-500'>
              {new Date().getFullYear()}
              {' Allam'}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
