import Button from 'components/Button/Button';
import QuestionBankCard from 'modules/teacher/QuestionBankCard';
import React, { useState } from 'react';
import { useNavigation } from '@pankod/refine-core';

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar, Mousewheel } from 'swiper';

const TeacherQuestionBank = () => {
  const [activeGrade, setActiveGrade] = useState(0);
  const [activeGrade2, setActiveGrade2] = useState(0);
  const { push } = useNavigation();
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
      <div className='rounded-lg'>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          mousewheel={true}
          scrollbar={{
            draggable: true,
            hide: false,
          }}
          modules={[Scrollbar, Mousewheel]}
          className='mySwiper h-[240px] px-4'>
          <SwiperSlide>
            <QuestionBankCard />
          </SwiperSlide>
          <SwiperSlide>
            <QuestionBankCard />
          </SwiperSlide>
          <SwiperSlide>
            <QuestionBankCard />
          </SwiperSlide>
          <SwiperSlide>
            <QuestionBankCard />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Collections */}
      <div className='flex flex-row gap-3 items-center'>
        <span className='font-semibold text-2xl'>
          Your Question Collections
        </span>
        <Button
          className='py-1 px-2 bg-white text-primary border-none shadow-custom outline-none'
          onClick={() => {
            push('/question-bank/create-collection');
          }}>
          <i className='fas fa-plus'></i>
        </Button>
      </div>

      {/* Grade pick */}
      <div className='flex flex-row gap-3 items-center'>
        <span>Grade</span>
        {new Array(8).fill(0).map((item, index2) => {
          const gradeValue2 = index2 + 1;
          return (
            <label key={index2}>
              <input
                type='radio'
                name='grade2'
                value={gradeValue2}
                className='hidden'
              />
              <button
                className={
                  activeGrade2 === gradeValue2
                    ? 'p-1 px-2 shadow-innerQB bg-[#31B5FF] text-white rounded-md'
                    : 'p-1 px-2 shadow-md bg-white rounded-md'
                }
                onClick={() => {
                  setActiveGrade2(gradeValue2);
                }}>
                {gradeValue2}
              </button>
            </label>
          );
        })}
      </div>
      {/* Colections swipe */}
      <div className='rounded-lg'>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          mousewheel={true}
          scrollbar={{
            draggable: true,
            hide: false,
          }}
          modules={[Scrollbar, Mousewheel]}
          className='mySwiper h-[240px] px-4'>
          <SwiperSlide>
            <QuestionBankCard />
          </SwiperSlide>
          <SwiperSlide>
            <QuestionBankCard />
          </SwiperSlide>
          <SwiperSlide>
            <QuestionBankCard />
          </SwiperSlide>
          <SwiperSlide>
            <QuestionBankCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default TeacherQuestionBank;
