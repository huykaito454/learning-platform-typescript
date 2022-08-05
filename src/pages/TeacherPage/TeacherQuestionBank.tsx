import Button from 'components/Button/Button';
import QuestionBankCard from 'modules/teacher/QuestionBankCard';
import React, { useState } from 'react';

const TeacherQuestionBank = () => {
  const [activeGrade, setActiveGrade] = useState(0);
  return (
    <div className='flex flex-col gap-7'>
      <span className='font-semibold text-2xl'>
        Auto generated question collections
      </span>
      {/* pick grade */}
      <div className='flex flex-row gap-3 items-center'>
        <span>Grade</span>
        {new Array(8).fill(0).map((item, index) => {
          const gradeValue = index + 1;
          return (
            <label key={index}>
              <input
                type='radio'
                name='grade'
                value={gradeValue}
                className='hidden'
              />
              <button
                className={
                  activeGrade === gradeValue
                    ? 'p-1 px-2 shadow-innerQB bg-[#31B5FF] text-white rounded-md'
                    : 'p-1 px-2 shadow-md bg-white rounded-md'
                }
                onClick={() => {
                  setActiveGrade(gradeValue);
                }}>
                {gradeValue}
              </button>
            </label>
          );
        })}
      </div>
      {/* swiper Cards */}
      <div className='flex'>
        <QuestionBankCard />
      </div>
    </div>
  );
};

export default TeacherQuestionBank;
