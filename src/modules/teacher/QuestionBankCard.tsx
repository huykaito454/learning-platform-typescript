import Button from 'components/Button/Button';
import React from 'react';

const QuestionBankCard = () => {
  return (
    <div className='flex flex-col gap-3 text-white px-7 py-5 bg-[#B5D7FF] w-[375px] h-[200px] rounded-xl shadow-xl'>
      <span className='text-2xl'>QC-NTB46969</span>
      <span>Total time : 69mins</span>
      <span>Total Questions : 10 questions</span>
      <div className='flex flex-row gap-3'>
        <Button>Detail</Button>
        <Button className='bg-[#FF9900]'>Preview</Button>
      </div>
    </div>
  );
};

export default QuestionBankCard;
