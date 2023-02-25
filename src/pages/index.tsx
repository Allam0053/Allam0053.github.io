/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import * as React from 'react';
import { InView } from 'react-intersection-observer';

import clsxm from '@/lib/clsxm';
import useIsMounted from '@/hooks/useIsMounted';

import Badge from '@/components/content/Badge';
import Footer from '@/components/Footers/Footer';
import Layout from '@/components/layout/Layout';
import UnstyledLink from '@/components/links/UnstyledLink';
import IndexNavbar from '@/components/Navbars/IndexNavbar';
import Seo from '@/components/Seo';
import Tooltip from '@/components/Tooltip';

import Ico256 from '@/svg/ico256';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  const isMounted = useIsMounted(500);
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo
        title='Home | Allam Taju Sarof'
        siteName='Allam Taju'
        description='Personal website of Allam Taju'
        url='https://allam-taju.vercel.app'
      />
      <IndexNavbar transparent />
      <div
        className={clsxm(
          'fixed bottom-0 right-0 z-[100] m-4 rounded-lg bg-yellow-500 p-2 text-sm font-semibold text-slate-100 shadow-md',
          isMounted && 'disappear-start'
        )}
        data-disappear
      >
        this page currently on development
      </div>

      <main className='w-screen overflow-x-hidden'>
        <section className='header relative mb-[60px] flex h-screen max-h-860-px w-full items-center pt-16'>
          <div className='isolate h-full w-full bg-white'>
            <div className='absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]'>
              <svg
                className='relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]'
                viewBox='0 0 1155 678'
              >
                <path
                  fill='url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)'
                  fillOpacity='.3'
                  d='M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z'
                />
                <defs>
                  <linearGradient
                    id='45de2b6b-92d5-4d68-a6a0-9b9b2abad533'
                    x1='1155.49'
                    x2='-78.208'
                    y1='.177'
                    y2='474.645'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop stopColor='#9089FC' />
                    <stop offset={1} stopColor='#FF80B5' />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className='relative flex h-full w-full justify-center px-6 lg:px-8'>
              <div className='absolute inset-0 bg-[url(/images/grid.svg)] bg-right-bottom [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]' />
              <div className='container relative mx-auto flex flex-wrap items-center'>
                <div
                  className={clsxm(
                    'relative w-full px-4 md:w-8/12 lg:w-6/12 xl:w-6/12',
                    isMounted ? 'fade-in-start' : ''
                  )}
                >
                  <div
                    className={clsxm(
                      'absolute -top-4 -left-4 h-[2px] w-[80vw] md:w-[60vw]',
                      'bg-[linear-gradient(90deg,rgb(56,189,248)_10%,rgb(129,140,248)_30%,rgb(249,115,22)_80%)]',
                      '[mask-image:radial-gradient(80%_80%_at_left,white,transparent)]',
                      isMounted && 'moveleft-start'
                    )}
                    data-moveleft
                  />
                  <div
                    className={clsxm(
                      'absolute -top-8 left-0 h-[100vh] w-[2px] md:h-[60vh]',
                      'bg-[linear-gradient(0deg,rgb(249,115,22)_10%,rgb(129,140,248)_30%,rgb(56,189,248)_50%)]',
                      '[mask-image:radial-gradient(80%_90%_at_top,white,transparent)]',
                      isMounted && 'moveup-start'
                    )}
                    data-moveup
                  />
                  <h2
                    className='text-4xl font-semibold text-slate-600'
                    data-fade='1'
                  >
                    {`Hello, I'm Allam Taju Sarof.`}
                  </h2>
                  <p
                    className='mt-4 text-lg leading-relaxed text-slate-500'
                    data-fade='2'
                  >
                    This is my personal website. Imma a dev at heart. I write
                    some for it. Take a look, you may find something
                    interesting.
                  </p>
                  <div className='mt-12'>
                    <UnstyledLink
                      openNewTab
                      href='https://github.com/allam0053/allam0053.github.io'
                      className='github-star ml-1 mr-1 mb-1 rounded bg-slate-700 px-6 py-4 text-sm font-bold uppercase text-white shadow outline-none hover:shadow-lg focus:outline-none active:bg-slate-600'
                      data-fade='3'
                    >
                      Github Star
                    </UnstyledLink>
                    <UnstyledLink
                      openNewTab
                      href='https://drive.google.com/file/d/1BBU_5Rh_b1AT4pWK4IsyqoZwKnZ-zKpv/view?usp=sharing'
                      className='mx-2 border-0 border-slate-600 px-2 text-sm font-semibold text-slate-500 hover:border-b-2 hover:text-slate-600 active:border-b-2 active:text-slate-700'
                      data-fade='5'
                    >
                      <i className='fas fa-address-card'></i> My CV
                    </UnstyledLink>
                  </div>
                </div>
                <div
                  className={clsxm(
                    'isolate hidden px-4 md:flex md:w-4/12 md:justify-center lg:w-6/12 xl:w-6/12',
                    isMounted ? 'fade-in-start' : ''
                  )}
                >
                  <div
                    className='z-100 floating-animation rounded-lg bg-white py-4 px-2 align-middle shadow-lg'
                    data-fade='2'
                  >
                    <Ico256 className='scale-75' isDisableRotationAnimation />
                  </div>
                </div>
              </div>
              <div className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'>
                <svg
                  className='relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]'
                  viewBox='0 0 1155 678'
                >
                  <path
                    fill='url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)'
                    fillOpacity='.3'
                    d='M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z'
                  />
                  <defs>
                    <linearGradient
                      id='ecb5b0c9-546c-4772-8c71-4d3f06d544bc'
                      x1='1155.49'
                      x2='-78.208'
                      y1='.177'
                      y2='474.645'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stopColor='#9089FC' />
                      <stop offset={1} stopColor='#FF80B5' />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </section>
        <ProjectSection />
        <ReactComponentSection />
      </main>

      <Footer />
    </Layout>
  );
}

function ProjectSection() {
  return (
    <InView triggerOnce rootMargin='-40% 0px'>
      {({ ref, inView }) => (
        <section
          ref={ref}
          className={clsxm(
            'relative mt-48 pb-4 md:mt-40',
            inView && 'fade-in-start'
          )}
        >
          <div className='absolute inset-0 bg-[url(/images/grid-big.svg)] bg-right-bottom [mask-image:radial-gradient(80vw_80%_at_center,white,transparent)] md:[mask-image:radial-gradient(65%_60%_at_center,white,transparent)]' />
          {/* <div className='absolute inset-0 -z-10 -translate-y-32'>
            <svg
              className={clsxm(
                'absolute -z-10 h-[64rem] w-[128rem] stroke-gray-200',
                '[mask-image:radial-gradient(20rem_60rem_at_center,white,transparent)]',
                'top-0 left-0 translate-x-0 translate-y-0 scale-[.25]',
                'md:[mask-image:radial-gradient(80rem_48rem_at_center,white,transparent)]',
                'md:top-0 md:left-[max(50%,25rem)] md:scale-100',
                'md:-translate-y-32 md:-translate-x-1/2'
              )}
              aria-hidden='true'
            >
              <defs>
                <pattern
                  id='e813992c-7d03-4cc4-a2bd-151760b470a0'
                  width={200}
                  height={200}
                  x='50%'
                  y={-1}
                  patternUnits='userSpaceOnUse'
                >
                  <path d='M100 200V.5M.5 .5H200' fill='none' />
                </pattern>
              </defs>
              <svg x='50%' y={-1} className='overflow-visible fill-gray-50'>
                <path
                  d='M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z'
                  strokeWidth={0}
                />
              </svg>
              <rect
                width='100%'
                height='100%'
                strokeWidth={0}
                fill='url(#e813992c-7d03-4cc4-a2bd-151760b470a0)'
              />
            </svg>
          </div> */}
          <div className='container relative mx-auto overflow-hidden pb-4'>
            <div className='flex flex-wrap items-center'>
              <div className='mr-auto ml-auto mt-8 w-full px-4 md:w-6/12'>
                <div className='relative flex flex-wrap justify-center'>
                  <div
                    className={clsxm(
                      'absolute top-0 -left-4 h-[2px] w-[80vw] md:w-[60vw]',
                      'bg-[linear-gradient(90deg,rgb(56,189,248)_10%,rgb(129,140,248)_30%,rgb(249,115,22)_80%)]',
                      '[mask-image:radial-gradient(80%_80%_at_left,white,transparent)]',
                      inView && 'moveleft-start'
                    )}
                    data-moveleft
                  />
                  <div
                    className={clsxm(
                      'absolute -top-4 left-0 h-[200vh] w-[2px] md:h-[60vh]',
                      'bg-[linear-gradient(0deg,rgb(249,115,22)_10%,rgb(129,140,248)_30%,rgb(56,189,248)_50%)]',
                      '[mask-image:radial-gradient(80%_90%_at_top,white,transparent)]',
                      inView && 'moveup-start'
                    )}
                    data-moveup
                  />
                  <div className='my-4 w-full px-4 lg:w-6/12'>
                    <Link href='/project'>
                      <div
                        className='rounded-lg bg-[#3178C6] p-8 text-center shadow-lg'
                        data-fade='1'
                      >
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
                      <div
                        className='mt-8 rounded-lg bg-sky-500 p-8 text-center shadow-lg'
                        data-fade='2'
                      >
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
                      <div
                        className='mt-8 rounded-lg bg-slate-700 p-8 text-center shadow-lg'
                        data-fade='3'
                      >
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
                      <div
                        className='rounded-lg bg-[#0E8AC8] p-8 text-center shadow-lg'
                        data-fade='4'
                      >
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
                      <div
                        className='mt-8 rounded-lg bg-red-700 p-8 text-center shadow-lg'
                        data-fade='5'
                      >
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
                      <div
                        className='mt-8 rounded-lg bg-[#07B6D5] p-8 text-center shadow-lg'
                        data-fade='6'
                      >
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

              <div className='ml-auto mr-auto mt-24 w-full px-12 md:w-4/12 md:px-4'>
                <div
                  className='mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center text-slate-500 shadow-lg'
                  data-fade='7'
                >
                  <i className='fas fa-drafting-compass text-xl'></i>
                </div>
                <h3
                  className='mb-2 text-3xl font-semibold leading-normal'
                  data-fade='7'
                >
                  Projects
                </h3>
                <p
                  className='mt-4 mb-4 text-lg font-light leading-relaxed text-slate-600'
                  data-fade='8'
                >
                  In order to gain more experience in developing, I always look
                  for opportunity to join a project or to work on a project
                  together.
                </p>
                <p
                  className='mt-4 mb-4 text-lg font-light leading-relaxed text-slate-600'
                  data-fade='8'
                >
                  I&apos;m always looking for new ideas to gain new knowledge.
                  Knowledge is power 💪
                </p>
                <div className='block pb-6' data-fade='9'>
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
                  data-fade='10'
                >
                  View all{' '}
                  <i className='fa fa-angle-double-right ml-1 leading-relaxed'></i>
                </UnstyledLink>
              </div>
            </div>
          </div>
        </section>
      )}
    </InView>
  );
}

function ReactComponentSection() {
  return (
    <InView triggerOnce rootMargin='40% 0px'>
      {({ ref, inView }) => (
        <section
          ref={ref}
          className={clsxm(
            'container mx-auto mb-48 overflow-hidden pb-20',
            inView && 'fade-in-start'
          )}
        >
          <div className='flex flex-wrap items-center'>
            <div className='ml-auto mr-auto mt-48 w-full px-12 md:w-4/12 md:px-4'>
              <div
                className='mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center text-slate-500 shadow-lg'
                data-fade='1'
              >
                <i className='fas fa-sitemap text-xl'></i>
              </div>
              <h3
                className='mb-2 text-3xl font-semibold leading-normal'
                data-fade='2'
              >
                React Components
              </h3>
              <p
                className='mt-4 mb-4 text-lg font-light leading-relaxed text-slate-600'
                data-fade='3'
              >
                Components that I created to tackle problems. Instead of using
                existing better library, I created my own. Sometimes it just
                overkill to use a library for a simple problem.
              </p>
              <p
                className='mt-4 mb-4 text-lg font-light leading-relaxed text-slate-600'
                data-fade='4'
              >
                I will include my result of library crafting components in this
                section too.
              </p>
              <div className='block pb-6' data-fade='5'>
                <span className='mr-2 mt-2 inline-block rounded-full bg-slate-100 py-1 px-2 text-xs font-semibold uppercase text-slate-500 last:mr-0'>
                  Filter
                </span>
                <span className='mr-2 mt-2 inline-block rounded-full bg-slate-100 py-1 px-2 text-xs font-semibold uppercase text-slate-500 last:mr-0'>
                  Chart
                </span>
                <span className='mr-2 mt-2 inline-block rounded-full bg-slate-100 py-1 px-2 text-xs font-semibold uppercase text-slate-500 last:mr-0'>
                  Table
                </span>
                <span className='mr-2 mt-2 inline-block rounded-full bg-slate-100 py-1 px-2 text-xs font-semibold uppercase text-slate-500 last:mr-0'>
                  Pagination
                </span>
                <span className='mr-2 mt-2 inline-block rounded-full bg-slate-100 py-1 px-2 text-xs font-semibold uppercase text-slate-500 last:mr-0'>
                  Router Query
                </span>
                <span className='mr-2 mt-2 inline-block rounded-full bg-slate-100 py-1 px-2 text-xs font-semibold uppercase text-slate-500 last:mr-0'>
                  Page Layout
                </span>
              </div>
              <Tooltip content={<p>Coming Soon...</p>}>
                <UnstyledLink
                  href='#'
                  className='font-bold text-slate-700 transition-all duration-150 ease-linear hover:text-slate-500'
                  data-fade='6'
                >
                  View All{' '}
                  <i className='fa fa-angle-double-right ml-1 leading-relaxed'></i>
                </UnstyledLink>
              </Tooltip>
            </div>

            <div className='mr-auto ml-auto mt-32 w-full px-4 md:w-5/12'>
              <div className='relative mb-6 mt-48 flex w-full min-w-0 flex-col md:mt-0'>
                <img
                  alt='...'
                  data-fade='1'
                  src='/images/component-btn.png'
                  className='absolute left-145-px -top-29-px z-3 w-full max-w-100-px rounded align-middle shadow-lg'
                />
                <img
                  alt='...'
                  data-fade='2'
                  src='/images/component-profile-card.png'
                  className='absolute left-260-px -top-160-px w-full max-w-210-px rounded-lg align-middle shadow-lg'
                />
                <img
                  alt='...'
                  data-fade='3'
                  src='/images/component-info-card.png'
                  className='absolute left-40-px -top-225-px z-2 w-full max-w-180-px rounded-lg align-middle shadow-lg'
                />
                <img
                  alt='...'
                  data-fade='4'
                  src='/images/component-info-2.png'
                  className='absolute -left-50-px top-25-px w-full max-w-200-px rounded-lg align-middle shadow-2xl'
                />
                <img
                  alt='...'
                  data-fade='5'
                  src='/images/component-menu.png'
                  className='absolute -left-20-px top-210-px w-full max-w-580-px rounded align-middle shadow-lg'
                />
                <img
                  alt='...'
                  data-fade='6'
                  src='/images/component-btn-pink.png'
                  className='absolute left-195-px top-95-px w-full max-w-120-px rounded align-middle shadow-xl'
                />
              </div>
            </div>
          </div>
        </section>
      )}
    </InView>
  );
}
