import React from 'react'
import './Accounttypes.css';

const accounts = [
    {
        title: "Individual Account",
        desc:  "Invest in equity, mutual funds and derivatives",
        icon: "👤",
    },
    {
        title: "HUF Account",
        desc: "Make tax-efficient investments for your family",
        icon: "👥"
    },
    {
        title: "NRI Account",
        desc: "Invest in equity, mutual funds, debentures, and more",
        icon: "🌍",
    },
    {
        title: "Minor Account",
        desc: "Teach your little ones about money & invest for their future with them",
        icon: "🧒",
    },
    {
        title: "Corporate / LLP / Partnership",
        desc: "Manage your business surplus and investments easily",
        icon: "🏢",
    },
];

function Accounttypes() {
    return ( 
        <div className='container py-5'>
            <h2 className='text-center mb-5 fw-semibold'>
                 Explore different account types
            </h2>

            <div className='row g-4'>
                {accounts.map((item,index)=>{
                    return (
                    <div className='col-md-4' key={index}>
                        <div className='account-card h-100'>
                            <div className='account-icon'>{item.icon}</div>

                            <div className='account-content'>
                              <h5 className='fw-semibold mb-2'>{item.title}</h5>
                              <p className="text-muted mb-0" style={{ lineHeight: "1.6" }}>
                                    {item.desc}
                              </p>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
     );
}

export default Accounttypes;