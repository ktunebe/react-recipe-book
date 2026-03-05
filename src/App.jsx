import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background text-text flex flex-col">
      <div className='w-full mx-auto  flex-1'>
        {/* Header here later */}
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App


