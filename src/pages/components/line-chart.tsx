/* eslint-disable @next/next/no-img-element */
import { getMDXComponent } from 'mdx-bundler/client';
import { GetStaticProps } from 'next';
import * as React from 'react';
import { InView } from 'react-intersection-observer';

import clsxm from '@/lib/clsxm';
import { getFileBySlug } from '@/lib/mdx';

import MDXComponents from '@/components/content/MDXComponents';
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
  const Component = React.useMemo(() => getMDXComponent(code), [code]);
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
        {/* <section className='header relative mb-[60px] flex h-screen max-h-860-px w-full items-center pt-16'></section> */}
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
              {/* <CloudinaryImg
                publicId={`${frontmatter.banner}`}
                alt={`Photo from unsplash: ${frontmatter.banner}`}
                width={1200}
                height={(1200 * 2) / 5}
                aspect={{ height: 2, width: 5 }}
              /> */}
              {/* <LineChart
                width={200}
                height={100}
                data={Array.from({ length: 200 }, () =>
                  Math.floor(Math.random() * 101)
                )}
              /> */}
            </section>
          )}
        </InView>
      </main>
      <Footer />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const post = await getFileBySlug('library', 'line-chart');

  return {
    props: { ...post },
  };
};
