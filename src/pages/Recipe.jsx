import React from 'react';
import { useParams, Link } from 'react-router-dom'
import recipes from '../assets/lists/recipes.json'
import ingredients from '../assets/lists/ingredients.json'
import IngredientList from '../components/IngredientList'
import InstructionsList from '../components/InstructionsList'
import MultiplierDropdown from '../components/MultiplierDropdown'

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
    <header className='flex justify-between items-center pt-6 px-6'>
      <h1 className='text-4xl'>{recipe.title}</h1>
      <Link to='/' className='recipe-pill md:text-xl'>Home</Link>
    </header>
    <img src={recipe.imagePath || 'recipe-images/default.jpg'}alt={`Image of ${recipe.title}`} className='w-4/5 h-96 rounded-4xl object-cover mt-10 mb-8 mx-auto' />
    <MultiplierDropdown servings={recipe.servings} recipeMultiplier={recipeMultiplier} setRecipeMultiplier={setRecipeMultiplier}/>
    <div className='flex flex-col md:flex-row w-full divide-y-2 md:divide-y-0 md:divide-x-2'>
      <IngredientList currentIngredients={currentIngredients} recipeMultiplier={recipeMultiplier} />
      <InstructionsList instructions={recipe.instructions} />
    </div>
  </div>
  )
}

