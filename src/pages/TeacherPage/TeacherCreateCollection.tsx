import Button from 'components/Button/Button';
import React from 'react';
import { useNavigation } from '@pankod/refine-core';
import Banner from 'modules/teacher/Banner';
import Blank from '../../assets/images/teachers/blank.png';
import { useModal } from '@pankod/refine-core';
import FirstStep from 'modules/teacher/CreateQuestionModals/FirstStep';

const TeacherCreateCollection = () => {
  const { push } = useNavigation();
  const { visible, show, close } = useModal();
  return (
    <div className='flex flex-col gap-10'>
      {/* back */}
      <div>
        <Button
          className='bg-white shadow-xl p-1 px-3 text-black border-none flex items-center gap-2'
          onClick={() => {
            push('/question-bank');
          }}>
          <i className='fas fa-caret-left'></i> Question Collections
        </Button>
      </div>
      {/* banner */}
      <Banner title='Math class code' />
      {/* body */}
      <div className='flex flex-col gap-5 justify-center items-center'>
        <img src={Blank} alt='' className='w-[200px] h-[200px]' />
        <span className='text-2xl'>You have no question create now</span>
        <Button className='bg-[#1504D8]' onClick={show}>
          Add question
        </Button>
        {visible && <FirstStep onClose={close} />}
      </div>
    </div>
  );
};

export default TeacherCreateCollection;
