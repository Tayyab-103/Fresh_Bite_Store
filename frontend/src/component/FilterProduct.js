import React from 'react'
import { CiForkAndKnife } from "react-icons/ci";


const FilterProduct = ({category,onClick}) => {
  return (
    <div>
      <div onClick={onClick} className="text-3xl p-5 bg-yellow-500 rounded-full cursor-pointer">
        <CiForkAndKnife />
      </div>

      <p className='text-center font-medium my-1 capitalize'>{category}</p>
    </div>
  );
}

export default FilterProduct