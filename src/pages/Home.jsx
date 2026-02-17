import React from 'react';
import CourseSection from '../components/CourseSection/CourseSection';

function Home() {
  const courses = [
    {
      id: 'soup',
      text: 'Soup'
    }, 
    {
      id: 'salad',
      text: 'Salad'
    }, 
    {
      id: 'entree',
      text: 'Entrée'
    }, 
    {
      id: 'side',
      text: 'Side'
    }, 
    {
      id: 'dessert',
      text: 'Dessert'
    }
      ]
  return (
  <div>
    <h1>My Recipes</h1>
    {courses.map(course => (
      <CourseSection key={course.id} course={course} />
    ))}
  </div>
  )
}

export default Home;
