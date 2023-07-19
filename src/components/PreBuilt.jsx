import React from 'react'
import ProductDisplay from './ProductDisplay'
import { prebuilt } from '../storage/prebuilt/prebuilt'

export default function PreBuilt() {
  return (
    <div className='flex md:w-1/2 w-100 max-w-xl max-h-screen overflow-y-scroll no-scrollbar lg:max-w-6xl mx-auto'>
        <ProductDisplay product={prebuilt}/>
    </div>
  )
}
