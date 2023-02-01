import { InferGetStaticPropsType } from 'next';
import * as React from 'react';

import { getAllFilesFrontmatter } from '@/lib/mdx';
import { getTags, sortByDate } from '@/lib/mdx-client';

import BlogCard from '@/components/content/blog/BlogCard';
import Footer from '@/components/Footers/Footer';
import Layout from '@/components/layout/Layout';
import IndexNavbar from '@/components/Navbars/IndexNavbar';
import Seo from '@/components/Seo';

export default function ProjectsPage({
  posts,
}: // tags,
InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <Seo
        templateTitle='Projects'
        description='Showcase of my projects on various tech.'
        siteName='Allam Taju'
        url='https://allam-taju.vercel.app/'
      />

      <IndexNavbar />
      <main>
        <section className='-mt-24 bg-slate-200 pb-20 pt-8'>
          <div className='container mx-auto mt-40 px-4 '>
            <h1
              className='text-3xl font-semibold text-slate-600 md:text-5xl'
              data-fade='0'
            >
              BLOGS
            </h1>
            <p
              data-fade='1'
              className='mt-2 mb-8 tracking-tight text-slate-500'
            >
              Here is where I&apos;m flexing my writes.
            </p>
            <div className='grid list-none gap-4 sm:grid-cols-2 md:p-2 xl:grid-cols-3'>
              {posts.map((post) => (
                <BlogCard
                  key={post.slug}
                  post={post}
                  // checkTagged={checkTagged}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}

export async function getStaticProps() {
  const files = await getAllFilesFrontmatter('blog');
  const posts = sortByDate(files);

  // Accumulate tags and remove duplicate
  const tags = getTags(posts);

  return { props: { posts, tags } };
}
