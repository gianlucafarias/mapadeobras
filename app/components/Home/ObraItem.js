import Image from 'next/image'
import React from 'react'

function ObraItem(obra) {
  return (
    <div className='w-[180px] flex-shrink-0'>
        <Image src='/placeholder.jpeg'
        alt={obra.name}
        width={100}
        height={80}/>
    </div>
  )
}

export default ObraItem