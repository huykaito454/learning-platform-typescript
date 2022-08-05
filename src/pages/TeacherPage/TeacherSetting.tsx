import SettingCard from 'modules/teacher/SettingCard';
import React, { useState } from 'react';

const TeacherSetting = () => {
  return (
    <div className='flex flex-row gap-20 translate-y-[50%] justify-center items-center'>
      {/* 4 divs */}
      <div className='grid grid-rows-2 grid-cols-2 gap-10'>
        <SettingCard title='Name' info='nhatnguyenxd' />
        <SettingCard title='Email' info='nhatprovip@123' />
        <SettingCard title='Date of Birth' info='25/04/2001' />
        <SettingCard title='Sex' info='Male' />
      </div>
      {/* avatar */}
      <div className='flex flex-col justify-center items-center'>
        <img
          src='https://img.freepik.com/premium-vector/students-classroom-teacher-near-blackboard-auditorium-teaches-maths-lesson-children-study-subject-kids-group-studying-elementary-primary-school-class-interior-cartoon-vector-flat-concept_176411-2393.jpg?w=2000'
          alt=''
          className='w-[200px] h-[200px] rounded-full border-4 border-white shadow-2xl my-5'
        />
      </div>
    </div>
  );
};

export default TeacherSetting;
