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
		<>
			<div className="flex flex-col sm:flex-row justify-between items-center px-6 border-b-2 border-gray-400 shadow-sm shadow-accent py-12">
				<h1 className="text-5xl ml-4 font-serif">My Recipes</h1>
				<div className="justify-self-end">
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
			</div>
			{/* <hr className="text-accent w-screen" /> */}
			<div className="max-w-350 px-6 sm:px-12">
				<TagSelect activeTag={activeTag} setActiveTag={setActiveTag} />
				{courses.map((course) => (
					<CourseSection
						key={course.id}
						course={course}
						searchTerm={searchTerm}
						activeTag={activeTag}
					/>
				))}
			</div>
		</>
	)
}

export default Home
