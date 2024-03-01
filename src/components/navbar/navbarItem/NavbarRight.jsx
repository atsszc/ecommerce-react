import React, { useEffect } from 'react'
import {BiSearch} from 'react-icons/bi';
import {AiOutlineHeart} from 'react-icons/ai';
import {SlBasket} from 'react-icons/sl';
import {useDispatch , useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom';
import { getCartTotal } from '../../../redux/cartSlice';


const NavbarRight = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {itemCount} = useSelector(state => state.carts)


    useEffect(()=> {
      dispatch(getCartTotal())
    },[dispatch])

  return (
    <div className='flex items-center gap-8 '>
      <div className='flex items-center border p-3 rounded-full bg-gray-200'>
        <input className='bg-gray-200 outline-none text-2xl' type="text" placeholder='Arama yapınız...' />
        <BiSearch size={45}/>
      </div>
      <AiOutlineHeart size={45}/>
      <div onClick={() => navigate("cart")} className='relative'>
          <div className='absolute -top-4 -right-4 bg-red-500 text-white rounded-full w-8 h-8 items-center justify-center text-center text-2xl'>{itemCount}</div>
          <SlBasket size={45}/>
      </div>
    </div>
  )
}

export default NavbarRight