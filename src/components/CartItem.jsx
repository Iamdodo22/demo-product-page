import React, {useContext, useEffect} from 'react'
import sample1 from '../assets/images/image-product-1.jpg'
import deleteBtn from '../assets/images/icon-delete.svg'
import {ctx} from '../App'

const CartItem = () => {
  
  const[price,total,setTotal,qty,setQty,count,setCount ,add,setAdd] = useContext(ctx)
  const fixedPrice = price.toFixed(2)

  const totalPrice = price * count

  useEffect(()=>{
    setTotal(totalPrice.toFixed(2))
    setQty(count)
  },[count])
   
   const removeFromCart = ()=>{
    setCount(0)
   }

  return (
    <div className='absolute top-20 rounded-md right-10 z-50 flex flex-col gap-4 shadow-lg bg-white pt-3 transition-all invisible'>
      <h2 className='text-black10 mx-3 font-semibold'>Cart</h2>
      <hr />
      {(count <= 0)?
       <span className='px-20 py-14'>Your cart is empty.</span>:
        <>
          <div className='flex gap-2 mx-3 items-center'> 
            <img
            className='w-8 rounded-lg'
              src={sample1} alt="" />
            <p className='text-blue5 w-64'>
              Fall Limited Edition Sneakers ${fixedPrice} x {qty}
            <span className='text-black10 font-semibold'> ${total}</span>
            </p>
            <img
            onClick={removeFromCart}
            className='cursor-pointer'
              src={deleteBtn} alt="" />
          </div>
          <button className='bg-orange px-4 py-1 text-sm mx-3 mb-6 rounded-lg'>Checkout</button>
        </>
       }
     </div>
        )
}

export default CartItem