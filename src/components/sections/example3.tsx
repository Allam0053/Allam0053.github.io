export default function SingleSection() {
  return (
    <section className='overflow-hidden bg-blueGray-600 py-20'>
      <div className='container mx-auto pb-64'>
        <div className='flex flex-wrap justify-center'>
          <div className='ml-auto mr-auto w-full px-12 md:mt-64 md:w-5/12 md:px-4'>
            <div className='mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center text-blueGray-500 shadow-lg'>
              <i className='fas fa-code-branch text-xl'></i>
            </div>
            <h3 className='mb-2 text-3xl font-semibold leading-normal text-white'>
              Open Source
            </h3>
            <p className='mt-4 mb-4 text-lg font-light leading-relaxed text-blueGray-400'>
              Since{' '}
              <a
                href='https://tailwindcss.com/?ref=creative'
                className='text-blueGray-300'
              >
                Tailwind CSS
              </a>{' '}
              is an open source project we wanted to continue this movement too.
              You can give this version a try to feel the design and also test
              the quality of the code!
            </p>
            <p className='mt-0 mb-4 text-lg font-light leading-relaxed text-blueGray-400'>
              Get it free on Github and please help us spread the news with a
              Star!
            </p>
            <a
              href='https://github.com/creativetimofficial/notus-nextjs?ref=nnjs-index'
              className='github-star mt-4 mr-1 mb-1 inline-block rounded bg-blueGray-700 px-6 py-4 text-sm font-bold uppercase text-white shadow outline-none hover:shadow-lg focus:outline-none active:bg-blueGray-600'
            >
              Github Star
            </a>
          </div>

          <div className='relative mr-auto ml-auto mt-32 w-full px-4 md:w-4/12'>
            <i className='fab fa-github absolute -top-150-px -right-100 left-auto text-55 text-blueGray-700 opacity-80'></i>
          </div>
        </div>
      </div>
    </section>
  );
}
