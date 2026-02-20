import React from 'react'
import { useNavigate } from 'react-router-dom';

function OpenAccount() {
    const navigate = useNavigate();

    return ( 
        <div className='container text-center p-5 mt-5'>
            <h1 className='fs-2 '>Open a Zerodha account</h1>
            <p className='mt-4 text-muted'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.Sign up for free</p>
            <button onClick={() => navigate('/signup#phone')} className=' p-2 mt-4 btn btn-primary fs-5' style={{width:"20%", margin:"0 auto"}}>Sign up for free</button>
        </div>
     );
}

export default OpenAccount;