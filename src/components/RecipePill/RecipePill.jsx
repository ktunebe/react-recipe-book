import React from 'react';
import {Link} from 'react-router-dom'

function RecipePill({title}) {
  return (
  <>
    <Link>
      <li className='rounded-full border-2 py-1 px-3 '>{title}</li>
    </Link>
  </>
  );
}

export default RecipePill;
