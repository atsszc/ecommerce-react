import React from 'react'
import { removeFromCart } from '../../redux/cartSlice'
import {useDispatch} from 'react-redux'

const CartComp = ({cart}) => {
    const dispatch = useDispatch();
  return (
    <div className='my-10 flex items-center justify-between'>
        <img className='w-[300px] h-[300px] object-cover' src={cart?.image} alt="" />
        <div className='w-[1518px]'>
            <div className='text-3xl'>{cart?.title}</div>
            <div className='text-3xl'>{cart?.description}</div>
        </div>
        <div className='text-4xl my-6 font-bold'>{cart?.price} TL ({cart?.quantity})</div>
        <div onClick={() => dispatch(removeFromCart(cart?.id))} className='bg-red-500 text-white w-[200px] text-3xl cursor-pointer h-16 flex items-center justify-center rounded-lg'>Ürünü Sil</div>
    </div>
  )
}

export default CartComp