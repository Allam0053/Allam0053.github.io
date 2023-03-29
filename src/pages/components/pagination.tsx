// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

/* eslint-disable @next/next/no-img-element */
import { getMDXComponent } from 'mdx-bundler/client';
import { GetStaticProps } from 'next';
import * as React from 'react';
import { InView } from 'react-intersection-observer';

import clsxm from '@/lib/clsxm';
import { getFileBySlug } from '@/lib/mdx';
import usePagination, { PaginationNavigation } from '@/hooks/usePagination';

import posts from '@/data/Posts';

import MDXComponents from '@/components/content/MDXComponents';
// import useIsMounted from '@/hooks/useIsMounted';
import Footer from '@/components/Footers/Footer';
import Layout from '@/components/layout/Layout';
import IndexNavbar from '@/components/Navbars/IndexNavbar';
import Seo from '@/components/Seo';

import { ProjectFrontmatter } from '@/types/frontmatters';

export default function Page({
  code,
  frontmatter,
}: {
  code: string;
  frontmatter: ProjectFrontmatter;
}) {
  // const isMounted = useIsMounted(500);
  return (
    <Layout>
      <Seo
        templateTitle={frontmatter.title}
        description={frontmatter.description}
        date={new Date(frontmatter.publishedAt).toISOString()}
        url={`https://allam-taju.vercel.app/projects/${frontmatter.slug}`}
      />
      <IndexNavbar transparent />

      <main className='flex w-screen flex-col overflow-x-hidden'>
        <PaginationComponent />
        <MarkdownComponent code={code} />
      </main>
      <Footer />
    </Layout>
  );
}

export function PaginationComponent() {
  const { pagination, currentPage, setCurrentPage } = usePagination(posts);
  return (
    <InView triggerOnce rootMargin='-40% 0px'>
      {({ ref, inView }) => (
        <section
          ref={ref}
          className={clsxm(
            'relative mt-10 flex w-full flex-col items-center pt-16 pb-32 md:mt-10',
            inView && 'fade-in-start'
          )}
        >
          <div
            className='relative z-10 mt-2 flex flex-col items-end gap-4 text-gray-600'
            data-fade='4'
          >
            <div className='prose flex w-full flex-col gap-4 p-4'>
              {pagination.currentData &&
                pagination.currentData.map((postItem, postIndex) => (
                  <div
                    className='w-full rounded-lg bg-white p-4 shadow-md'
                    key={`${postIndex}-${postItem.id}`}
                  >
                    <div className='grid w-full grid-cols-2'>
                      <h6 className='font-semibold'>{postItem.title}</h6>
                      <p className='text-end text-xs'>{postItem.userId}</p>
                    </div>
                    <p>{postItem.body}</p>
                  </div>
                ))}
            </div>
            <div className='flex w-full justify-center'>
              <PaginationNavigation
                pagination={pagination}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </div>
        </section>
      )}
    </InView>
  );
}

export function MarkdownComponent({
  code,
}: // frontmatter,
{
  code: string;
  // frontmatter: ProjectFrontmatter;
}) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);
  return (
    <InView triggerOnce rootMargin='-40% 0px'>
      {({ ref, inView }) => (
        <section
          ref={ref}
          className={clsxm(
            'relative mt-10 flex w-full flex-col items-center pt-16 pb-4 md:mt-10',
            inView && 'fade-in-start'
          )}
        >
          <div className='prose'>
            <Component
              components={
                {
                  ...MDXComponents,
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                } as any
              }
            />
          </div>
        </section>
      )}
    </InView>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const post = await getFileBySlug('library', 'pagination');

  return {
    props: { ...post },
  };
};
