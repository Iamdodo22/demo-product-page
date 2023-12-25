import React, {useContext, useEffect, useRef} from 'react'
import sample1 from '../assets/images/image-product-1.jpg'
import sample2 from '../assets/images/image-product-2.jpg'
import sample3 from '../assets/images/image-product-3.jpg'
import sample4 from '../assets/images/image-product-4.jpg'
import closeModalBtn from '../assets/images/icon-close.svg'
import next from '../assets/images/icon-next.svg'
import prev from '../assets/images/icon-previous.svg'
import { ctx } from '../App';

const Modal = () => {
    const [,,,,,,,,,,showModal,,showImage,clicked,setClicked] = useContext(ctx);
    const images = [sample1,sample2,sample3,sample4] 
    const smallFrame = images.map(()=> React.createRef([]))
    const bigFrame = useRef(null)

    useEffect(()=>{
       const mainImage = smallFrame[clicked].current.src
       bigFrame.current.src = mainImage;   
      },[clicked]
    )

    const closeModal = () =>{
        showModal(false);
    }

    const handleClick = (e) =>{
      showImage(e.target.src)
      
      const t = e.target.closest('#test')
      const arr = Array.from(t.children)
      arr.map(child => {
        child.classList.remove('clicked')
      })
      // e.target.classList.add('clicked')
      setClicked(e.target.id)
    }

    const moveToPrev = () => {
     if(clicked == 0)return setClicked(3);
     setClicked(prev => prev - 1)
    }

    const moveToNext = () => {
      if(clicked == 3)return setClicked(0);
      setClicked(prev => prev + 1)
     }

  return (
    <div className='fixed top-0 left-0 w-screen h-screen black-trans flex flex-col gap-4 justify-center items-center z-20'>
        <div className='flex flex-col gap-4 items-end z-30'>
           <img
        className='cursor-pointer '
        onClick={closeModal}
         src={closeModalBtn}
          alt='close modal-btn' />
          <div className='relative'>
            <img
            ref={bigFrame}
            className='w-64 rounded-lg'
              alt={`full-image${clicked}`} />
            <img
             onClick={moveToPrev}
            className='absolute top-1/2 -translate-y-1/2 -left-4 bg-white px-3 cursor-pointer py-2 rounded-full shadow-md scale-75'
             src={prev}
              alt="" />
            <img
             onClick={moveToNext}
            className='absolute top-1/2 -translate-y-1/2 -right-4 bg-white px-3 py-2 cursor-pointer rounded-full shadow-md scale-75'
             src={next} 
             alt="" />
          </div>
          <div id='test' className='w-52 grid grid-cols-4 gap-2 self-center'>
            {images.map((img, i) => {
              return(
                <img
                ref={smallFrame[i]}
                onClick={handleClick}
               className={`${(i == clicked) && 'clicked'} rounded-lg cursor-pointer hover:opacity-25`}
                src={img}
                id={i}
                 key={i}
                  alt={`product-sample${i}`} />
              ) 
            })}
          </div> 
        </div>
        
    </div>
  )
}

export default Modal