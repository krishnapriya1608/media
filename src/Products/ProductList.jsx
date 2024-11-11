import React from 'react';
import Items from "../Products/Items";
import './style.css';
function ProductList({ listofProducts }) {
  return (
    <div className='products'>
      <h1 className='mm'>E-Commerce Products</h1>
      {
        listofProducts.map((item, index) => (
          <Items singleproducts={item} key={index} />
        ))
      }
    </div>
  );
}

export default ProductList;

