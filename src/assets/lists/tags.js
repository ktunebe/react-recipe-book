import recipes from './recipes.json'

const allTags = recipes
  .flatMap((recipe) => recipe.tags ?? [])
  .map((tag) => tag.trim().toLowerCase())

export const uniqueTags = Array.from(new Set(allTags)).sort()