import React from 'react'

const Item = ({props}) => {
  return (
    <div className='Item'>
        <img src={props.image[0]} width={100} height={100} alt="item image" />
        <h2>Title: {props.title}</h2>
        <h3>Price: ₹{props.price}</h3>
        <button>Add to Cart</button>
      
    </div>
  )
}

export default Item
