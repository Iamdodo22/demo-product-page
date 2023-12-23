import React from 'react'

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