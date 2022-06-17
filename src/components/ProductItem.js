import React from 'react';

const ProductItem = ({ product }) => {
  return (
    <div className="product-item" >
      <div className="img-container" >
        <img src={ product.thumbnail } alt="img" ></img>
      </div>
      <div className="info-container" >
        <div className="left-info" >
          <h4>{ product.title }</h4>
          <p>$ { product.price }</p>
        </div>
        <div className="right-info" >
          <span className="material-symbols-outlined">add_shopping_cart</span>
        </div>
      </div>
    </div>
  )
}

export default ProductItem;