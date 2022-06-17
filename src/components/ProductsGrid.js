import React from 'react';
//components:
import ProductItem from './ProductItem';

const ProductsGrid = ({ products }) => {

  return (
    <div className="products-grid" >
      {
        ( products === [] )
          ? ( <div>Loading...</div> )
          : (
              products.map( product => {
                return(
                  <ProductItem product={ product } key={ product.id } />
                )
              } )
          )
      }
    </div>
  )
}

export default ProductsGrid;