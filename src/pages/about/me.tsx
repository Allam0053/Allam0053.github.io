/* eslint-disable @next/next/no-img-element */
import { getMDXComponent } from 'mdx-bundler/client';
import * as React from 'react';

import clsxm from '@/lib/clsxm';
import { getAboutMeExpContent, getExpTags } from '@/lib/mdx';
import { getTags } from '@/lib/mdx-client';
import useContentMeta from '@/hooks/useContentMeta';

import Accent from '@/components/Accent';
import MDXComponents from '@/components/content/MDXComponents';
import Footer from '@/components/Footers/Footer';
import LoadingPage from '@/components/layout/Loading';
import UnstyledLink from '@/components/links/UnstyledLink';
import IndexNavbar from '@/components/Navbars/IndexNavbar';
import Seo from '@/components/Seo';
import Tooltip from '@/components/Tooltip';

import { ExpFrontmatter } from '@/types/frontmatters';

export default function Profile({ timelines, tags }: ProfileProps) {
  const [loading, setLoading] = React.useState(false);
  // const Component = React.useMemo(() => getMDXComponent(code), [code]);

  const meta = useContentMeta('me', { runIncrement: true });

  //#region  //*=========== Tag ===========
  const [search, setSearch] = React.useState<string>('');

  // const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearch(e.target.value);
  // };
  // const clearSearch = () => setSearch('');

  const toggleTag = (tag: string) => {
    // If tag is already there, then remove
    if (search.includes(tag)) {
      setSearch((s) =>
        s
          .split(' ')
          .filter((t) => t !== tag)
          ?.join(' ')
      );
    } else {
      // append tag
      setSearch((s) => (s !== '' ? `${s.trim()} ${tag}` : tag));
    }
  };

  /** Currently available tags based on filtered posts */
  const filteredTags = getTags(timelines.map((t) => t.frontmatter));

  /** Show accent if not disabled and selected  */
  const checkTagged = (tag: string) => {
    return (
      filteredTags.includes(tag) &&
      search.toLowerCase().split(' ').includes(tag)
    );
  };

  const Components = React.useMemo(
    () =>
      timelines
        ? timelines
            .filter((c) => {
              const componentsTag = c.frontmatter.tags;
              return search
                .toLowerCase()
                .split(' ')
                .every((tag) => componentsTag.includes(tag));
            })
            .map((timeline) => getMDXComponent(timeline.code))
        : [],
    [search, timelines]
  );
  //#endregion  //*======== Tag ===========

  const [toolTipShowed, setToolTipShowed] = React.useState(false);
  const toolTipRefCV = React.useRef(null);
  const toolTipRefAchivement = React.useRef(null);
  const toolTipRefTranscript = React.useRef(null);

  const triggerMouseEnterToolTip = React.useCallback(() => {
    const eventEnter = new MouseEvent('mouseenter', {
      view: window,
      bubbles: true,
      cancelable: true,
    });
    const eventLeave = new MouseEvent('mouseleave', {
      view: window,
      bubbles: true,
      cancelable: true,
    });
    const refs = [toolTipRefCV, toolTipRefAchivement, toolTipRefTranscript];
    let index = 0;
    const triggerNext = () => {
      if (index < refs.length) {
        const ref = refs[index];
        if ((ref.current as unknown as HTMLElement)?.dispatchEvent) {
          (ref.current as unknown as HTMLElement).dispatchEvent(eventEnter);
          setTimeout(() => {
            (ref.current as unknown as HTMLElement).dispatchEvent(eventLeave);
          }, 1500);
        }
        index++;
        setTimeout(triggerNext, 2000);
      }
    };
    triggerNext();
  }, []);

  React.useEffect(() => {
    setLoading((_l) => true);
    setTimeout(() => setLoading((_l) => false), 500);
  }, []);

  React.useEffect(() => {
    if (loading) return;
    if (toolTipShowed) return;
    triggerMouseEnterToolTip();
    setToolTipShowed(true);
  }, [loading, toolTipShowed, triggerMouseEnterToolTip]);

  return (
    <>
      <Seo
        title='Allam Taju Sarof'
        templateTitle='Allam Taju Sarof'
        description='All about Allam Taju Sarof'
        siteName='Allam Taju'
        url='https://allam-taju.vercel.app'
      />
      {loading && <LoadingPage />}
      <IndexNavbar transparent className={loading ? '' : 'fade-in-start'} />
      <main className={clsxm('profile-page', !loading && 'fade-in-start')}>
        <section className='relative block h-500-px' data-fade='1'>
          <div
            className='absolute top-0 h-full w-full bg-cover bg-center'
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
            }}
          >
            <span
              id='blackOverlay'
              className='absolute h-full w-full bg-sky-100 opacity-50 dark:bg-black'
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
            <div className='relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-lg bg-white px-6 shadow-xl'>
              <div className='flex flex-wrap justify-center'>
                <div
                  className='flex w-full justify-center px-4 lg:order-2 lg:w-3/12'
                  data-fade='2'
                >
                  <div className='relative'>
                    <img
                      alt='Allam Taju Sarof Formal Pic'
                      src='/images/1.jpeg'
                      className='absolute -m-16 -ml-20 h-auto max-w-150-px rounded-full border-none align-middle shadow-xl lg:-ml-16'
                    />
                  </div>
                </div>
                <div className='w-full px-4 lg:order-3 lg:w-4/12 lg:self-center lg:text-right'>
                  <div className='mt-32 py-6 px-3 sm:mt-0'>
                    <Tooltip content={<p>My Newest Experiences Update</p>}>
                      <UnstyledLink
                        href='https://drive.google.com/file/d/1B-rjYu7hvr7efGAfmVsYM7yfhQsPx9Jh/view?usp=sharing'
                        openNewTab
                        ref={toolTipRefCV}
                      >
                        <button
                          className='mb-1 mr-2 rounded bg-slate-700 px-4 py-2 text-xs font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-md focus:outline-none active:bg-slate-600 sm:mr-2'
                          type='button'
                          data-fade='3'
                        >
                          My CV
                        </button>
                      </UnstyledLink>
                    </Tooltip>
                    <Tooltip content={<p>My Sertifications</p>}>
                      <UnstyledLink
                        href='https://drive.google.com/drive/folders/18iwsqkAHBErE1cCLR7HqfPhN61jNr06C?usp=sharing'
                        openNewTab
                        ref={toolTipRefAchivement}
                      >
                        <button
                          className='mb-1 mr-2 rounded bg-slate-700 px-4 py-2 text-xs font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-md focus:outline-none active:bg-slate-600 sm:mr-2'
                          type='button'
                          data-fade='4'
                        >
                          Achievement
                        </button>
                      </UnstyledLink>
                    </Tooltip>

                    <Tooltip
                      content={<p>Temporary Transcript for Current Semester</p>}
                    >
                      <UnstyledLink
                        href='https://drive.google.com/file/d/1B1aNAQLiaTr83QqidmytwgghvUIuJk5H/view?usp=sharing'
                        openNewTab
                        ref={toolTipRefTranscript}
                      >
                        <button
                          className='mb-1 rounded bg-slate-700 px-4 py-2 text-xs font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-md focus:outline-none active:bg-slate-600 sm:mr-2'
                          type='button'
                          data-fade='5'
                        >
                          My Transcript
                        </button>
                      </UnstyledLink>
                    </Tooltip>
                  </div>
                </div>
                <div className='w-full px-4 lg:order-1 lg:w-4/12'>
                  <div className='flex justify-center py-4 pt-8 lg:pt-4'>
                    <div className='mr-4 p-3 text-center'>
                      <span className='block text-xl font-bold uppercase tracking-wide text-slate-600'>
                        {meta?.views?.toLocaleString() ?? '–––'}
                      </span>
                      <span className='text-sm text-slate-400'>Visit</span>
                    </div>
                    {/* <div className='mr-4 p-3 text-center'>
                        <span className='block text-xl font-bold uppercase tracking-wide text-slate-600'>
                          {meta?.likesByUser?.toLocaleString() ?? '–––'}
                        </span>
                        <span className='text-sm text-slate-400'>Likes</span>
                      </div> */}
                    {/* <div className='p-3 text-center lg:mr-4'>
                        <span className='block text-xl font-bold uppercase tracking-wide text-slate-600'>
                          -
                        </span>
                        <span className='text-sm text-slate-400'>Shares</span>
                      </div> */}
                  </div>
                </div>
              </div>
              <div className='mt-12 text-center'>
                <h3 className='mb-2 text-4xl font-semibold leading-normal text-slate-700'>
                  Allam Taju Sarof
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
              <div className='mt-10 border-t border-slate-200 py-10 text-center'>
                <div className='flex flex-wrap justify-center'>
                  <div className='w-full px-4 lg:w-9/12'>
                    <p className='mb-4 text-sm leading-relaxed text-slate-700 md:text-lg'>
                      {`Hello, I'm Allam. I'm a student of Informatics Engineering at ITS. I have so much interest in tech and I really like building apps. Currently, I have been creating web apps and mobile apps. I have been programming in PHP for about a year. I really enjoy learning many things such as routing, handling data, and many more in laravel. Now I am interested in javascript. I think this language is greatly popular so I had to learn it. It is a beautiful language with high versatility I think. The syntax is quite tricky and that's what makes it fascinating.`}
                    </p>
                    <p className='text-sm font-semibold text-slate-400'>
                      Edited in 2021
                    </p>
                  </div>
                </div>
              </div>

              <div
                className='inline-flex w-full flex-col items-center gap-4 px-4'
                data-fade='6'
              >
                <span className='w-full font-medium'>Choose topic:</span>
                <div className='flex w-full flex-wrap justify-items-start gap-4'>
                  {tags.map((tag) => (
                    <button
                      type='button'
                      className='mr-1 rounded bg-slate-200 py-1 px-2 text-xs font-semibold uppercase text-slate-600'
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      disabled={!filteredTags.includes(tag)}
                    >
                      {checkTagged(tag) ? <Accent>{tag}</Accent> : tag}
                    </button>
                  ))}
                </div>
              </div>

              <div
                className='flex w-full flex-col items-center px-4 py-8'
                data-fade='7'
              >
                <ol className='relative w-full border-l border-gray-200 dark:border-gray-700'>
                  {Components &&
                    Components.map((Component, index) => (
                      <li className='mb-10 ml-6 w-full' key={`tl-${index}`}>
                        <span
                          className={clsxm(
                            'absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full',
                            'bg-blue-200 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900'
                          )}
                        >
                          <svg
                            aria-hidden='true'
                            className={clsxm(
                              'h-3 w-3',
                              'text-blue-600 dark:text-blue-400'
                            )}
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              fillRule='evenodd'
                              d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                              clipRule='evenodd'
                            ></path>
                          </svg>
                        </span>
                        <div className='prose'>
                          <Component
                            key={index}
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            components={{ ...MDXComponents } as any}
                          />
                        </div>
                      </li>
                    ))}
                </ol>
                {/* <Timeline
                    content={[
                      {
                        title: 'Frontend Development Intern at Telkomsel',
                        date: 'Feb - Jul 2022',
                        description: `Implement UI design to web, display data from Backend, API testing and bug fixing, Deploy web App for Network Performance Area (NPA) Area 3, Java-BaliNusra`,
                      },
                      {
                        title: 'Web Developer Freelancer at BKD Jatim',
                        date: 'Jan - Feb 2022',
                        description: `Create a web-based application for a psycho test using Laravel`,
                      },
                    ]}
                  /> */}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const contents = await getAboutMeExpContent();

  // Accumulate tags and remove duplicate
  const tags = await getExpTags();

  return {
    props: { timelines: contents, tags },
  };
}

type ProfileProps = {
  timelines: {
    code: string;
    frontmatter: ExpFrontmatter;
  }[];
  tags: string[];
};
