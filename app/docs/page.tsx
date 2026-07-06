import React from 'react'
import ReturntoHome from '../components/ReturntoHome'
import Sidebar from '../components/Sidebar'
import Commands from '../components/Commands'

const page = () => {
  return (
    <div className='min-h-screen w-full bg-black'>
      <div className='p-4 mt-6'>
        <ReturntoHome />
        <Sidebar />
      </div>
      <section className='min-h-screen w-full mt-12 p-4 bg-black'>
        <Commands />
      </section>
      <section>
        
      </section>
    </div>
  )
}

export default page