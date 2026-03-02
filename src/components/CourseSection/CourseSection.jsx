import React from 'react'
import RecipePill from '../RecipePill'
import recipes from '../../assets/lists/recipes.json'

function CourseSection({ course, searchTerm }) {
	const courseRecipes = recipes.filter((recipe) => {
		return recipe.category === course.id
	})
	const normalizedSearchTerm = searchTerm.trim().toLowerCase()

	const filteredRecipes = courseRecipes.filter((recipe) => {
		if (!normalizedSearchTerm) return true

		const titleMatches = recipe.title
			.toLowerCase()
			.includes(normalizedSearchTerm)

		return titleMatches
	})

	return (
		<div className="my-4">
			<h2 className="text-lg">
				<span className="font-semibold">{course.text}</span> &middot;{' '}
				{courseRecipes.length}
			</h2>
			<hr className="text-accent" />
			<ul className="flex gap-4 mt-2">
				{filteredRecipes.map((recipe) => (
					<RecipePill key={recipe.id} href={recipe.id} title={recipe.title} />
				))}
			</ul>
		</div>
	)
}

export default CourseSection
