import { createPopper } from '@popperjs/core';
import Link from 'next/link';
import React from 'react';

const IndexDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef<HTMLAnchorElement>();
  const popoverDropdownRef = React.createRef<HTMLDivElement>();

  const openDropdownPopover = () => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    createPopper(btnDropdownRef.current!, popoverDropdownRef.current!, {
      placement: 'bottom-start',
    });
    setDropdownPopoverShow(true);
  };

  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <a
        className='flex items-center px-3 py-4 text-xs font-bold uppercase text-slate-700 hover:text-slate-500 lg:py-2'
        href='#pablo'
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        Demo Pages
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? 'block ' : 'hidden ') +
          'z-50 float-left min-w-48 list-none rounded bg-white py-2 text-left text-base shadow-lg'
        }
      >
        <span className='block w-full whitespace-nowrap bg-transparent px-4 pt-2 pb-0 text-sm font-bold text-slate-400'>
          Admin Layout
        </span>
        <Link href='/admin/dashboard'>
          <a
            href='#pablo'
            className='block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-slate-700'
          >
            Dashboard
          </a>
        </Link>
        <Link href='/admin/settings'>
          <a
            href='#pablo'
            className='block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-slate-700'
          >
            Settings
          </a>
        </Link>
        <Link href='/admin/tables'>
          <a
            href='#pablo'
            className='block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-slate-700'
          >
            Tables
          </a>
        </Link>
        <Link href='/admin/maps'>
          <a
            href='#pablo'
            className='block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-slate-700'
          >
            Maps
          </a>
        </Link>
        <div className='mx-4 my-2 h-0 border border-solid border-slate-100' />
        <span className='block w-full whitespace-nowrap bg-transparent px-4 pt-2 pb-0 text-sm font-bold text-slate-400'>
          Auth Layout
        </span>
        <Link href='/auth/login'>
          <a
            href='#pablo'
            className='block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-slate-700'
          >
            Login
          </a>
        </Link>
        <Link href='/auth/register'>
          <a
            href='#pablo'
            className='block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-slate-700'
          >
            Register
          </a>
        </Link>
        <div className='mx-4 my-2 h-0 border border-solid border-slate-100' />
        <span className='block w-full whitespace-nowrap bg-transparent px-4 pt-2 pb-0 text-sm font-bold text-slate-400'>
          No Layout
        </span>
        <Link href='/landing'>
          <a
            href='#pablo'
            className='block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-slate-700'
          >
            Landing
          </a>
        </Link>
        <Link href='/profile'>
          <a
            href='#pablo'
            className='block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-slate-700'
          >
            Profile
          </a>
        </Link>
      </div>
    </>
  );
};

export default IndexDropdown;
