import React from 'react'

const Item = () => {
  return (
    <div className='Item'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBj0m1wajVSVYdMAq36XcDCyl-ioKTkW-GqG2V2ZiDTNdhzzh1YcOAwolH&s=10 "width={100} height={100} alt="item image" />
        <h2>Title: ReactJs</h2>
        <h3>Price:₹567</h3>
        <button>Add to Cart</button>
      
    </div>
  )
}

export default Item
