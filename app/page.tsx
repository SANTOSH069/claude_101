import HeroSec from './components/HeroSec'
import Navbar from './components/Sidebar'

const page = () => {
  return (
    <div className='relative w-full min-h-screen bg-background'>

      <div className='flex-col items-center justify-center min-h-screen'>
        <HeroSec />
      </div>
    </div>
  )
}

export default page