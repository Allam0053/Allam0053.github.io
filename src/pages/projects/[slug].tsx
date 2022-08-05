import { getMDXComponent } from 'mdx-bundler/client';
import { GetStaticPaths, GetStaticProps } from 'next';
import * as React from 'react';

import { getFileBySlug, getFiles } from '@/lib/mdx';

import MDXComponents from '@/components/content/MDXComponents';
import Footer from '@/components/Footers/Footer';
import UnstyledLink from '@/components/links/UnstyledLink';
import Navbar from '@/components/Navbars/AuthNavbar';
import Seo from '@/components/Seo';

import { ProjectType } from '@/types/frontmatters';

export default function SingleProjectPage({ code, frontmatter }: ProjectType) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  //#region  //*=========== Content Meta ===========
  // const contentSlug = `p_${frontmatter.slug}`;
  // const meta = useContentMeta(contentSlug, { runIncrement: true });
  //#endregion  //*======== Content Meta ===========

  //#region  //*=========== Scrollspy ===========
  /*
  const activeSection = useScrollSpy();

  const [toc, setToc] = React.useState<HeadingScrollSpy>();
  const minLevel =
    toc?.reduce((min, item) => (item.level < min ? item.level : min), 10) ?? 0;

  React.useEffect(() => {
    const headings = document.querySelectorAll('.mdx h1, .mdx h2, .mdx h3');

    const headingArr: HeadingScrollSpy = [];
    headings.forEach((heading) => {
      const id = heading.id;
      const level = +heading.tagName.replace('H', '');
      const text = heading.textContent + '';

      headingArr.push({ id, level, text });
    });

    setToc(headingArr);
  }, [frontmatter.slug]);
  */
  //#endregion  //*======== Scrollspy ===========

  return (
    <>
      <Navbar />
      <Seo
        templateTitle={frontmatter.title}
        description={frontmatter.description}
        date={new Date(frontmatter.publishedAt).toISOString()}
      />
      <main className='profile-page'>
        <section className='relative block h-500-px'>
          <div
            className='absolute top-0 h-full w-full bg-cover bg-center'
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
            }}
          >
            <span
              id='blackOverlay'
              className='absolute h-full w-full bg-black opacity-50'
            ></span>
          </div>
          <div
            className='pointer-events-none absolute top-auto bottom-0 left-0 right-0 h-16 w-full overflow-hidden'
            style={{ transform: 'translateZ(0)' }}
          >
            <svg
              className='absolute bottom-0 overflow-hidden'
              xmlns='http://www.w3.org/2000/svg'
              preserveAspectRatio='none'
              version='1.1'
              viewBox='0 0 2560 100'
              x='0'
              y='0'
            >
              <polygon
                className='fill-current text-slate-200'
                points='2560 0 2560 100 0 100'
              ></polygon>
            </svg>
          </div>
        </section>
        <section className='relative bg-slate-200 py-16'>
          <div className='container mx-auto px-4'>
            <div className='relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-xl'>
              <div className='px-6'>
                <div className='mt-12 text-center'>
                  <h3 className='mb-2 text-4xl font-semibold leading-normal text-slate-700'>
                    {frontmatter.title}
                  </h3>
                  <div className='mt-0 mb-2 text-sm font-bold uppercase leading-normal text-slate-400'>
                    <UnstyledLink
                      href={`https://www.google.com/maps/dir//'-7.982745,112.133692'/`}
                      openNewTab={true}
                      className='text-slate-400 hover:text-slate-500'
                    >
                      <i className='fas fa-map-marker-alt mr-2 text-lg'></i>{' '}
                      Blitar, East Java
                    </UnstyledLink>
                  </div>
                  <div className='mb-2 mt-10 text-slate-600'>
                    <i className='fas fa-briefcase mr-2 text-lg text-slate-400'></i>
                    Student - Informatics Engineering (2019 - current)
                  </div>
                  <div className='mb-2 text-slate-600'>
                    <i className='fas fa-university mr-2 text-lg text-slate-400'></i>
                    Institut Teknologi Sepuluh Nopember
                  </div>
                </div>
                <div className='mt-10 border-t border-slate-200 py-10 text-left'>
                  <div className='flex flex-wrap justify-center'>
                    <div className='w-full px-4 lg:w-9/12'>
                      <Component
                        components={
                          {
                            ...MDXComponents,
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                          } as any
                        }
                      />

                      {/* <p className='mb-4 text-lg leading-relaxed text-slate-700'>
                        {`Hello, I'm Allam. I'm a student of Informatics Engineering at ITS. I have so much interest in tech and I really like building apps. Currently, I have been creating web apps and mobile apps. I have been programming in PHP for about a year. I really enjoy learning many things such as routing, handling data, and many more in laravel. Now I am interested in javascript. I think this language is greatly popular so I had to learn it. It is a beautiful language with high versatility I think. The syntax is quite tricky and that's what makes it fascinating.`}
                      </p> */}
                      <p className='text-sm font-semibold text-slate-400'>
                        Edited in 2021
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getFiles('projects');

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const post = await getFileBySlug('projects', params?.slug as string);

  return {
    props: { ...post },
  };
};
