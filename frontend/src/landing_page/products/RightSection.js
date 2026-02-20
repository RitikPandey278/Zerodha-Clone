import React from 'react'

function RightSection({productName, productDescription, learnMore, imageUrl}) {
    return ( 
        <div className='container  mb-5'>
            <div className='row mt-5 align-items-center'>
                <div className='col-5 offset-1 '>
                    <h2>{productName}</h2>
                    <p className=' mt-4'  style={{fontSize:"18px", lineHeight:"1.8", width:"340px"}}>{productDescription}</p>
                    <a href={learnMore} style={{textDecoration:"none"}}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className='col-6' style={{marginLeft:"-80px"}}>
                    <img src={imageUrl}/>
                </div>
            </div>
        </div>
     );
}

export default RightSection;