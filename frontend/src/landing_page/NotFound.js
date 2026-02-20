import React from 'react'
import { Link } from 'react-router-dom';

function OpenAccount() {
    return ( 
        <div className='container text-center p-5 mt-5'>
            <h1 className='fs-2 '>404</h1>
            <h2 className='fs-2'>Kiaan couldn’t find that page</h2>
            <p className='mt-4 text-muted'>We couldn’t find the page you were looking for. Visit<Link style={{textDecoration:"none"}} to={"/"}> Zerodha’s home page</Link>  </p>
            
        </div>
     );
}

export default OpenAccount;