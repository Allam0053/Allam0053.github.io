import { createPopper } from '@popperjs/core';
import React from 'react';

const NotificationDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef<HTMLAnchorElement>();
  const popoverDropdownRef = React.createRef<HTMLDivElement>();

  const openDropdownPopover = () => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    createPopper(btnDropdownRef.current!, popoverDropdownRef.current!, {
      placement: 'left-start',
    });
    setDropdownPopoverShow(true);
  };

  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <a
        className='py-1 px-3 text-slate-500'
        href='#pablo'
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <i className='fas fa-ellipsis-v'></i>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? 'block ' : 'hidden ') +
          'z-50 float-left min-w-48 list-none rounded bg-white py-2 text-left text-base shadow-lg'
        }
      >
        <a
          href='#pablo'
          className='block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-slate-700'
          onClick={(e) => e.preventDefault()}
        >
          Action
        </a>
        <a
          href='#pablo'
          className='block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-slate-700'
          onClick={(e) => e.preventDefault()}
        >
          Another action
        </a>
        <a
          href='#pablo'
          className='block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-slate-700'
          onClick={(e) => e.preventDefault()}
        >
          Something else here
        </a>
      </div>
    </>
  );
};

export default NotificationDropdown;
