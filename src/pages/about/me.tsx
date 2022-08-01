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
                      <button
                        className='mb-1 rounded bg-slate-700 px-4 py-2 text-xs font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-md focus:outline-none active:bg-slate-600 sm:mr-2'
                        type='button'
                      >
                        Connect
                      </button>
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
                      <a
                        href='#pablo'
                        className='font-normal text-sky-500'
                        onClick={(e) => e.preventDefault()}
                      >
                        Show more
                      </a>
                    </div>
                  </div>
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
