import React from 'react'
import RecipePill from '../RecipePill'
import recipes from '../../assets/lists/recipes.json'

function CourseSection({ course }) {
	const courseRecipes = recipes.filter((recipe) => {
		return recipe.category === course.id
	})

	return (
		<div>
			<h2>
				{course.text} &middot; {courseRecipes.length}
			</h2>
			<ul className="flex gap-4">
				{courseRecipes.map((recipe) => (
					<RecipePill key={recipe.id} title={recipe.title} />
				))}
			</ul>
		</div>
	)
}

export default CourseSection
