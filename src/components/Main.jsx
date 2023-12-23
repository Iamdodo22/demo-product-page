import React, { useContext } from 'react'
import ProductShoe from './ProductShoe'
import CartButton from './CartButton'
import { ctx } from '../App'

function Main() {
    const [price] = useContext(ctx)
    const fixedPrice = price.toFixed(2)

  return (
    <div className='flex max-md:flex-col gap-28 items-center my-16 max-md:mt-0'>
        <section className='flex-1'>
            <ProductShoe/>
        </section>
        <section className='flex-1 flex flex-col gap-4'>
            <h2 className=" text-orange uppercase font-semibold">sneaker company</h2>
            <div className='black10 font-extrabold text-xl'>Fall Limited Edition Sneakers</div>
            <p className='text-blue5'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer
            </p>
            <div className='flex flex-col'>
               <span className='flex gap-2 items-center'>
                <p className='text-black10 font-extrabold'>${fixedPrice}</p>
                <p className='text-orange rounded-md text-sm bg-orangePale p-1'>50%</p>
            </span>
                <p className=' line-through text-blue5'>$250.00</p> 
            </div>
            
            <div>
                <CartButton/>
            </div>
        </section>
    </div>
   
  )
}

export default Main