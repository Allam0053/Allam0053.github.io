import * as React from 'react';
import { InView } from 'react-intersection-observer';

import clsxm from '@/lib/clsxm';

export default function Section() {
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
          {/* content */}
          {/* content */}
          {/* content */}
        </section>
      )}
    </InView>
  );
}
