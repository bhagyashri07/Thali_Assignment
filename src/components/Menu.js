import React from 'react';
// import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Product from './Product';




function Menu() {

  const productData = useSelector(state => state.counter.products)

  return (

    <div>
      <h1 className=' menu-title text-center '>Menu </h1>
      <div className='row my-3' >

        {
          productData.map((ele, i) => (

            <Product key={i} data={ele} />

          ))
        }


      </div>
    </div>



  )




}

export default Menu;