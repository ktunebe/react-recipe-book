import React from 'react'

function MultiplierDropdown({
	servings,
	recipeMultiplier,
	setRecipeMultiplier,
}) {
	return (
		<div className="mx-auto mb-6 text-lg">
			<label htmlFor="recipe-multiplier">Servings: </label>
			<select
				name="recipe-multiplier"
				id="recipe-multiplier"
				value={recipeMultiplier}
				onChange={(e) => setRecipeMultiplier(e.target.value)}
				className="dropdown">
				<option value={0.5}>{servings / 2}</option>
				<option value={1}>{servings}</option>
				<option value={2}>{servings * 2}</option>
			</select>
		</div>
	)
}

export default MultiplierDropdown
