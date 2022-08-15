/* eslint-disable @next/next/no-img-element */
import UnstyledLink from '@/components/links/UnstyledLink';

export default function SingleSection() {
  return (
    <section className='z-1 relative block bg-slate-600'>
      <div className='container mx-auto'>
        <div className='flex flex-wrap justify-center'>
          <div className='lg:w-12/12 -mt-24 w-full  px-4'>
            <div className='flex flex-wrap'>
              <div className='w-full px-4 lg:w-4/12'>
                <h5 className='pb-4 text-center text-xl font-semibold'>
                  Login Page
                </h5>
                <UnstyledLink href='/auth/login'>
                  <div className='relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-lg transition-all duration-150 ease-linear hover:-mt-4'>
                    <img
                      alt='...'
                      className='h-auto max-w-full rounded-lg border-none align-middle'
                      src='/images/login.jpg'
                    />
                  </div>
                </UnstyledLink>
              </div>

              <div className='w-full px-4 lg:w-4/12'>
                <h5 className='pb-4 text-center text-xl font-semibold'>
                  Profile Page
                </h5>
                <UnstyledLink href='/profile'>
                  <div className='relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-lg transition-all duration-150 ease-linear hover:-mt-4'>
                    <img
                      alt='...'
                      className='h-auto max-w-full rounded-lg border-none align-middle'
                      src='/images/profile.jpg'
                    />
                  </div>
                </UnstyledLink>
              </div>

              <div className='w-full px-4 lg:w-4/12'>
                <h5 className='pb-4 text-center text-xl font-semibold'>
                  Landing Page
                </h5>
                <UnstyledLink href='/landing'>
                  <div className='relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-lg transition-all duration-150 ease-linear hover:-mt-4'>
                    <img
                      alt='...'
                      className='h-auto max-w-full rounded-lg border-none align-middle'
                      src='/images/landing.jpg'
                    />
                  </div>
                </UnstyledLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
