import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
    return ( 

        <footer style={{backgroundColor:"rgb(240, 240, 240"}}>
        <div className='container border-top mt-5' >
            <div className='row mt-5'>
                <div className='col'>
                    <Link to={"/"}><img src='media/images/logo.svg' alt='Zerodha Logo' style={{width:"50%"}}/></Link>
                    <p>&copy;2010-2025, Zerodha Broking Ltd.All rights reserved.</p>
                    <div className='border-bottom pb-3' style={{  display: "flex", gap:"15px", textDecoration:"none", color:"#6c757d"}}>
                        <a href="#" style={{color:"#6c757d", fontSize:"28px"}}><i class="fa fa-twitter" aria-hidden="true"></i></a>
                        <a href="#" style={{color:"#6c757d", fontSize:"28px"}}><i class="fa fa-facebook-official" aria-hidden="true"></i></a>
                        <a href="#" style={{color:"#6c757d", fontSize:"28px"}}><i class="fa fa-instagram" aria-hidden="true"></i></a>
                        <a href="#" style={{color:"#6c757d", fontSize:"28px"}}><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                        </div>

                        <div  style={{  display: "flex", gap:"15px", textDecoration:"none", color:"#6c757d"}}>
                        <a href="#" style={{color:"#6c757d", fontSize:"28px"}}><i class="fa fa-youtube-play"></i></a>
                        <a href="#" style={{color:"#6c757d", fontSize:"28px"}}><i class="fa fa-whatsapp"></i></a>
                        <a href="#" style={{color:"#6c757d", fontSize:"28px"}}><i class="fa fa-telegram"></i></a>
                        
                        </div>
                </div>
                <div className='col'>
                   <p className='fw-medium fs-5'>Account</p> 
                    
                    <a href=''className='text-muted fw-3'  style={{textDecoration:"none",color:"black",display:"block",   lineHeight: "0.8", fontSize:"15px"}}>Open demat account</a><br/>
                    <a href=''className='text-muted fw-3'  style={{textDecoration:"none",color:"black",display:"block",   lineHeight: "0.8", fontSize:"15px"}}>Minor demat account</a><br/>
                    <a href=''className='text-muted fw-3'  style={{textDecoration:"none",color:"black",display:"block",   lineHeight: "0.8", fontSize:"15px"}}>Minor demat account</a><br/>
                    <a href=''className='text-muted fw-3'  style={{textDecoration:"none",color:"black",display:"block",   lineHeight: "0.8", fontSize:"15px"}}>NRI demat account</a><br/>
                    <a href=''className='text-muted fw-3'  style={{textDecoration:"none",color:"black",display:"block",   lineHeight: "0.8", fontSize:"15px"}}>Commodity</a><br/>
                    <a href=''className='text-muted fw-3'  style={{textDecoration:"none",color:"black",display:"block",   lineHeight: "0.8", fontSize:"15px"}}>Dematerialisation</a><br/>
                    <a href=''className='text-muted fw-3'  style={{textDecoration:"none",color:"black",display:"block",   lineHeight: "0.8", fontSize:"15px"}}>Fund transfer</a><br/>
                    <a href=''className='text-muted fw-3'  style={{textDecoration:"none",color:"black",display:"block",   lineHeight: "0.8", fontSize:"15px"}}>MTF</a><br/>
                    <a href=''className='text-muted fw-3'  style={{textDecoration:"none",color:"black",display:"block",   lineHeight: "0.8", fontSize:"15px"}}>Referral program</a><br/>
                                        
                    </div>

                <div className='col'>
                    <p className='fw-medium fs-5'>Support</p>

                    <a href='' className='text-muted fw-3'  style={{textDecoration:"none",color:"black",display:"block",   lineHeight: "0.8", fontSize:"15px"}}>Contact us</a><br/>
                    <a href='' className='text-muted fw-3'  style={{textDecoration:"none",color:"black",display:"block",   lineHeight: "0.8", fontSize:"15px"}}>Support portal</a><br/>
                    <a href='' className='text-muted fw-3'  style={{textDecoration:"none",color:"black",display:"block",   lineHeight: "0.8", fontSize:"15px"}}>How to file a complaint?</a><br/>
                    <a href='' className='text-muted fw-3'  style={{textDecoration:"none",color:"black",display:"block",   lineHeight: "0.8", fontSize:"15px"}}>Status of your complaints</a><br/>
                    <a href='' className='text-muted fw-3'  style={{textDecoration:"none",color:"black",display:"block",   lineHeight: "0.8", fontSize:"15px"}}>Bulletin</a><br/>
                    <a href='' className='text-muted fw-3'  style={{textDecoration:"none",color:"black",display:"block",   lineHeight: "0.8", fontSize:"15px"}}>Circular</a><br/>
                    <a href='' className='text-muted fw-3'  style={{textDecoration:"none",color:"black",display:"block",   lineHeight: "0.8", fontSize:"15px"}}>Z-Connect blog</a><br/>
                    <a href='' className='text-muted fw-3'  style={{textDecoration:"none",color:"black",display:"block",   lineHeight: "0.8", fontSize:"15px"}}>Downloads</a><br/>
                                        
                    </div>
                <div className='col'>
                    <p className='fw-medium fs-5'>Company</p>
                    
                        <a href='' className='text-muted fw-3'  style={{textDecoration:"none",color:"black",display:"block",   lineHeight: "0.8", fontSize:"15px"}}>About</a><br/>
                        <a href='' className='text-muted fw-3'  style={{textDecoration:"none",color:"black",display:"block",   lineHeight: "0.8", fontSize:"15px"}}>Philosophy</a><br/>
                        <a href='' className='text-muted fw-3'  style={{textDecoration:"none",color:"black",display:"block",   lineHeight: "0.8", fontSize:"15px"}}>Press & media</a><br/>
                        <a href='' className='text-muted fw-3'  style={{textDecoration:"none",color:"black",display:"block",   lineHeight: "0.8", fontSize:"15px"}}>Careers</a><br/>
                       <a href=''  className='text-muted fw-3'  style={{textDecoration:"none",color:"black",display:"block",   lineHeight: "0.8", fontSize:"15px"}}> Zerodha Cares (CSR)</a><br/>
                        <a href='' className='text-muted fw-3'  style={{textDecoration:"none",color:"black",display:"block",   lineHeight: "0.8", fontSize:"15px"}}>Zerodha.tech</a><br/>
                        <a href='' className='text-muted fw-3'  style={{textDecoration:"none",color:"black",display:"block",   lineHeight: "0.8", fontSize:"15px"}}>Open source</a><br/>
                    
                    </div>
                <div className='col'>
                    <p className='fw-medium fs-5'>Quick links</p>
                       
                            <a href='' className='text-muted fw-3'  style={{textDecoration:"none",color:"black",display:"block",   lineHeight: "0.8", fontSize:"15px"}} >Upcoming IPOs</a><br/>
                            <a href='' className='text-muted fw-3'  style={{textDecoration:"none",color:"black",display:"block",   lineHeight: "0.8", fontSize:"15px"}} >Brokerage charges</a><br/>
                            <a href='' className='text-muted fw-3'  style={{textDecoration:"none",color:"black",display:"block",   lineHeight: "0.8", fontSize:"15px"}} >Market holidays</a><br/>
                            <a href='' className='text-muted fw-3'  style={{textDecoration:"none",color:"black",display:"block",   lineHeight: "0.8", fontSize:"15px"}} >Economic calendar</a><br/>
                            <a href='' className='text-muted fw-3'  style={{textDecoration:"none",color:"black",display:"block",   lineHeight: "0.8", fontSize:"15px"}} >Calculators</a><br/>
                            <a href='' className='text-muted fw-3'  style={{textDecoration:"none",color:"black",display:"block",   lineHeight: "0.8", fontSize:"15px"}} >Markets</a><br/>
                            <a href='' className='text-muted fw-3'  style={{textDecoration:"none",color:"black",display:"block",   lineHeight: "0.8", fontSize:"15px"}} >Sectors</a><br/>
                                                
                    
                    </div>
            </div>
            <div className=' mt-5 text-muted ' style={{fontSize:"14px"}}>
            <p className='mb-4'>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
            <p className='mb-4'>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
            <a href='' style={{color:"#387ed1;", textDecoration:"none", fontWeight:"500", marginBottom:"10px"}}>Smart Online Dispute Resolution | Grievances Redressal Mechanism</a>
            <p className='mb-4'>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
            <p className='mb-4'>Attention investors: 1&#41; Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2&#41; Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3&#41; Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
            <p className='mb-4'>India's largest broker based on networth as per NSE.<a href='' style={{color:"#387ed1;", textDecoration:"none", fontWeight:"500"}}>NSE broker factsheet</a></p>
            <p className='mb-4'>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
            <p className='mb-4'>*Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.</p>        
        </div>
        </div>
        </footer>

     );
}

export default Footer;