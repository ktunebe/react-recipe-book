import React from 'react'
import CourseSection from '../components/CourseSection/CourseSection'
import TagSelect from '../components/TagSelect'

function Home() {
	const [searchTerm, setSearchTerm] = React.useState('')
	const [activeTag, setActiveTag] = React.useState(null)
	const courses = [
		{ id: 'soup', text: 'Soup' },
		{ id: 'salad', text: 'Salad' },
		{ id: 'entree', text: 'Entrée' },
		{ id: 'side', text: 'Side' },
		{ id: 'dessert', text: 'Dessert' },
	]

	return (
		<div>
			<h1 className="mx-auto text-center text-5xl py-8 mb-6">My Recipes</h1>
      <TagSelect activeTag={activeTag} setActiveTag={setActiveTag} />
			<div className="mx-auto text-center">
				<label htmlFor="search-input" className="text-lg lg:text-xl">
					Search Recipes:{' '}
				</label>
				<input
					id="search-input"
					name="search-input"
					type="text"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}></input>
			</div>
			{courses.map((course) => (
				<CourseSection
					key={course.id}
					course={course}
					searchTerm={searchTerm}
					activeTag={activeTag}
				/>
			))}
		</div>
	)
}

export default Home
