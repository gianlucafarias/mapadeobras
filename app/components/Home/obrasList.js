import React from 'react'
import ObraItem from './ObraItem'
function obrasList(obrasList) {
  return (
    <div className='flex overflow-scroll overflow-x-auto'>
        {obrasList.map((item, index)=> {
            <div>
                <ObraItem obra={item} key={index}/>

                </div>
        })}
    </div>
  )
}

export default obrasList