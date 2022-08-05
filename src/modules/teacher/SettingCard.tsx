import React, { useEffect, useState } from 'react';

interface Props {
  title?: any;
  info?: any;
}

const SettingCard: React.FC<Props> = ({ title, info }) => {
  useEffect(() => {
    const df = document.querySelectorAll('.df') as HTMLElement | any;
    const removeActive = (element: any) => {
      element.forEach((items: any) => {
        items.classList.remove('teacher__active');
      });
    };
    df.forEach((element: any) => {
      element.addEventListener('click', () => {
        removeActive(df);
        element.classList.add('teacher__active');
      });
    });
  }, []);

  return (
    <div className='flex flex-col bg-white rounded-3xl shadow-xl py-6 pl-10 pr-40 gap-3 text-[#4B6471] df'>
      <span className='font-semibold text-2xl'>{title}</span>
      <span>
        {info} <i className='fas fa-pencil-alt cursor-pointer ml-4'></i>
      </span>
    </div>
  );
};

export default SettingCard;
