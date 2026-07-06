import React from 'react'
import Link from "next/link"
import { ArrowLeft } from 'lucide-react'
const ReturntoHome = () => {
  return (
    <>
    <Link href={`/`}>
        <ArrowLeft size={36} className='rounded-4xl hover:text-neutral-100 bg-button transtion-all duration-150 ease-in '/>
    </Link>
    </>
  )
}

export default ReturntoHome