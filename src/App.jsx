import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen text-text flex flex-col"
          style={{
        backgroundImage: "url(/recipe-images/kitchen-bg-1.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}>
      <div className='w-full mx-auto flex-1 bg-background/84 flex flex-col'>
        {/* Header here later */}
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App


