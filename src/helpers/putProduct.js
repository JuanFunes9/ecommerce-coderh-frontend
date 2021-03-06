const axios = require( 'axios' );
const baseURL = 'https://ecommerce-coderh-backend.herokuapp.com';

const putProducts = ( prodId, prodData ) => {

  const apiUrl = `${ baseURL }/api/productos/${ prodId }`;
  let config = {
    headers: {
      admin: true
    }
  }

  axios.put( apiUrl, prodData, config )
    .then( res => console.log( res ) )
    .catch( err => console.log( err ) );

}

export default putProducts;