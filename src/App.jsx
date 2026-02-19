import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen bg-background text-text">
      <div className='max-w-350 mx-auto px-6 sm:px-12'>
        {/* Header here later */}
        <Outlet />
      </div>
    </div>
  )
}

export default App


