import React from 'react'
import RecipePill from '../RecipePill'
import recipes from '../../assets/lists/recipes.json'

function CourseSection({ course, searchTerm, activeTag }) {
	const courseRecipes = recipes.filter((recipe) => {
		return recipe.category === course.id
	})
	const normalizedSearchTerm = searchTerm.trim().toLowerCase()
	const visibleRecipes = courseRecipes.filter((recipe) => {
		const matchesTitle =
			!normalizedSearchTerm ||
			recipe.title.toLowerCase().includes(normalizedSearchTerm)

		const matchesAnyTagText =
			!normalizedSearchTerm ||
			(recipe.tags ?? []).some((tag) => tag.includes(normalizedSearchTerm))

		const matchesSelectedTag =
			!activeTag || (recipe.tags ?? []).includes(activeTag)

		// If there's a search term: match title OR tags text
		// Then also apply the selected-tag filter if one is chosen
		const matchesSearch =
			!normalizedSearchTerm || matchesTitle || matchesAnyTagText

		return matchesSearch && matchesSelectedTag
	})

	return (
		<div className="my-12">
			<h2 className="text-base lg:text-lg mb-1">
				<span className="font-semibold text-xl lg:text-2xl">{course.text}</span> &middot;{' '}
				{courseRecipes.length}
			</h2>
			<hr className="text-accent" />
			<ul className={`flex flex-wrap gap-4 px-4 text-sm sm:text-base mt-4 mb-6 mx-auto max-w-250 justify-start`}>
				{visibleRecipes.map((recipe) => (
					<RecipePill key={recipe.id} href={recipe.id} title={recipe.title} />
				))}
			</ul>
		</div>
	)
}

export default CourseSection
