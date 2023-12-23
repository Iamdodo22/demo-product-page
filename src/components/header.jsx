import React, { useContext, useEffect, useState } from 'react'
import Navigation from './navigation'
import Cart from '../assets/images/icon-cart.svg'
import avatar from '../assets/images/image-avatar.png'
import logo from '../assets/images/logo.svg'
import menubtn from '../assets/images/icon-menu.svg'
import CartItem from './CartItem'
import { ctx } from '../App'

function Header() {

  const [,,,,,count,,add] = useContext(ctx)
  const [opened, setOpened] = useState(false)
  const [interval, setIntervals] = useState(true)
  
  useEffect( () => {
     const setTimer = setTimeout( () =>{
      setIntervals(false)
     },5000)
     
     return () => {
       clearTimeout(setTimer)
     }
    },
    [])

  const openCart = (e)=> {
    const cartCon =e.target.parentElement.nextElementSibling.nextElementSibling
    cartCon?.classList.toggle('invisible')
    setOpened(prev => !prev)
  }

  return (
    <>
    <div className='flex justify-between max-md:mx-8'>
        <div className='flex gap-10 items-center '>
          {(window.innerWidth < 769) && 
          <img 
            src={menubtn}
          />
          }
            <img src={logo} alt='logo'/>
            {(window.innerWidth > 768) &&  <Navigation/>}
        </div>
        <div className='flex items-center gap-4'>
              <div className='flex flex-col relative'>
                {(count > 0) && 
                  <div className='absolute -right-2 -top-4 w-2 bg-orange text-white px-2 flex justify-center rounded-xl scale-75'>
                  {count}
                </div>
                }
                
                <img 
                  onClick={ openCart}
                  className='cursor-pointer'
                src={Cart}
                 alt="cart-jpg" />
              </div>
                
                <img className='w-10 hover:border hover:border-orange rounded-full'
                 src={avatar} 
                 alt="avatar-jpg" />
                 {(add) && <CartItem/>}
                 {(!add && opened) && (interval && <p className='absolute top-28 right-8'>Please click on Add to cart before checking cart ! </p>) }
        </div>
    </div>
      <hr className='mt-8'/>
    </>
    
  )
}

export default Header