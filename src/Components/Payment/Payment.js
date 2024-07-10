import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import './Payment.css'
import { Link } from 'react-router-dom';

const Payment = () => {
    const {getTotalCartAmount} = useContext(ShopContext);
  return (
    <div className="container">
    <div className='payment'>
        <div className='head-container'>
            <div className='heading'>
                Total Amount
            </div>
            <div className='amount'>
                ${getTotalCartAmount()}
            </div> 
        </div>
        <div className='card'>
            <div>CARD NUMBER</div>
            <input type="number" placeholder='Card Number'/>
        </div>
        <div className='excvv'>
            <p className='p1'>Expiry</p>
            <p className='p2'>CVV</p>
                <input className='inp1' type="date" />
                <input className='inp2' type="number" />
        </div>
        <div>
            <div className='cancel'>
                <button>Cancel</button>
            </div>
            <div className='pay'>
                <Link to='/success'><button>Make Payment</button></Link>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Payment
