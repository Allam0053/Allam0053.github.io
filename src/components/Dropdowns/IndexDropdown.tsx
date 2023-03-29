import { createPopper } from '@popperjs/core';
import React from 'react';

import clsxm from '@/lib/clsxm';

import UnstyledLink from '@/components/links/UnstyledLink';

const IndexDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef<HTMLButtonElement>();
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
      <button
        className={clsxm(
          'ml-3 mb-3 rounded px-4 py-2 text-xs font-bold uppercase shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none lg:mr-1 lg:mb-0',
          'bg-slate-700 text-white active:bg-slate-600',
          'dark:bg-slate-200 dark:text-slate-800 dark:active:bg-slate-100'
        )}
        type='button'
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <i className='fas fa-file mr-2'></i>Pages
        <i className='fas fa-angle-down ml-2'></i>
      </button>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? 'block ' : 'hidden ') +
          'z-[100] float-left min-w-48 list-none rounded bg-white py-2 text-left text-base shadow-lg'
        }
      >
        <span className='block w-full whitespace-nowrap bg-transparent px-4 pt-2 pb-0 text-sm font-bold text-slate-400'>
          Content
        </span>
        <UnstyledLink
          href='/projects'
          className='block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-slate-700'
        >
          Projects
        </UnstyledLink>
        <UnstyledLink
          href='/blogs'
          className='block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-slate-700'
        >
          Blogs
        </UnstyledLink>
        <UnstyledLink
          href='/libraries'
          className='block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-slate-700'
        >
          Libraries
        </UnstyledLink>
        <div className='mx-4 my-2 h-0 border border-solid border-slate-100' />
        <span className='block w-full whitespace-nowrap bg-transparent px-4 pt-2 pb-0 text-sm font-bold text-slate-400'>
          About
        </span>
        <UnstyledLink
          href='/about/this-project'
          className='block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-slate-700'
        >
          This Project
        </UnstyledLink>
        <UnstyledLink
          href='/about/me'
          className='block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-slate-700'
        >
          Allam
        </UnstyledLink>
      </div>
    </>
  );
};

export default IndexDropdown;
