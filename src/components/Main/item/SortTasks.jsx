import React, { useState } from 'react';

const SortTasks = ({ handleSortBy }) => {
  const [activeButton, setActiveButton] = useState('All');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    handleSortBy(buttonName);
  };

  return (
    <div className='flex pb-4'>
      <button
        className={`bg-black text-white font-bold py-2 px-4 rounded-l ${activeButton === 'All' ? 'bg-[#3c3c3c]' : ''}`}
        onClick={() => handleButtonClick('All')}
      >
        All
      </button>
      <button
        className={`bg-black text-white font-bold py-2 px-4 ${activeButton === 'Completed' ? 'bg-[#3c3c3c]' : ''}`}
        onClick={() => handleButtonClick('Completed')}
      >
        Completed Tasks
      </button>
      <button
        className={`bg-black text-white font-bold py-2 px-4 rounded-r ${activeButton === 'On Going' ? 'bg-[#3c3c3c]' : ''}`}
        onClick={() => handleButtonClick('On Going')}
      >
        On Going
      </button>
    </div>
  );
};

export default SortTasks;
