import React, { useState } from 'react'
import Data from '@/Shared/Data'

function SeleccionarAnio() {
    const [selectedAnio, setSelectedAnio]=useState([]);
    const onSelectedAnio=(isChecked, value)=>{
        if(isChecked)
        {
            setSelectedAnio([...selectedAnio,value])
        }
        else{
            setSelectedAnio(selectedAnio.filter((n)=>n!==value))
        }
        console.log(selectedAnio)
    }

  return (
    <div className='px-2 mt-5'>
        <h2 className='font-bold'>
            Seleccionar Año de Obra
        </h2>
        <div>
            {Data.anioList.map((item, index) => (
                <div key={index} className='flex justify-between'>
                    <label>{item.name}</label>
                    <input type='checkbox'
                    onChange={(e)=>onSelectedAnio(e.target.checked, item.name)}
                    />
                </div>
            ))}
        </div>
    </div>
  )
}

export default SeleccionarAnio