import Button from 'components/Button/Button';
import React from 'react';

interface Data {
  topicName: string;
  score: number;
  questions: number;
}

const TeacherScores = () => {
  return (
    <div className='flex flex-col gap-5 justify-center'>
      {/* back */}
      <div className='flex gap-2 items-center'>
        <i className='fas fa-caret-left text-xl font-bold'></i>
        <a className='underline underline-offset-4 font-semibold cursor-pointer'>
          MATH_CLASS_69
        </a>
      </div>
      {/* banner */}
      <div className='w-[100%] bg-primary pl-7 py-7 shadow-xl text-white rounded-lg flex items-center'>
        <span className='text-2xl font-semibold'>All Topics</span>
      </div>
      {/* search bar */}
      <div className='flex justify-center'>
        <input
          className='search_bar p-2 px-4 w-[50%] outline-none shadow-inner2 focus:placeholder:hidden placeholder:text-center
           rounded-md relative'
          type='text'
          placeholder='Search'></input>
        <i className='fas fa-search absolute -translate-x-10 translate-y-3 text-gray-400 pointer-events-none'></i>
      </div>
      {/* table */}
      <table
        id='teacher__scoreTable'
        className='text-center bg-white rounded-xl'>
        <thead className='font-semibold text-xl'>
          <tr className='font-bold py-10 text-xl'>
            <td>Topic Name</td>
            <td>Average Score</td>
            <td>No.Questions</td>
          </tr>
        </thead>
        <tbody className='odd:bg-white evene:bg-[#f2f2f2]'>
          <tr className=''>
            <td>Add and subtract</td>
            <td>69</td>
            <td>35</td>
            <td>
              <Button className='bg-[#FFB865] p-1 px-2 text-sm border-none'>
                View more
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TeacherScores;
