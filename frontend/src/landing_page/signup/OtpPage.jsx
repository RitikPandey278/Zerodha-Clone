import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function OtpPage(){
    
    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const phone = location.state?.phone;

    const handleVerifyOtp = async () =>{
        if(!otp || otp.length !== 6){
            alert("Please enter a valid 6-digit OTP");
            return;
        }

        try{
            setLoading(true);
            const response = await axios.post("http://localhost:3002/verifyOtp",{
                phone,
                otp,
            });

            // Check if user is registered
            if(response.data.isRegistered){
                // User is registered - save token and go to home
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('userName', response.data.userName);
                localStorage.setItem('phone', phone);
                navigate("/");
            } else {
                // User not registered - go to registration form
                navigate("/signup/register", {state:{phone}});
            }

        }
        catch(err){
            console.log(err);
            alert("Invalid OTP. Please try again.");
        }
        finally{
            setLoading(false);
        }
    }

    if(!phone){
        return (
            <div className="container mt-5">
                <div className="alert alert-danger">
                    Invalid access. Please go back and enter your phone number.
                </div>
            </div>
        )
    }

    return(
        <div className="container mt-5 mb-5">
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <div className="card shadow-sm">
                        <div className="card-body p-4">
                            <h3 className="card-title mb-2 fw-medium">Verify OTP</h3>
                            <p className="text-muted mb-4">We've sent an OTP to +91 {phone}</p>
                            
                            <div className="mb-3">
                                <label className="form-label">Enter OTP</label>
                                <input
                                    type="text"
                                    value={otp}
                                    onChange={(e)=> setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                                    placeholder="Enter 6-digit OTP"
                                    maxLength="6"
                                    className="form-control form-control-lg text-center"
                                    style={{fontSize: "24px", letterSpacing: "10px"}}
                                    disabled={loading}
                                />
                            </div>

                            <button 
                                onClick={handleVerifyOtp}
                                disabled={loading || otp.length !== 6}
                                className="btn btn-primary w-100 py-2"
                                style={{fontSize: "16px"}}
                            >
                                {loading ? "Verifying..." : "Verify OTP"}
                            </button>

                            <div className="mt-3 text-center">
                                <button 
                                    onClick={() => navigate("/signup")}
                                    className="btn btn-link text-decoration-none"
                                >
                                    Change phone number
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OtpPage;