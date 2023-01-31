import { buildUrl } from 'cloudinary-build-url';
import { getMDXComponent } from 'mdx-bundler/client';
import { GetStaticPaths, GetStaticProps } from 'next';
import * as React from 'react';

import clsxm from '@/lib/clsxm';
import { getFileBySlug, getFiles } from '@/lib/mdx';
import useScrollSpy from '@/hooks/useScrollspy';

import MDXComponents from '@/components/content/MDXComponents';
import TableOfContents, {
  HeadingScrollSpy,
} from '@/components/content/TableOfContents';
import Footer from '@/components/Footers/Footer';
import UnstyledLink from '@/components/links/UnstyledLink';
import IndexNavbar from '@/components/Navbars/IndexNavbar';
import Seo from '@/components/Seo';

import { ProjectType } from '@/types/frontmatters';

export default function SingleProjectPage({ code, frontmatter }: ProjectType) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  //#region  //*=========== show Clickable ===========
  const [underline, setUnderline] = React.useState(false);
  React.useEffect(() => {
    setUnderline(true);
    setTimeout(() => {
      setUnderline(false);
    }, 4000);
  }, []);
  //#endregion  //*======== show Clickable ===========

  //#region  //*=========== Content Meta ===========
  // const contentSlug = `p_${frontmatter.slug}`;
  // const meta = useContentMeta(contentSlug, { runIncrement: true });
  //#endregion  //*======== Content Meta ===========

  //#region  //*=========== Scrollspy ===========
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
  //#endregion  //*======== Scrollspy ===========

  //#region ============ Banner ===========
  const url = buildUrl(frontmatter.banner, {
    cloud: {
      cloudName: 'allam-taju',
    },
    transformations: {
      rawTransformation: `c_fill,ar_1920:420,w_1920`,
    },
  });
  //#endregion ============ Banner ===========

  return (
    <>
      <IndexNavbar />
      <Seo
        templateTitle={frontmatter.title}
        description={frontmatter.description}
        date={new Date(frontmatter.publishedAt).toISOString()}
        url={`https://allam-taju.vercel.app/projects/${frontmatter.slug}`}
      />
      <main className='profile-page'>
        <section className='relative block h-500-px'>
          <div
            className='absolute top-0 h-full w-full bg-cover bg-center'
            style={{
              backgroundImage: `url('${url}')`,
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
                <div className='justify-left flex flex-wrap'>
                  <div className='w-full px-4 lg:order-1 lg:w-4/12'>
                    <div className='flex justify-center py-4 pt-8 lg:pt-4'>
                      <div className='mr-4 p-3 text-center'>
                        <span className='block text-xl font-bold uppercase tracking-wide text-slate-600'>
                          -
                        </span>
                        <span className='text-sm text-slate-400'>Likes</span>
                      </div>
                      <div className='mr-4 p-3 text-center'>
                        <span className='block text-xl font-bold uppercase tracking-wide text-slate-600'>
                          -
                        </span>
                        <span className='text-sm text-slate-400'>Shares</span>
                      </div>
                      <div className='p-3 text-center lg:mr-4'>
                        <span className='block text-xl font-bold uppercase tracking-wide text-slate-600'>
                          -
                        </span>
                        <span className='text-sm text-slate-400'>Comments</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='mt-12 text-center'>
                  <h3 className='mb-2 text-4xl font-semibold leading-normal text-slate-700'>
                    {frontmatter.title}
                  </h3>
                  <div className='mt-0 mb-2 text-sm font-bold uppercase leading-normal text-slate-400'>
                    <UnstyledLink
                      href={`${frontmatter.link}`}
                      openNewTab={true}
                      className={clsxm(
                        'text-slate-400 hover:text-slate-500',
                        underline ? 'underline' : ''
                      )}
                    >
                      <i className='fas fa-globe mr-2 text-lg'></i>{' '}
                      {frontmatter.link}
                    </UnstyledLink>
                  </div>
                  {/* <div className='mb-2 mt-10 text-slate-600'>
                    <i className='fas fa-briefcase mr-2 text-lg text-slate-400'></i>
                    Student - Informatics Engineering (2019 - current)
                  </div>
                  <div className='mb-2 text-slate-600'>
                    <i className='fas fa-university mr-2 text-lg text-slate-400'></i>
                    Mobile Programming
                  </div> */}
                </div>
                <div className='mt-10 border-t border-slate-200 py-10 text-left'>
                  <div className='grid grid-cols-4 gap-1 lg:gap-4'>
                    <aside className='relative w-full md:px-4'>
                      <div className='sticky top-24'>
                        <TableOfContents
                          toc={toc}
                          minLevel={minLevel}
                          activeSection={activeSection}
                        />
                      </div>
                    </aside>

                    <article className='mdx prose col-span-3 px-4'>
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
                      <br />
                      <p className='text-sm font-semibold text-slate-400'>
                        Edited in {frontmatter.publishedAt}
                      </p>
                    </article>
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
