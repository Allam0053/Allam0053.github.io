/* eslint-disable @next/next/no-img-element */
import { GetStaticProps } from 'next';
import * as React from 'react';

import { getFileBySlug } from '@/lib/mdx';

import Footer from '@/components/Footers/Footer';
import Layout from '@/components/layout/Layout';
import IndexNavbar from '@/components/Navbars/IndexNavbar';
import MarkdownComponent from '@/components/sections/MarkdownComponent';
import Seo from '@/components/Seo';

import { ProjectFrontmatter } from '@/types/frontmatters';

export default function Page({
  code,
  frontmatter,
}: {
  code: string;
  frontmatter: ProjectFrontmatter;
}) {
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
        <MarkdownComponent code={code} />
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
