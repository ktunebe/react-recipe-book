import React from 'react';
import IngredientListItem from '../IngredientListItem';

function IngredientList({currentIngredients, recipeMultiplier}) {
  const [activePopupId, setActivePopupId] = React.useState(null)

  React.useEffect(() => {
  function handleClickOutside() {
    setActivePopupId(null)
  }

  if (activePopupId) {
    document.addEventListener('mousedown', handleClickOutside)
  }

  return () => {
    document.removeEventListener('mousedown', handleClickOutside)
  }
}, [activePopupId])


  return (
     <div className='w-1/2'>
        <h3 className='text-center'>Ingredients</h3>
        <ol>
          {currentIngredients.map(ingredient => (
            <IngredientListItem 
              key={ingredient.ref} 
              ingredient={ingredient} 
              recipeMultiplier={recipeMultiplier}
              activePopupId={activePopupId}
              setActivePopupId={setActivePopupId} 
            />
          ))}
        </ol>
      </div>
  )
}

export default IngredientList;
