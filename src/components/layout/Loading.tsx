import clsxm from '@/lib/clsxm';

import Glitter from '@/svg/glitter';
import Ico256 from '@/svg/ico256';

export default function LoadingPage() {
  return (
    <>
      <div
        className={clsxm(
          'flex h-screen w-full flex-col items-center justify-center'
        )}
      >
        <div className={clsxm('flex w-full justify-center')}>
          <div className='relative flex h-full items-center'>
            <Ico256 />
            <Glitter className='absolute top-1/2 left-1/4' />
            <Glitter className='absolute top-3/4 left-1/2' delay={100} />
          </div>
        </div>
      </div>
    </>
  );
}
