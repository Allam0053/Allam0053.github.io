/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

import '@fortawesome/fontawesome-free/css/all.min.css';

import Footer from '@/components/Footers/Footer';
import UnstyledLink from '@/components/links/UnstyledLink';
import Navbar from '@/components/Navbars/AuthNavbar';

// TODO: add journey of college

export default function Profile() {
  return (
    <>
      <Navbar />
      <main className='profile-page'>
        <section className='relative block h-500-px'>
          <div
            className='absolute top-0 h-full w-full bg-cover bg-center'
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
            }}
          >
            <span
              id='blackOverlay'
              className='absolute h-full w-full bg-black opacity-50'
            ></span>
          </div>
          <div
            className='pointer-events-none absolute top-auto bottom-0 left-0 right-0 h-16 w-full overflow-hidden'
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
        </section>
        <section className='relative bg-slate-200 py-16'>
          <div className='container mx-auto px-4'>
            <div className='relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-xl'>
              <div className='px-6'>
                <div className='flex flex-wrap justify-center'>
                  <div className='flex w-full justify-center px-4 lg:order-2 lg:w-3/12'>
                    <div className='relative'>
                      <img
                        alt='...'
                        src='/images/1.jpeg'
                        className='absolute -m-16 -ml-20 h-auto max-w-150-px rounded-full border-none align-middle shadow-xl lg:-ml-16'
                      />
                    </div>
                  </div>
                  <div className='w-full px-4 lg:order-3 lg:w-4/12 lg:self-center lg:text-right'>
                    <div className='mt-32 py-6 px-3 sm:mt-0'>
                      <UnstyledLink
                        href='https://drive.google.com/file/d/1BBU_5Rh_b1AT4pWK4IsyqoZwKnZ-zKpv/view?usp=sharing'
                        openNewTab
                      >
                        <button
                          className='mb-1 rounded bg-slate-700 px-4 py-2 text-xs font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-md focus:outline-none active:bg-slate-600 sm:mr-2'
                          type='button'
                        >
                          My CV
                        </button>
                      </UnstyledLink>
                    </div>
                  </div>
                  <div className='w-full px-4 lg:order-1 lg:w-4/12'>
                    <div className='flex justify-center py-4 pt-8 lg:pt-4'>
                      <div className='mr-4 p-3 text-center'>
                        <span className='block text-xl font-bold uppercase tracking-wide text-slate-600'>
                          22
                        </span>
                        <span className='text-sm text-slate-400'>Friends</span>
                      </div>
                      <div className='mr-4 p-3 text-center'>
                        <span className='block text-xl font-bold uppercase tracking-wide text-slate-600'>
                          10
                        </span>
                        <span className='text-sm text-slate-400'>Photos</span>
                      </div>
                      <div className='p-3 text-center lg:mr-4'>
                        <span className='block text-xl font-bold uppercase tracking-wide text-slate-600'>
                          89
                        </span>
                        <span className='text-sm text-slate-400'>Comments</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mt-12 text-center'>
                  <h3 className='mb-2 text-4xl font-semibold leading-normal text-slate-700'>
                    Allam Taju Sarof
                  </h3>
                  <div className='mt-0 mb-2 text-sm font-bold uppercase leading-normal text-slate-400'>
                    <UnstyledLink
                      href={`https://www.google.com/maps/dir//'-7.982745,112.133692'/`}
                      openNewTab={true}
                      className='text-slate-400 hover:text-slate-500'
                    >
                      <i className='fas fa-map-marker-alt mr-2 text-lg'></i>{' '}
                      Blitar, East Java
                    </UnstyledLink>
                  </div>
                  <div className='mb-2 mt-10 text-slate-600'>
                    <i className='fas fa-briefcase mr-2 text-lg text-slate-400'></i>
                    Student - Informatics Engineering (2019 - current)
                  </div>
                  <div className='mb-2 text-slate-600'>
                    <i className='fas fa-university mr-2 text-lg text-slate-400'></i>
                    Institut Teknologi Sepuluh Nopember
                  </div>
                </div>
                <div className='mt-10 border-t border-slate-200 py-10 text-center'>
                  <div className='flex flex-wrap justify-center'>
                    <div className='w-full px-4 lg:w-9/12'>
                      <p className='mb-4 text-lg leading-relaxed text-slate-700'>
                        {`Hello, I'm Allam. I'm a student of Informatics Engineering at ITS. I have so much interest in tech and I really like building apps. Currently, I have been creating web apps and mobile apps. I have been programming in PHP for about a year. I really enjoy learning many things such as routing, handling data, and many more in laravel. Now I am interested in javascript. I think this language is greatly popular so I had to learn it. It is a beautiful language with high versatility I think. The syntax is quite tricky and that's what makes it fascinating.`}
                      </p>
                      <p className='text-sm font-semibold text-slate-400'>
                        Edited in 2021
                      </p>
                    </div>
                  </div>
                </div>

                <div className='flex justify-center'>
                  <ol className='relative border-l border-gray-200 dark:border-gray-700'>
                    <li className='mb-10 ml-6'>
                      <span className='absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900'>
                        <svg
                          aria-hidden='true'
                          className='h-3 w-3 text-blue-600 dark:text-blue-400'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fillRule='evenodd'
                            d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                            clipRule='evenodd'
                          ></path>
                        </svg>
                      </span>
                      <h3 className='mb-1 flex items-center text-lg font-semibold text-gray-900 dark:text-white'>
                        Flowbite Application UI v2.0.0{' '}
                        <span className='mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-200 dark:text-blue-800'>
                          Latest
                        </span>
                      </h3>
                      <time className='mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
                        Released on January 13th, 2022
                      </time>
                      <p className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400'>
                        Get access to over 20+ pages including a dashboard
                        layout, charts, kanban board, calendar, and pre-order
                        E-commerce &amp; Marketing pages.
                      </p>
                      <a
                        href='#'
                        className='inline-flex items-center rounded-lg border border-gray-200 bg-white py-2 px-4 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700'
                      >
                        <svg
                          className='mr-2 h-4 w-4'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fillRule='evenodd'
                            d='M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z'
                            clipRule='evenodd'
                          ></path>
                        </svg>{' '}
                        Download ZIP
                      </a>
                    </li>
                    <li className='mb-10 ml-6'>
                      <span className='absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900'>
                        <svg
                          aria-hidden='true'
                          className='h-3 w-3 text-blue-600 dark:text-blue-400'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fillRule='evenodd'
                            d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                            clipRule='evenodd'
                          ></path>
                        </svg>
                      </span>
                      <h3 className='mb-1 text-lg font-semibold text-gray-900 dark:text-white'>
                        Flowbite Figma v1.3.0
                      </h3>
                      <time className='mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
                        Released on December 7th, 2021
                      </time>
                      <p className='text-base font-normal text-gray-500 dark:text-gray-400'>
                        All of the pages and components are first designed in
                        Figma and we keep a parity between the two versions even
                        as we update the project.
                      </p>
                    </li>
                    <li className='ml-6'>
                      <span className='absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900'>
                        <svg
                          aria-hidden='true'
                          className='h-3 w-3 text-blue-600 dark:text-blue-400'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fillRule='evenodd'
                            d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                            clipRule='evenodd'
                          ></path>
                        </svg>
                      </span>
                      <h3 className='mb-1 text-lg font-semibold text-gray-900 dark:text-white'>
                        Flowbite Library v1.2.2
                      </h3>
                      <time className='mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
                        Released on December 2nd, 2021
                      </time>
                      <p className='text-base font-normal text-gray-500 dark:text-gray-400'>
                        Get started with dozens of web components and
                        interactive elements built on top of Tailwind CSS.
                      </p>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
