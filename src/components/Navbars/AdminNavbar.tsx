import React from 'react';

import UserDropdown from '@/components/Dropdowns/UserDropdown';

export default function Navbar() {
  return (
    <>
      {/* Navbar */}
      <nav className='absolute top-0 left-0 z-10 flex w-full items-center bg-transparent p-4 md:flex-row md:flex-nowrap md:justify-start'>
        <div className='mx-autp flex w-full flex-wrap items-center justify-between px-4 md:flex-nowrap md:px-10'>
          {/* Brand */}
          <a
            className='hidden text-sm font-semibold uppercase text-white lg:inline-block'
            href='#pablo'
            onClick={(e) => e.preventDefault()}
          >
            Dashboard
          </a>
          {/* Form */}
          <form className='mr-3 hidden flex-row flex-wrap items-center md:flex lg:ml-auto'>
            <div className='relative flex w-full flex-wrap items-stretch'>
              <span className='absolute z-10 h-full w-8 items-center justify-center rounded bg-transparent py-3 pl-3 text-center text-base font-normal leading-snug text-slate-300'>
                <i className='fas fa-search'></i>
              </span>
              <input
                type='text'
                placeholder='Search here...'
                className='relative w-full rounded border-0 bg-white px-3 py-3 pl-10 text-sm text-slate-600 placeholder-slate-300 shadow outline-none focus:outline-none focus:ring'
              />
            </div>
          </form>
          {/* User */}
          <ul className='hidden list-none flex-col items-center md:flex md:flex-row'>
            <UserDropdown />
          </ul>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}
