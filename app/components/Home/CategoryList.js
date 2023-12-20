import React, { useState } from 'react'
import Data from '@/Shared/Data'
import Image from 'next/image'
function CategoryList({onCategoryChange}) {
    const [categoryList, setCategoryList]=useState(Data.CategoryListData)
    const [selectedCategory, setSelectedCategory]=useState();
    return (
    <div>
        <h2 className='font-bold'>
        Seleccionar Tipo de Obra
    </h2>
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
            {categoryList.map((item, index) =>(
                <div className={`flex flex-col justify-center items-center bg-gray-100 p-2 m-1 rounded-lg grayscale hover:grayscale-0 cursor-pointer  border-green-800
                ${selectedCategory==index?
                    'grayscale-0 bg-transparent border-[2px]'
                    :null}`}
                onClick={()=> {setSelectedCategory(index);onCategoryChange(item.value)}}>
                    <Image src={item.icon}
                    alt={item.name}
                    width={40}
                    height={40}
                    />
                    {item.name}
                </div>

            ))}
        </div>
    </div>
  )
}

export default CategoryList