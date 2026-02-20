import React from 'react'

function LeftSection({imageUrl, productName, productDescription, tryDemo, learnMore, gogglePlay, appStore}) {
    return ( 
        <div className='container mb-5'>
            <div className='row '>
                <div className='col-5 offset-1'>
                    <img src={imageUrl}/>
                </div>
                <div className='col-4 mt-5 offset-2'>
                    <h2>{productName}</h2>
                    <p className='w-75 mt-4 ' style={{fontSize:"18px", lineHeight:"1.8"}}>{productDescription}</p>
                    <div>
                        <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href={learnMore} style={{marginLeft:"50px",textDecoration:"none"}}>Learm More  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                    <div className='mt-5'>
                        <a href={gogglePlay} ><img src="media/images/googlePlayBadge.svg"/></a>
                        <a href={appStore} style={{marginLeft:"20px"}}><img src="media/images/appstoreBadge.svg"/></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;