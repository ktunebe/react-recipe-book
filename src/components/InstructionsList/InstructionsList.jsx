import React from 'react';

function InstructionsList({instructions}) {
  return (
    <div className='w-full md:w-1/2 px-4 md:pt-0 pt-4 bg-accent2/20 rounded-xl'>
        <h3 className='text-center border-b text-xl md:mt-3'>INSTRUCTIONS</h3>
        <ol className='list-inside list-decimal py-4'>
          {instructions.map((instruction, index) => (
            <li 
            key={index}
            className='my-1.5'
            >
              {instruction}
            </li>
          ))}
        </ol>
      </div>
  )
}

export default InstructionsList;
