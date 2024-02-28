import React from 'react'

const Sorting = ({setSort}) => {
  return (
    <div className='bg-gray-100 b-5 my-5 p-5 flex items-center justify-end text-3xl'>
      <select onChange={(e)=> setSort(e.target.value)} className='bg-gray-300 py-3 px-5 rounded-lg' name="" id="">
        <option  disabled value="">Seçiniz</option>
        <option value="inc">Artan</option>
        <option value="dec">Azalan</option>
      </select>
    </div>
    
  )
}

export default Sorting