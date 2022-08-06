/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

import '@fortawesome/fontawesome-free/css/all.min.css';

import Footer from '@/components/Footers/Footer';
import Layout from '@/components/layout/Layout';
import IndexNavbar from '@/components/Navbars/IndexNavbar';
import Seo from '@/components/Seo';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <IndexNavbar />

      <main>
        <section className='header relative flex h-screen max-h-860-px items-center pt-16'>
          <div className='container mx-auto flex flex-wrap items-center'>
            <div className='w-full px-4 md:w-8/12 lg:w-6/12 xl:w-6/12'>
              <div className='pt-32 sm:pt-0'>
                <h2 className='text-4xl font-semibold text-blueGray-600'>
                  {`I'm Allam.`}
                </h2>
                <p className='mt-4 text-lg leading-relaxed text-blueGray-500'>
                  This is my personal website. Imma a dev at heart. I write some
                  for it. Take a look, you may find something interesting.
                </p>
                <div className='mt-12'>
                  {/* <a
                    href='https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus?ref=nnjs-index'
                    className='get-started mr-1 mb-1 rounded bg-blueGray-400 px-6 py-4 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-blueGray-500'
                  >
                    Get started
                  </a> */}
                  <a
                    href='https://github.com/creativetimofficial/notus-nextjs?ref=nnjs-index'
                    className='github-star ml-1 mr-1 mb-1 rounded bg-blueGray-700 px-6 py-4 text-sm font-bold uppercase text-white shadow outline-none hover:shadow-lg focus:outline-none active:bg-blueGray-600'
                  >
                    Github Star
                  </a>
                </div>
              </div>
            </div>
          </div>
          <img
            className='b-auto absolute top-0 right-0 -mt-48 max-h-860-px w-10/12 pt-16 sm:mt-0 sm:w-6/12'
            src='/images/ill_header_3.png'
            alt='...'
          />
        </section>
      </main>

      <Footer />
    </Layout>
  );
}
