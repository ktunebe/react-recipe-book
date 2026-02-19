import React from 'react';

function IngredientPopup({name, description}) {
  return (
    <>
      <p>{name}</p>
      <p><a href="#">{description}</a></p>
    </>
  );
}

export default IngredientPopup;
