import React from 'react';

type Props = {
  title: string;
};

const Banner: React.FC<Props> = ({ title }) => {
  return (
    <div className='w-[100%] bg-primary pl-7 py-7 shadow-xl text-white rounded-lg flex items-center'>
      <span className='text-2xl font-semibold'>{title}</span>
    </div>
  );
};

export default Banner;
