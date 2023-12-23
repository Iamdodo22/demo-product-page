import React, {useEffect, useState} from 'react'
import Header from './components/header'
import Main from './components/Main'
import Modal from './components/Modal'
import sample1 from './assets/images/image-product-1.jpg'

export const ctx = React.createContext()

function App() { 

  const [price, setPrice] = useState(125);
  const [total, setTotal] = useState(0);
  const [qty, setQty] = useState(0);
  const [count, setCount] = useState(0);
  const [add, setAdd] = useState(false);
  const [modal, showModal] = useState(false);
  const [image, showImage] = useState(sample1);
  const [clicked, setClicked] = useState(0);
  
  return (
    <ctx.Provider value={[price,total,setTotal,qty,setQty,count,setCount,add,setAdd,modal,showModal,image,showImage,clicked,setClicked]}>
    <div className=' pl-28 pt-4 pr-20 max-md:pl-0 max-md:pr-0 font-pFontfamily text-Pfontsize'>
    {modal && <Modal/>}
      <Header/>
      <Main />
    </div>
    </ctx.Provider>
  )
}

export default App
