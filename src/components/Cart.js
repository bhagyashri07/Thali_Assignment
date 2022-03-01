import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RemoveItem } from '../redux/slice';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'

const Cart = () => {



  const thali = useSelector(state => state.counter.thali)

  const click = () => {
    if (thali.length < 2) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Your Thali Should have Atlest 2 items',

      })
    }

    else {
      navigate("/Order")
      // Swal.fire({

      //   position: 'top-end',
      //   icon: 'success',
      //   title: 'order  placed suceesfull',
      //   showConfirmButton: false,
      //   timer: 1500
      // })

    }

  }
  console.log(thali)
  const dispatch = useDispatch()
  const Remove = (id) => {
    dispatch(RemoveItem(id))

  }
  const navigate = useNavigate()
  var totalsum = 0
  for (const item of thali) {
    totalsum = totalsum + item.totalPrice
  }
  return (
    <>
      <div>

        <h1 className=' order-title text-center' >Your Order</h1>
        <div className='row '>

          {
            thali.map((ele, ind) => (
              <div className='col-3 my-3'>
                <div className="card " key={ind} >

                  <img src={ele.url} className="card-img-top " alt="..." width="30px" height="100px " />
                  <h2 className="card-title">{ele.title}</h2>
                  <div className="card-body">

                    <p className="card-text">Quantity:- {ele.quantity}</p>
                    <p className="card-text">Price:- $ {ele.price}</p>
                    <p className="card-text">TotalPrice:- $ {ele.totalPrice}</p>
                    <button onClick={() => Remove(ind)} className="btn btn-danger">Remove</button>

                  </div>
                </div>
              </div>



            )
            )
          }
          <h2 className="total-bill text-center" >Your Total Bill Amount :- $ {totalsum}</h2>


        </div>
      </div>

      <button className='btn-order text-center' onClick={click}>Place Order</button>
    </>
  )
}

export default Cart