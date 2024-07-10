import React from 'react'
import './PaymentSuccess.css'
import { Link } from 'react-router-dom'

const PaymentSuccess = () => {
  return (
    <div className='thanks'>
      <p className='big' id='thnk'>Thank You</p>
      <div>
        <p className='s1'>Your Payment is Successful</p>
        <p className='s2'>Thank You for your payment, An automated payment receipt will be sent to your registered email.</p>
        <Link to='/'><p className='back'>Back to Home</p></Link>
      </div>
    </div>
  )
}

export default PaymentSuccess
