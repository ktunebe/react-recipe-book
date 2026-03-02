import React from 'react';

function InstructionsList({instructions}) {
  return (
    <div className='w-full md:w-1/2 px-4'>
        <h3 className='text-center'>Directions</h3>
        <ol className='list-inside list-decimal'>
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
