import { InferGetStaticPropsType } from 'next';
import * as React from 'react';

import { getAllFilesFrontmatter } from '@/lib/mdx';
import { sortByDate } from '@/lib/mdx-client';

import ProjectCard from '@/components/content/ProjectCard';
import Footer from '@/components/Footers/Footer';
import Layout from '@/components/layout/Layout';
import IndexNavbar from '@/components/Navbars/IndexNavbar';
import Seo from '@/components/Seo';

export default function ProjectsPage({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <Seo
        templateTitle='Projects'
        description='Showcase of my projects on various tech.'
        siteName='Allam Taju'
        url='https://allam-taju.vercel.app'
      />

      <IndexNavbar />
      <main>
        <section className='-mt-24 bg-slate-200 pb-20 pt-8'>
          <div className='container mx-auto mt-40 px-4 '>
            <h1
              className='text-3xl font-semibold text-slate-600 md:text-5xl'
              data-fade='0'
            >
              PROJECTS
            </h1>
            <p
              data-fade='1'
              className='mt-2 mb-8 tracking-tight text-slate-500'
            >
              Here is where I&apos;m flexing my works.
            </p>
            <div className='grid gap-4 sm:grid-cols-2 md:p-2 xl:grid-cols-3'>
              {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
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
  const files = await getAllFilesFrontmatter('projects');
  const projects = sortByDate(files);

  return { props: { projects } };
}
