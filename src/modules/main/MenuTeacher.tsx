import React from 'react';
import { NavLink } from 'react-router-dom';
const MenuTeacher = () => {
  return (
    <div className='flex flex-col gap-5 text-base cursor-pointer w-full select-none'>
      <NavLink
        to={'/'}
        className={({ isActive }) =>
          isActive
            ? 'flex items-center justify-between gap-3 w-full -ml-5 px-4 py-2 border-l-[5px]  nav-item-active'
            : 'flex items-center justify-between gap-3 w-full -ml-5 px-4 py-2 border-l-[5px] border-white'
        }>
        <i className='fas fa-home'></i>
        <span className='w-[85%]'>Home</span>
      </NavLink>
      <NavLink
        to={'/class'}
        className={({ isActive }) =>
          isActive
            ? 'flex items-center justify-between gap-3 w-full -ml-5 px-4 py-2 border-l-[5px]  nav-item-active'
            : 'flex items-center justify-between gap-3 w-full -ml-5 px-4 py-2 border-l-[5px] border-white'
        }>
        <i className='fas fa-graduation-cap'></i>
        <span className='w-[85%]'>Class</span>
      </NavLink>
    </div>
  );
};

export default MenuTeacher;
