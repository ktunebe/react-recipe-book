import React from 'react';
import {Link} from 'react-router-dom'

function RecipePill({title, href}) {
  return (
  <>
    <Link to={href}>
      <li className='recipe-pill'>{title}</li>
    </Link>
  </>
  );
}

export default RecipePill;
