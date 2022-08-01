import React from 'react';

export default function Footer() {
  return (
    <>
      <footer className='relative bg-slate-200 pt-8 pb-6'>
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
              <h4 className='text-3xl font-semibold'>
                {`Let's`} keep in touch!
              </h4>
              <h5 className='mt-0 mb-2 text-lg text-slate-600'>
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div className='mt-6 mb-6 lg:mb-0'>
                <button
                  className='align-center mr-2 h-10 w-10 items-center justify-center rounded-full bg-white font-normal text-sky-400 shadow-lg outline-none focus:outline-none'
                  type='button'
                >
                  <i className='fab fa-twitter'></i>
                </button>
                <button
                  className='align-center mr-2 h-10 w-10 items-center justify-center rounded-full bg-white font-normal text-sky-600 shadow-lg outline-none focus:outline-none'
                  type='button'
                >
                  <i className='fab fa-facebook-square'></i>
                </button>
                <button
                  className='align-center mr-2 h-10 w-10 items-center justify-center rounded-full bg-white font-normal text-pink-400 shadow-lg outline-none focus:outline-none'
                  type='button'
                >
                  <i className='fab fa-dribbble'></i>
                </button>
                <button
                  className='align-center mr-2 h-10 w-10 items-center justify-center rounded-full bg-white font-normal text-slate-800 shadow-lg outline-none focus:outline-none'
                  type='button'
                >
                  <i className='fab fa-github'></i>
                </button>
              </div>
            </div>
            <div className='w-full px-4 lg:w-6/12'>
              <div className='items-top mb-6 flex flex-wrap'>
                <div className='ml-auto w-full px-4 lg:w-4/12'>
                  <span className='mb-2 block text-sm font-semibold uppercase text-slate-500'>
                    Useful Links
                  </span>
                  <ul className='list-unstyled'>
                    <li>
                      <a
                        className='block pb-2 text-sm font-semibold text-slate-600 hover:text-slate-800'
                        href='https://www.creative-tim.com/presentation?ref=nnjs-footer'
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        className='block pb-2 text-sm font-semibold text-slate-600 hover:text-slate-800'
                        href='https://blog.creative-tim.com?ref=nnjs-footer'
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        className='block pb-2 text-sm font-semibold text-slate-600 hover:text-slate-800'
                        href='https://www.github.com/creativetimofficial?ref=nnjs-footer'
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        className='block pb-2 text-sm font-semibold text-slate-600 hover:text-slate-800'
                        href='https://www.creative-tim.com/bootstrap-themes/free?ref=nnjs-footer'
                      >
                        Free Products
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='w-full px-4 lg:w-4/12'>
                  <span className='mb-2 block text-sm font-semibold uppercase text-slate-500'>
                    Other Resources
                  </span>
                  <ul className='list-unstyled'>
                    <li>
                      <a
                        className='block pb-2 text-sm font-semibold text-slate-600 hover:text-slate-800'
                        href='https://github.com/creativetimofficial/notus-nextjs/blob/main/LICENSE.md?ref=nnjs-footer'
                      >
                        MIT License
                      </a>
                    </li>
                    <li>
                      <a
                        className='block pb-2 text-sm font-semibold text-slate-600 hover:text-slate-800'
                        href='https://creative-tim.com/terms?ref=nnjs-footer'
                      >
                        Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        className='block pb-2 text-sm font-semibold text-slate-600 hover:text-slate-800'
                        href='https://creative-tim.com/privacy?ref=nnjs-footer'
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        className='block pb-2 text-sm font-semibold text-slate-600 hover:text-slate-800'
                        href='https://creative-tim.com/contact-us?ref=nnjs-footer'
                      >
                        Contact Us
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
                Copyright © {new Date().getFullYear()} Notus NextJS by{' '}
                <a
                  href='https://www.creative-tim.com?ref=nnjs-footer'
                  className='text-slate-500 hover:text-slate-800'
                >
                  Creative Tim
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
