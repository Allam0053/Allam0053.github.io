import React from 'react';

type FooterSmallProps = {
  absolute?: boolean;
} & React.ComponentPropsWithoutRef<'div'>;

export default function FooterSmall(props: FooterSmallProps) {
  return (
    <>
      <footer
        className={
          (props.absolute
            ? 'absolute bottom-0 w-full bg-slate-800'
            : 'relative') + ' pb-6'
        }
      >
        <div className='container mx-auto px-4'>
          <hr className='border-b-1 mb-6 border-slate-600' />
          <div className='flex flex-wrap items-center justify-center md:justify-between'>
            <div className='w-full px-4 md:w-4/12'>
              <div className='py-1 text-center text-sm font-semibold text-slate-500 md:text-left'>
                Copyright © {new Date().getFullYear()}{' '}
                <a
                  href='https://www.creative-tim.com?ref=nnjs-footer-small'
                  className='py-1 text-sm font-semibold text-white hover:text-slate-300'
                >
                  Creative Tim
                </a>
              </div>
            </div>
            <div className='w-full px-4 md:w-8/12'>
              <ul className='flex list-none flex-wrap justify-center  md:justify-end'>
                <li>
                  <a
                    href='https://www.creative-tim.com?ref=nnjs-footer-small'
                    className='block py-1 px-3 text-sm font-semibold text-white hover:text-slate-300'
                  >
                    Creative Tim
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.creative-tim.com/presentation?ref=nnjs-footer-small'
                    className='block py-1 px-3 text-sm font-semibold text-white hover:text-slate-300'
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href='http://blog.creative-tim.com?ref=nnjs-footer-small'
                    className='block py-1 px-3 text-sm font-semibold text-white hover:text-slate-300'
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href='https://github.com/creativetimofficial/notus-nextjs/blob/main/LICENSE.md?ref=nnjs-footer-small'
                    className='block py-1 px-3 text-sm font-semibold text-white hover:text-slate-300'
                  >
                    MIT License
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
