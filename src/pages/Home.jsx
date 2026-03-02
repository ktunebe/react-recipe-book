import React from 'react'
import CourseSection from '../components/CourseSection/CourseSection'

function Home() {
  const [searchTerm, setSearchTerm] = React.useState('')
	const courses = [
		{ id: 'soup', text: 'Soup',},
		{ id: 'salad', text: 'Salad',},
		{ id: 'entree', text: 'Entrée',},
		{ id: 'side', text: 'Side',},
		{ id: 'dessert', text: 'Dessert',},
	]



	return (
		<div>
			<h1 className="mx-auto text-center text-4xl py-6">My Recipes</h1>
      <div className='mx-auto text-center'>
        <label htmlFor='search-input' className='text-lg'>Search Recipes: </label>
              <input
          id='search-input'
          name='search-input'
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}>
        </input>
      </div>
			{courses.map((course) => (
				<CourseSection key={course.id} course={course} searchTerm={searchTerm} />
			))}
		</div>
	)
}

export default Home
