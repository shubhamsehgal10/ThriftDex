import React from 'react'
import './PaymentSuccess.css'
import { Link } from 'react-router-dom'

const Success = () => {
  return (
    <div className='thanks'>
      <p className='big' id='thnk'>Thank You</p>
      <div>
        <p className='s1'>Your Login is Successful</p>
        {/* <p className='s2'>Thank You.</p> */}
        <Link to='/'><p className='back'>Back to Home</p></Link>
      </div>
    </div>
  )
}

export default Success
