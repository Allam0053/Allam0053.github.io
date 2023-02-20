/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import * as React from 'react';

import Badge from '@/components/content/Badge';
import Footer from '@/components/Footers/Footer';
import Layout from '@/components/layout/Layout';
import LoadingPage from '@/components/layout/Loading';
import UnstyledLink from '@/components/links/UnstyledLink';
import IndexNavbar from '@/components/Navbars/IndexNavbar';
import Seo from '@/components/Seo';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => setLoading((_l) => false), 500);
  }, []);
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo
        title='Home | Allam Taju Sarof'
        siteName='Allam Taju'
        description='Personal website of Allam Taju'
        url='https://allam-taju.vercel.app/'
      />

      {loading && <LoadingPage />}
      <IndexNavbar transparent className={loading ? '' : 'fade-in-start'} />
      <div className='fixed bottom-0 right-0 z-[100] m-4 rounded-lg bg-yellow-500 p-2 text-sm font-semibold text-slate-100 shadow-md'>
        this page currently on development
      </div>

      <main>
        <section className='header relative flex h-screen max-h-860-px items-center pt-16 '>
          <div className='container mx-auto flex flex-wrap items-center'>
            <div className='w-full px-4 md:w-8/12 lg:w-6/12 xl:w-6/12'>
              <div className='pt-0 md:pt-32'>
                <h2 className='text-4xl font-semibold text-slate-600'>
                  {`Hello, I'm Allam Taju Sarof.`}
                </h2>
                <p className='mt-4 text-lg leading-relaxed text-slate-500'>
                  This is my personal website. Imma a dev at heart. I write some
                  for it. Take a look, you may find something interesting.
                </p>
                <div className='mt-12'>
                  {/* <a
                    href='https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus?ref=nnjs-index'
                    className='get-started mr-1 mb-1 rounded bg-slate-400 px-6 py-4 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-slate-500'
                  >
                    Get started
                  </a> */}
                  <a
                    href='https://github.com/allam0053/allam0053.github.io'
                    className='github-star ml-1 mr-1 mb-1 rounded bg-slate-700 px-6 py-4 text-sm font-bold uppercase text-white shadow outline-none hover:shadow-lg focus:outline-none active:bg-slate-600'
                  >
                    Github Star
                  </a>
                  <UnstyledLink
                    href='https://drive.google.com/file/d/1BBU_5Rh_b1AT4pWK4IsyqoZwKnZ-zKpv/view?usp=sharing'
                    openNewTab
                    className='mx-2 border-0 border-slate-600 px-2 text-sm font-semibold text-slate-500 hover:border-b-2 hover:text-slate-600 active:border-b-2 active:text-slate-700'
                  >
                    <i className='fas fa-address-card'></i> My CV
                  </UnstyledLink>
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

        <section className='relative mt-48 bg-slate-100 pb-40 md:mt-40'>
          <div className='container mx-auto overflow-hidden pb-20'>
            <div className='flex flex-wrap items-center pt-32'>
              <div className='mr-auto ml-auto mt-32 w-full px-4 md:w-6/12'>
                <div className='relative flex flex-wrap justify-center'>
                  <div className='my-4 w-full px-4 lg:w-6/12'>
                    <Link href='/project'>
                      <div className='rounded-lg bg-[#3178C6] p-8 text-center shadow-lg'>
                        <img
                          alt='...'
                          className='mx-auto w-16 max-w-full rounded-full bg-white p-2 shadow-md'
                          src='/images/typescript.png'
                        />
                        <p className='mt-4 text-lg font-semibold text-white'>
                          TypeScript
                        </p>
                      </div>
                    </Link>
                    <Link href='/project'>
                      <div className='mt-8 rounded-lg bg-sky-500 p-8 text-center shadow-lg'>
                        <img
                          alt='...'
                          className='mx-auto w-16 max-w-full rounded-full bg-white p-2 shadow-md'
                          src='https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg'
                        />
                        <p className='mt-4 text-lg font-semibold text-white'>
                          ReactJS
                        </p>
                      </div>
                    </Link>
                    <Link href='/project'>
                      <div className='mt-8 rounded-lg bg-slate-700 p-8 text-center shadow-lg'>
                        <img
                          alt='...'
                          className='mx-auto w-16 max-w-full rounded-full bg-white p-2 shadow-md'
                          src='https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nextjs.jpg'
                        />
                        <p className='mt-4 text-lg font-semibold text-white'>
                          NextJS
                        </p>
                      </div>
                    </Link>
                  </div>
                  <div className='my-4 w-full px-4 lg:mt-16 lg:w-6/12'>
                    <Link href='/project'>
                      <div className='rounded-lg bg-[#0E8AC8] p-8 text-center shadow-lg'>
                        <img
                          alt='java programming language logo'
                          className='mx-auto w-16 max-w-full rounded-full bg-white p-2 shadow-md'
                          src='/images/java.png'
                        />
                        <p className='mt-4 text-lg font-semibold text-white'>
                          Java
                        </p>
                      </div>
                    </Link>
                    <Link href='/project'>
                      <div className='mt-8 rounded-lg bg-red-700 p-8 text-center shadow-lg'>
                        <img
                          alt='...'
                          className='mx-auto w-16 max-w-full rounded-full bg-white p-2 shadow-md'
                          src='/images/laravel.png'
                        />
                        <p className='mt-4 text-lg font-semibold text-white'>
                          Laravel
                        </p>
                      </div>
                    </Link>
                    <Link href='/project'>
                      <div className='mt-8 rounded-lg bg-[#07B6D5] p-8 text-center shadow-lg'>
                        <img
                          alt='...'
                          className='mx-auto w-16 max-w-full rounded-full bg-white p-2 shadow-md'
                          src='/images/tailwindcss.png'
                        />
                        <p className='mt-4 text-lg font-semibold text-white'>
                          Tailwindcss
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className='ml-auto mr-auto mt-48 w-full px-12 md:w-4/12 md:px-4'>
                <div className='mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center text-slate-500 shadow-lg'>
                  <i className='fas fa-drafting-compass text-xl'></i>
                </div>
                <h3 className='mb-2 text-3xl font-semibold leading-normal'>
                  Projects
                </h3>
                <p className='mt-4 mb-4 text-lg font-light leading-relaxed text-slate-600'>
                  In order to gain more experience in developing, I always look
                  for opportunity to join a project or to work on a project
                  together.
                </p>
                <p className='mt-4 mb-4 text-lg font-light leading-relaxed text-slate-600'>
                  I&apos;m always looking for new ideas to gain new knowledge.
                  Knowledge is power 💪
                </p>
                <div className='block pb-6'>
                  <Badge>Reactjs</Badge>
                  <Badge>Nextjs</Badge>
                  <Badge>Laravel</Badge>
                  <Badge>Java</Badge>
                  <Badge>Frontend</Badge>
                  <Badge>Backend</Badge>
                </div>
                <UnstyledLink
                  href='/projects'
                  openNewTab={false}
                  className='font-bold text-slate-700 transition-all duration-150 ease-linear hover:text-slate-500'
                >
                  View all{' '}
                  <i className='fa fa-angle-double-right ml-1 leading-relaxed'></i>
                </UnstyledLink>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </Layout>
  );
}
