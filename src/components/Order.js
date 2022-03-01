import React from 'react'
import Swal from 'sweetalert2'

const Order = () => {
  const submit = () => {
    Swal.fire({
      position: "center",
      icon: 'success',
      title: ' Your order Placed suceesfully',
      showConfirmButton: false,
      timer: 1500
    })
  }
  return (
    <div >


      <form action="action_page.php" />
      <h1 className='text-center'>Customer Details</h1>
      <div className='container'>
        <div>First Name</div>
        <input type="text" name="username" placeholder="Your name.." />

        <div  >Last Name</div>
        <input type="text" name="lastname" placeholder="Your last name.." />

        <div >Contact Number</div>
        <input type="tel" name="contactnumber" placeholder="Your Contact Number.." />


        <div  >Address</div>
        <input type="text" name="address" placeholder="your address.." />




        <div>Note</div>
        <textarea placeholder="Add note Here.." ></textarea>
        <br />

        <button className='btn-final' onClick={submit}> Order </button>
      </div>

    </div>

  )
}

export default Order
