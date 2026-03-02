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
     <div className='w-full md:w-1/2 px-4 bg-accent/20 rounded-xl'>
        <h3 className='text-center border-b text-xl mt-3'>INGREDIENTS</h3>
        <ol className='py-4 '>
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
