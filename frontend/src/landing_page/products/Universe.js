import React from 'react'

function Universe() {
    return ( 
        <div className='container mt-5 '>
            <div className='row text-center ' >
                <h1>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>

                <div className='col-4 p-3 mt-5'>
                    <img src="media/images/zerodhaFundhouse.png" style={{width:"50%"}}/>
                    <h6 className='text-small text-muted  mt-4' style={{fontSize:".75rem", lineHeight: "18px", display: "block",  marginLeft:"80px", width:"250px"}}>Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.</h6>

                    
                </div>
                <div className='col-4 p-3 mt-5'>
                     <img src="media/images/sensibullLogo.svg" style={{width:"50%"}}/>
                    <h6 className='text-small text-muted ' style={{fontSize:".75rem", lineHeight: "18px", display: "block", marginTop: "30px", marginLeft:"80px",width:"250px"}}>Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</h6>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src="media/images/tijori.svg" style={{width:"50%"}}/>
                    <h6 className='text-small text-muted mt-2' style={{fontSize:".75rem", lineHeight: "18px", display: "block",  marginLeft:"80px",width:"250px"}}>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</h6>
                </div>



                  <div className='col-4 p-3'>
                    <img src="media/images/streakLogo.png" style={{width:"50%"}}/>
                    <h6 className='text-small text-muted  mt-3' style={{fontSize:".80rem", lineHeight: "18px", display: "block",  marginLeft:"90px", width:"250px"}}>Systematic trading platform that allows you to create and backtest strategies without coding.</h6>

                    
                </div>
                <div className='col-4 p-3 mt-3 '>
                     <img src="media/images/smallcaseLogo.png" style={{width:"50%"}}/>
                    <h6 className='text-small text-muted mt-3' style={{fontSize:".80rem", lineHeight: "18px", display: "block",  marginLeft:"90px",width:"250px"}}>Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.</h6>
                </div>
                <div className='col-4 p-3 mt-4'>
                    <img src="media/images/dittoLogo.png" style={{width:"30%"}}/>
                    <h6 className='text-small text-muted mt-3' style={{fontSize:".80rem", lineHeight: "18px", display: "block",  marginLeft:"90px",width:"250px"}}>Personalized advice on life and health insurance. No spam and no mis-selling.</h6>
                </div>
                <button onClick={() => window.location.href = '/signup#phone'} className='p-2 mt-4 btn btn-primary fs-5 text-center' style={{width:"15%", margin:"0 auto"}}>Sign up for free</button>
            </div>
            
        </div>
     );
}

export default Universe;