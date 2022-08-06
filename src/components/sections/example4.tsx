export default function SingleSection() {
  return (
    <section className='relative bg-blueGray-200 pb-16 pt-32'>
      <div
        className='absolute top-0 bottom-auto left-0 right-0 -mt-20 h-20 w-full'
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
            className='fill-current text-blueGray-200'
            points='2560 0 2560 100 0 100'
          ></polygon>
        </svg>
      </div>

      <div className='container mx-auto'>
        <div className='relative z-10 -mt-64 flex flex-wrap justify-center rounded-lg bg-white py-16 px-12 shadow-xl'>
          <div className='w-full text-center lg:w-8/12'>
            <p className='text-center text-4xl'>
              <span role='img' aria-label='love'>
                😍
              </span>
            </p>
            <h3 className='text-3xl font-semibold'>
              Do you love this Starter Kit?
            </h3>
            <p className='mt-4 mb-4 text-lg leading-relaxed text-blueGray-500'>
              Cause if you do, it can be yours now. Hit the buttons below to
              navigate to get the Free version for your next project. Build a
              new web app or give an old project a new look!
            </p>
            <div className='mt-10 flex flex-col sm:block'>
              <a
                href='https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus?ref=nnjs-index'
                className='get-started mr-1 mb-2 rounded bg-blueGray-400 px-6 py-4 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-blueGray-500'
              >
                Get started
              </a>
              <a
                href='https://github.com/creativetimofficial/notus-nextjs?ref=nnjs-index'
                className='github-star mr-1 mb-1 rounded bg-blueGray-700 px-6 py-4 text-sm font-bold uppercase text-white shadow outline-none hover:shadow-lg focus:outline-none active:bg-blueGray-600 sm:ml-1'
              >
                <i className='fab fa-github mr-1 text-lg'></i>
                <span>Help With a Star</span>
              </a>
            </div>
            <div className='mt-16 text-center'></div>
          </div>
        </div>
      </div>
    </section>
  );
}
