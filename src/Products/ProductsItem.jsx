import React from 'react'
import './style.css'
function ProductsItem({uname,ucity}) {
  const flag=false;
function textBox(flag){
  return flag?<>
  <h1>Name:{uname}</h1>
  <h1>Name:{ucity}</h1>
  </>: 
  <h4>Hello World</h4>
}


  return (
    <div className='names'>
    
{textBox(flag)}
       
    </div>
  )
}
export default ProductsItem
