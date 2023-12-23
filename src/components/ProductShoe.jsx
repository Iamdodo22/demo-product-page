import React, { useContext, useEffect, useRef, useState} from 'react'
import sample1 from '../assets/images/image-product-1.jpg'
import sample2 from '../assets/images/image-product-2.jpg'
import sample3 from '../assets/images/image-product-3.jpg'
import sample4 from '../assets/images/image-product-4.jpg'
import { ctx } from '../App'


const ProductShoe = () => {

  const bigFrame = useRef()
  
  const [,,,,,,,,,,showModal,,,clicked,setClicked] = useContext(ctx);
  const images = [sample1,sample2,sample3,sample4]
  const smallFrame = images.map(()=> React.createRef())
  

  useEffect(()=>{
   const mainImage = smallFrame[clicked].current.src
   bigFrame.current.src = mainImage;
  },[clicked])

  const handleClick = (e) =>{
    setClicked(e.target.id);
    
  }

  const displayModal = () => {
    showModal(true);
  }

  return (
    <div className='flex flex-col gap-4'>
        <img
        ref={bigFrame}
         className='rounded-lg cursor-pointer'
         onClick={displayModal} 
          alt="" />

        <div id='test' className='flex gap-2'>
            {images.map((img, i) => {
              return(
                <img
                ref={smallFrame[i]}
                onClick={handleClick}
               className={`${(i == clicked) && 'clicked'} rounded-lg cursor-pointer flex-1 w-8 hover:opacity-25`}
                src={img}
                 key={i}
                 id={i}
                  alt={`product sample${i}`} />
              ) 
            })}
        </div>
        
    </div>
  )
}

export default ProductShoe