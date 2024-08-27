import React from 'react';

const Title = ({ heading1, heading2 }) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3'>
      <p className='text-gray-500'>
        {heading1} <span className='font-medium text-gray-700'>{heading2}</span>
      </p>
      <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></p>
    </div>
  );
};

export default Title;
