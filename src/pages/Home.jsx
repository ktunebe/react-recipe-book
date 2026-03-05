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
			<div className=" border-b-2 border-gray-400 shadow-sm shadow-accent py-10 sm:py-14 bg-background">
				<div className="flex flex-col gap-6 sm:flex-row justify-between items-center px-6 max-w-300 mx-auto">
					<h1 className="text-5xl sm:pl-4 font-serif">My Recipes</h1>
					<div className="relative max-w-md">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth="2">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
							/>
						</svg>
						<input
							id="search-input"
							name="search-input"
							type="text"
              placeholder="Search recipes"
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}></input>
					</div>
				</div>
			</div>
			<div className="max-w-300 px-6 sm:px-12 mx-auto">
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
