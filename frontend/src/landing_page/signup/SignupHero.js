import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";

function SignupHero() {
    const phoneRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();

    const[phone, setPhone] = useState("");
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        if (location.hash === '#phone' && phoneRef.current) {
            const input = phoneRef.current;
            input.focus();
            try {
                const len = input.value ? input.value.length : 0;
                input.setSelectionRange(len, len);
            } catch (e) {}
            try { input.scrollIntoView({ behavior: 'smooth', block: 'center' }); 
          } catch (e) {}
        }
    }, [location]);

    const handleSendOtp = async () =>{
        if(phone.length !== 10){
            alert("Please enter a valid 10-digit phone number.");
            return;
        }
        try{
            setLoading(true);

            await axios.post("http://localhost:3002/sendOtp",{
                phone,
            });
            navigate("/signup/otp", {state:{phone}});
        }
        catch(err){
            console.log(err);
            alert("Failed to send OTP. Please try again.");

        }
        finally{
            setLoading(false);
        }
    };

    return(
        <div className="container mt-5 mb-5">
            <div className="row ">
                <div className="col-6 mr-5">
                    <img src="media/images/account_open.svg" alt="account image" style={{width:"400px", paddingRight:"0px",marginLeft:"250px"}}/>
                </div>
                <div className="col-md-5 ps-md-5">
                    <h3 className="mb-1 fw-medium fs-5" style={{color:"#424242"}}>Signup now</h3>
                    <p className="text-muted fs-6">Or track your existing application</p>
                      <div className="input-group mb-4" style={{maxWidth:"350px"}}>
                        <span className="input-group-text bg-white border-end-0 py-3"style={{height:"50px"}}>
                            <img src="media/images/india-flag.svg" alt="" className="p-1"/>
                             +91
                        </span>
                        <input 
                            ref={phoneRef} 
                            id="signup-phone" 
                            type="tel" 
                            value={phone}
                            onChange={(e)=> setPhone(e.target.value.replace(/\D/g, ""))}
                            placeholder="Enter your mobile number" 
                            className="form-control rounded-0 py-2" 
                            style={{
                                fontSize:"1rem", 
                                height:"50px",
                                padding:"8px" 
                                }} 
                                maxLength="10"
                                />
                      </div>

                      <button 
                        onClick={handleSendOtp}
                        disabled={loading}
                        className="btn btn-primary fx-bold mb-4" 
                        style={{
                            backgroundColor:"#387ed1",
                            border:"none", 
                            padding:"10px 30px", 
                            fontSize:"1.1rem", width:"200px"
                            }}>
                                {loading ? "Sending...": "Get OTP"}
                        </button>

                      <div style={{ maxWidth: "350px" }}>
              <p 
                className="text-muted" 
                style={{ fontSize: "12px", lineHeight: "1.6" }}>
                By proceeding, you agree to the Zerodha{" "}
                <a href="#" className="text-decoration-none">terms</a> &{" "}
                <a href="#" className="text-decoration-none">privacy policy</a>
              </p>

              <hr />
              {/* NRI LINK */}
              <p 
              style={{ 
                fontSize: "13px", 
                marginTop: "10px" , 
                marginBottom:"50px"
                }}>
                Looking to open NRI account?{" "}
                <a href="#" className="text-decoration-none">
                  Click here
                </a>
              </p>
          </div>
                    

                </div>
            </div>
        </div>
    );
}
export default SignupHero;