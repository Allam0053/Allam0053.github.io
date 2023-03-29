/* eslint-disable @next/next/no-img-element */
import { getMDXComponent } from 'mdx-bundler/client';
import * as React from 'react';
import { InView } from 'react-intersection-observer';

import clsxm from '@/lib/clsxm';

import MDXComponents from '@/components/content/MDXComponents';
// import useIsMounted from '@/hooks/useIsMounted';

export default function MarkdownComponent({
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
            'relative mt-10 flex w-full flex-col px-6 pt-16 pb-32 md:mt-10 md:items-center md:px-0',
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
