import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../redux/categorySlice';

const Category = ({setCategory}) => {
  const dispatch = useDispatch();
  const {categories} = useSelector(state => state.categories)

  console.log(categories,"categories");

  useEffect(() => {
    dispatch(getCategories())
  },[dispatch])


  return (
    <div className='w-1/6 bg-gray-100  p-4 flex flex-col'>
      <div className='border-b pb-6 px-6 text-5xl font-bold'>Kategori</div>
      {
        categories?.map((category,i)=> (
            <div onClick={() => setCategory(category) } className='text-4xl cursor-pointer hover:bg-gray-200 p-6' key={i}>{category}</div>
        ))
      }
    </div>
  )
}

export default Category