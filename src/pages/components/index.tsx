/* eslint-disable @next/next/no-img-element */
// !STARTERCONF You can delete this page
import * as React from 'react';
import { InView } from 'react-intersection-observer';

import clsxm from '@/lib/clsxm';
import usePagination, { PaginationNavigation } from '@/hooks/usePagination';

import LineChart from '@/components/chart/line';
import Footer from '@/components/Footers/Footer';
import Layout from '@/components/layout/Layout';
import UnstyledLink from '@/components/links/UnstyledLink';
import IndexNavbar from '@/components/Navbars/IndexNavbar';
import Seo from '@/components/Seo';

// type Color = (typeof colorList)[number];

export default function ComponentsPage() {
  // const lineChartImageUrl = React.useMemo(() => {
  //   return buildUrl('line-chart_a5hysg.png', {
  //     cloud: {
  //       cloudName: 'allam-taju',
  //     },
  //     transformations: {
  //       rawTransformation: `c_fill,ar_480:240,w_480`,
  //     },
  //   });
  // }, []);
  return (
    <Layout>
      <Seo templateTitle='Components' description='Crafted components' />
      <IndexNavbar transparent />

      <main className='flex w-screen flex-col overflow-x-hidden'>
        <LineChartComponent />
        <PaginationComponent />
      </main>
      <Footer />
    </Layout>
  );
}

export function LineChartComponent() {
  return (
    <InView triggerOnce rootMargin='-40% 0px'>
      {({ ref, inView }) => (
        <section
          className={clsxm(
            'relative bg-slate-100 pb-40',
            inView && 'fade-in-start'
          )}
          ref={ref}
        >
          <div className='container mx-auto px-4 pb-32 pt-48'>
            <div className='flex flex-wrap items-center'>
              <div className='ml-auto w-full px-12 md:w-5/12 md:px-4'>
                <div className='md:pr-12'>
                  <div
                    className='mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center text-slate-500 shadow-lg'
                    data-fade='1'
                  >
                    <i className='fas fa-chart-line text-xl'></i>
                  </div>
                  <h3 className='text-3xl font-semibold' data-fade='2'>
                    Simple D3 Line Chart Component
                  </h3>
                  <p
                    className='mt-4 text-lg leading-relaxed text-slate-500'
                    data-fade='3'
                  >
                    You can put it everywhere because it can be really small.
                    Less detailed info make it suitable for concise
                    visualization. Fit into table component.
                  </p>
                  <UnstyledLink
                    href='/components/line-chart'
                    className='py-4 font-bold text-slate-700 transition-all duration-150 ease-linear hover:text-slate-500'
                    data-fade='4'
                  >
                    View Detail{' '}
                    <i className='fa fa-angle-double-right ml-1 leading-relaxed'></i>
                  </UnstyledLink>
                  <ul className='mt-6 list-none'>
                    <li className='py-2' data-fade='5'>
                      <div className='flex items-center'>
                        <div>
                          <span className='mr-3 inline-block rounded-full bg-slate-50 py-1 px-2 text-xs font-semibold uppercase text-slate-500'>
                            <i className='fas fa-fingerprint'></i>
                          </span>
                        </div>
                        <div>
                          <h4 className='text-slate-500'>
                            Built by Developers for Developers
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className='py-2' data-fade='6'>
                      <div className='flex items-center'>
                        <div>
                          <span className='mr-3 inline-block rounded-full bg-slate-50 py-1 px-2 text-xs font-semibold uppercase text-slate-500'>
                            <i className='fab fa-html5'></i>
                          </span>
                        </div>
                        <div>
                          <h4 className='text-slate-500'>
                            Carefully crafted code for Components
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className='py-2' data-fade='7'>
                      <div className='flex items-center'>
                        <div>
                          <span className='mr-3 inline-block rounded-full bg-slate-50 py-1 px-2 text-xs font-semibold uppercase text-slate-500'>
                            <i className='far fa-paper-plane'></i>
                          </span>
                        </div>
                        <div>
                          <h4 className='text-slate-500'>
                            Dynamic Javascript Components
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='mr-auto flex w-full px-4 pt-24 md:w-6/12 md:pt-0'>
                {/* <img
                  alt='...'
                  className='max-w-full rounded-lg shadow-xl'
                  style={{
                    transform:
                      'scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)',
                  }}
                  src={lineChartImageUrl}
                /> */}
                <div
                  className='flex max-w-full rounded-lg p-4 shadow-xl'
                  style={{
                    transform:
                      'scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)',
                  }}
                >
                  <LineChart
                    width={200}
                    height={100}
                    data={Array.from({ length: 200 }, () =>
                      Math.floor(Math.random() * 101)
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </InView>
  );
}

export function PaginationComponent() {
  const { pagination, currentPage, setCurrentPage } = usePagination(
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    2
  );
  return (
    <InView triggerOnce rootMargin='-40% 0px'>
      {({ ref, inView }) => (
        <section
          className={clsxm(
            'relative bg-slate-100 pb-40',
            inView && 'fade-in-start'
          )}
          ref={ref}
        >
          <div className='container mx-auto px-4 pb-32 pt-48'>
            <div className='flex flex-wrap items-center'>
              <div className='ml-auto w-full px-12 md:w-5/12 md:px-4'>
                <div className='md:pr-12'>
                  <div
                    className='mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center text-slate-500 shadow-lg'
                    data-fade='1'
                  >
                    <i className='fas fa-cabinet-filing text-xl'></i>
                  </div>
                  <h3 className='text-3xl font-semibold' data-fade='2'>
                    Pagination
                  </h3>
                  <p
                    className='mt-4 text-lg leading-relaxed text-slate-500'
                    data-fade='3'
                  >
                    Pagination implementation. Limit rendered data can&apos;t be
                    more simple that paginating.
                  </p>
                  <UnstyledLink
                    href='/components/pagination'
                    className='py-4 font-bold text-slate-700 transition-all duration-150 ease-linear hover:text-slate-500'
                    data-fade='4'
                  >
                    View Detail{' '}
                    <i className='fa fa-angle-double-right ml-1 leading-relaxed'></i>
                  </UnstyledLink>
                  <ul className='mt-6 list-none'>
                    <li className='py-2' data-fade='5'>
                      <div className='flex items-center'>
                        <div>
                          <span className='mr-3 inline-block rounded-full bg-slate-50 py-1 px-2 text-xs font-semibold uppercase text-slate-500'>
                            <i className='fas fa-fingerprint'></i>
                          </span>
                        </div>
                        <div>
                          <h4 className='text-slate-500'>
                            Built by Developers for Developers
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className='py-2' data-fade='6'>
                      <div className='flex items-center'>
                        <div>
                          <span className='mr-3 inline-block rounded-full bg-slate-50 py-1 px-2 text-xs font-semibold uppercase text-slate-500'>
                            <i className='fab fa-html5'></i>
                          </span>
                        </div>
                        <div>
                          <h4 className='text-slate-500'>
                            Carefully crafted code for Components
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className='py-2' data-fade='7'>
                      <div className='flex items-center'>
                        <div>
                          <span className='mr-3 inline-block rounded-full bg-slate-50 py-1 px-2 text-xs font-semibold uppercase text-slate-500'>
                            <i className='far fa-paper-plane'></i>
                          </span>
                        </div>
                        <div>
                          <h4 className='text-slate-500'>
                            Dynamic Javascript Components
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='mr-auto flex w-full px-4 pt-24 md:w-6/12 md:pt-0'>
                {/* <img
                  alt='...'
                  className='max-w-full rounded-lg shadow-xl'
                  style={{
                    transform:
                      'scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)',
                  }}
                  src={lineChartImageUrl}
                /> */}
                <div
                  className='flex max-w-full flex-col rounded-lg p-4 shadow-xl'
                  style={{
                    transform:
                      'scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)',
                  }}
                >
                  {pagination.currentData &&
                    pagination.currentData.map((val, index) => (
                      <h6 className='text-sm font-bold' key={`${index}-${val}`}>
                        {val}
                      </h6>
                    ))}
                  <PaginationNavigation
                    pagination={pagination}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </InView>
  );
}
