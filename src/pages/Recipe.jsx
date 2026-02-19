import React from 'react';
import { useParams } from 'react-router-dom'
import recipes from '../assets/lists/recipes.json'
import ingredients from '../assets/lists/ingredients.json'
import IngredientList from '../components/IngredientList'

export default function Recipe() {
  const [recipeMultiplier, setRecipeMultiplier] = React.useState(1)
  const { id } = useParams()
  const recipe = recipes.find(recipe => recipe.id === id)
  
  if (!recipe) return <div>Recipe not found</div>

  const currentIngredients = recipe.ingredientList.map(i => {
    return {
      ...i,
      instance: ingredients[i.ref]
    }
  })

  return (
  <div className="flex flex-col mx-auto">
    <h1 className='text-4xl'>{recipe.title}</h1>
    <img src='recipe-images/default.jpg' alt={`Image of ${recipe.title}`} className='w-full h-96 rounded-4xl object-cover mt-10 mb-8' />
    <div className='flex w-full divide-x-2'>
      <IngredientList currentIngredients={currentIngredients} recipeMultiplier={recipeMultiplier} />
      <div className='w-1/2'>
        <h3 className='text-center'>Directions</h3>
        <ol className='list-inside list-decimal ml-6'>
          {recipe.instructions.map((instruction, index) => (
            <li 
            key={index}
            className='my-1.5'
            >
              {instruction}
            </li>
          ))}
        </ol>
      </div>
    </div>
  </div>
  )
}

