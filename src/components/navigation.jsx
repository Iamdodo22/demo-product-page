import React, { useRef } from 'react'
import menuBtn from '../assets/images/icon-close.svg'

export const NavigationSm = ({navSm})=> {
    
    

    const closeMenu = ()=> {
        navSm.current.classList.toggle('invisible');
    }

    return (
        <nav ref={navSm} className='w-3/4 invisible fixed h-full top-0 left-0 bg-white flex flex-col gap-20 items-start p-8 `transition-all`'>
            <img
            onClick={closeMenu}
             src={menuBtn}className='cursor-pointer'
              alt="" />
              <ul className='flex flex-col font-bold gap-4 text-sm text-black10 scale-125'>
                <li className='hover:text-blue5 hover:font-bold' ><a href="#home">Colections</a></li>
                <li className='hover:text-blue5 hover:font-bold'><a href="#about">Men</a></li>
                <li className='hover:text-blue5 hover:font-bold'><a href="#services">Women</a></li>
                <li className='hover:text-blue5 hover:font-bold'><a href="#portfolio">About</a></li>
                <li className='hover:text-blue5 hover:font-bold'><a href="#contact">Contact</a></li>
            </ul>  
        </nav>
    )
}

const navigation = () => {
    
    return (
        <div>
            <ul className='flex gap-4 text-sm text-blue5'>
                <li className='hover:text-black10 hover:font-bold' ><a href="#home">Colections</a></li>
                <li className='hover:text-black10 hover:font-bold'><a href="#about">Men</a></li>
                <li className='hover:text-black10 hover:font-bold'><a href="#services">Women</a></li>
                <li className='hover:text-black10 hover:font-bold'><a href="#portfolio">About</a></li>
                <li className='hover:text-black10 hover:font-bold'><a href="#contact">Contact</a></li>
            </ul>
        </div>
    )
}

export default navigation