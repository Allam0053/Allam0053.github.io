import { createPopper } from '@popperjs/core';
import React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

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
        className='flex items-center px-3 py-4 text-xs font-bold uppercase text-slate-700 hover:text-slate-500 dark:text-white lg:py-2'
        href='#pablo'
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        Pages
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? 'block ' : 'hidden ') +
          'z-50 float-left min-w-48 list-none rounded bg-white py-2 text-left text-base shadow-lg'
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
