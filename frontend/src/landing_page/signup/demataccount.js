import React from 'react'

function demandaccount() {
    const options = [
        {
            title: "Stocks",
            description: "Invest in all exchange-listed securities",
            image: "media/images/stocks-acop.svg"
        },
        {
            title: "Mutual funds",
            description: "Invest in commission-free direct mutual funds",
            image: "media/images/mf-acop.svg"
        },
        {
            title: "IPO",
            description: "Apply to the latest IPOs instantly via UPI",
            image: "media/images/ipo-acop.svg"
        },
        {
            title: "Futures & options",
            description: "Hedge and mitigate market risk through simplified F&O trading",
            image: "media/images/fo-acop.svg"
        },
    ]

    return (
        <div className='container' style={{ marginTop: "120px", marginBottom: "100px" }}>
            <h2 className='text-center fs-3 mb-5 pb-3'>
                Investment options with Zerodha demat account
            </h2>
            
            <div className='row justify-content-center'>
                <div className='col-md-11'> 
                    {/* row-gap-5 se upar aur niche wale items (Stocks/IPO) mein gap aayega */}
                    {/* justify-content-center items ko center-right ki taraf dhakelega */}
                    <div className='row justify-content-center row-gap-5'>
                        {options.map((option, index) => (
                            <div className='col-md-5 d-flex align-items-center justify-content-center' key={index}>
                                <div className='d-flex align-items-center' style={{ width: "100%", maxWidth: "400px"}}>
                                    <img 
                                        src={option.image} 
                                        alt={option.title} 
                                        className='me-4' 
                                        style={{ width: "100px", height: "auto" }} 
                                    />
                                    <div>
                                        <h4 className='fw-medium mb-2' style={{ color: "#424242", fontSize: "1.25rem" }}>
                                            {option.title}
                                        </h4>
                                        <p className='text-muted' style={{ fontSize: "1rem", lineHeight: "1.6", margin: "0" }}>
                                            {option.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Button Section */}
            <div className='text-center ' style={{ marginTop: "80px" }}>
                <button className='btn btn-primary fw-bold' style={{ backgroundColor: "#387ed1", border: "none", padding: "12px 50px", fontSize: "1.1rem", borderRadius: "4px" }}>
                    Explore Investments
                </button>
            </div>
        </div>
    );
}

export default demandaccount;