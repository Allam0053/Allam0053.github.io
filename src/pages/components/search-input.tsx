// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

/* eslint-disable @next/next/no-img-element */
// import { getMDXComponent } from 'mdx-bundler/client';
import { GetStaticProps } from 'next';
import * as React from 'react';

// import { InView } from 'react-intersection-observer';
// import clsxm from '@/lib/clsxm';
import { getFileBySlug } from '@/lib/mdx';

// import usePagination, { PaginationNavigation } from '@/hooks/usePagination';
// import posts from '@/data/Posts';
// import MDXComponents from '@/components/content/MDXComponents';
// import useIsMounted from '@/hooks/useIsMounted';
import Footer from '@/components/Footers/Footer';
import Layout from '@/components/layout/Layout';
import IndexNavbar from '@/components/Navbars/IndexNavbar';
import Seo from '@/components/Seo';

import { ProjectFrontmatter } from '@/types/frontmatters';

export default function Page({
  // code,
  frontmatter,
}: {
  // code: string;
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
        {/* <SearchInputComponent /> */}
        {/* <MarkdownComponent code={code} /> */}
      </main>
      <Footer />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const post = await getFileBySlug('library', 'search-input');

  return {
    props: { ...post },
  };
};
