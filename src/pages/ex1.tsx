import React from 'react';

import Layout from '@/components/layout/Layout';
import IndexNavbar from '@/components/Navbars/IndexNavbar';
import Example1 from '@/components/sections/example1';
import Seo from '@/components/Seo';
import Tooltip from '@/components/Tooltip';

import Glitter from '@/svg/glitter';
import Ico from '@/svg/ico';

export default function Ex1() {
  const [num, setNum] = React.useState(0);
  // const [glitter, setGlitter] = React.useState(0);
  return (
    <Layout>
      <Seo
        templateTitle='Projects'
        description='Showcase of my projects on various tech.'
        siteName='Allam Taju'
        url='https://allam-taju.vercel.app/'
      />
      <IndexNavbar />
      <div className='flex h-screen w-screen flex-col justify-center'>
        <div className='flex w-full justify-center'>
          <Ico num={num} />
        </div>
        <div className='flex w-full justify-center gap-4'>
          <Tooltip content={<p>Fill The Icon</p>}>
            <button
              className='mb-1 mr-2 rounded bg-slate-700 px-4 py-2 text-xs font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-md focus:outline-none active:bg-slate-600 sm:mr-2'
              type='button'
              onClick={() => setNum((prev) => prev + 1)}
            >
              increase
            </button>
          </Tooltip>
          <Tooltip content={<p>Numb The Icon</p>}>
            <button
              className='mb-1 mr-2 rounded bg-slate-700 px-4 py-2 text-xs font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-md focus:outline-none active:bg-slate-600 sm:mr-2'
              type='button'
              onClick={() => setNum((prev) => prev - 1)}
            >
              decrease
            </button>
          </Tooltip>
        </div>
        <div className='flex w-full justify-center'>
          <Glitter />
        </div>
        <div className='flex w-full justify-center gap-4'>
          <Tooltip content={<p>Ignite The Star</p>}>
            <button
              className='mb-1 mr-2 rounded bg-slate-700 px-4 py-2 text-xs font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-md focus:outline-none active:bg-slate-600 sm:mr-2'
              type='button'
            >
              glitter
            </button>
          </Tooltip>
        </div>
      </div>
      <Example1 />
    </Layout>
  );
}
