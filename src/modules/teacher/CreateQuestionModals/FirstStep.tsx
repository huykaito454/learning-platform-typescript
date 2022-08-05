import React from 'react';
import { useModal } from '@pankod/refine-core';
import Button from 'components/Button/Button';
import TeacherQuestionCard from './TeacherQuestionCard';
const FirstStep = ({ onClose = () => {} }) => {
  const { visible, show, close } = useModal();
  return (
    <div
      className='w-[800px] h-[500px] absolute top-[50%] left-[50%] -translate-x-[50%]
     -translate-y-[50%] flex flex-col p-10 gap-4 items-center z-50 bg-white rounded-xl'>
      <div className='flex flex-row gap-10'>
        <div className='p-[5px] bg-[#0557B8] rounded-full cursor-pointer' />
        <div className='p-[5px] bg-gray-200 rounded-full cursor-pointer' />
        <div className='p-[5px] bg-gray-200 rounded-full cursor-pointer' />
        <div className='p-[5px] bg-gray-200 rounded-full cursor-pointer' />
        <div className='p-[5px] bg-gray-200 rounded-full cursor-pointer' />
      </div>
      <span className='font-bold text-2xl'>Step 1</span>
      <span className='text-xl'>Choose question type</span>
      {/* question types */}
      <div className='flex flex-row gap-5 justify-center items-center'>
        <TeacherQuestionCard />
        <TeacherQuestionCard />
        <TeacherQuestionCard />
      </div>
      <Button onClick={onClose}>Close Modal</Button>
    </div>
  );
};

export default FirstStep;
