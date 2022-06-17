import React from 'react';
//components:
import NewProductForm from './NewProductForm';

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav-content" >
          <div className="left-nav" >
            <h1>e-Commerce</h1>
          </div>
          <div className="right-nav" >
            <div className="new-product-container" >
              <span className="material-symbols-outlined">add</span>
              <p>Producto</p>
            </div>
            <div className="chart-container" >
              <span className="material-symbols-outlined">shopping_cart</span>
            </div>
          </div>
        </div>
      </nav>
      {/* <NewProductForm /> */}
    </>
  )
}

export default Navbar;