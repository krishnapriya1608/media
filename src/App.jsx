
import { useState } from 'react'
import './App.css'
import ProductList from './Products/ProductList'
import ProductsItem from './Products/ProductsItem'
import User from './User/User'

 
function App() {
  const defaultValues=["product1","product2","product3"]

  const[username,setUsername]=useState("Krishna")
  const[usercity,setUsercity]=useState('Kochi')


const[like,userLike]=useState('TCS')
const[likes,userLikes]=useState("Ust")
const dict=["op1","op2"]
  return (
    <>
     <ProductList  listofProducts={defaultValues}/>
  <ProductsItem  uname={username} ucity={usercity}/>
  <User/>

    </>
  )
}
export default App
