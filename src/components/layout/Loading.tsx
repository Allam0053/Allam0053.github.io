import React from 'react';

import clsxm from '@/lib/clsxm';

import Glitter from '@/svg/glitter';
import Ico256 from '@/svg/ico256';

type LoadingPageProps = {
  isLoading: boolean;
} & React.ComponentPropsWithRef<'div'>;

export default function LoadingPage({
  // children,
  ref,
  className,
  isLoading: passedIsLoading = true,
}: LoadingPageProps) {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    if (!passedIsLoading && isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  }, [isLoading, passedIsLoading]);

  return (
    <div
      ref={ref}
      className={clsxm(
        'flex h-screen w-full flex-col items-center justify-center',
        passedIsLoading ? '' : 'fade-out',
        isLoading ? '' : 'hidden',
        className
      )}
    >
      <div className='flex w-full justify-center'>
        <div className='relative flex h-full items-center'>
          <Ico256 />
          <Glitter className='absolute top-1/2 left-1/4' />
          <Glitter className='absolute top-3/4 left-1/2' delay={100} />
        </div>
      </div>
    </div>
  );
}

export function LoadingWrapper({ children }: { children: React.ReactNode }) {
  return <div className='relative h-screen w-screen'>{children}</div>;
}
