import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function RegisterPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const email  = location.state?.email  || "";

    const [form, setForm] = useState({
        name: "",
        password: "",
    });

    const API_BASE_URL= 
        window.location.hostname === "localhost"
          ? "http://localhost:3002":"https://zerodha-clone-stmi.onrender.com";

    
          const handleChange = (e)=>{

                    setForm({
                    ...form,
                    [e.target.name]:e.target.value
                    })

                    }



    const handleSubmit = async(e) => {
        e.preventDefault();
        
        if(!form.name || !form.phone || !form.password){
            alert("Please fill all fields");
            return;
        }

        try{
           
            const response = await axios.post(`${API_BASE_URL}/auth/register`,{
                email,
                ...form,
            });
            
            // Save token and user info
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('userName', response.data.userName);
            
            alert("Registration successful!");
            navigate("/");
        }
        catch(err){
            console.log(err);
            alert(err.response?.data?.message || "Registration failed. Please try again.");
        }
        
    };

    if(!email){
        return (
            <div className="container mt-5">
                <div className="alert alert-danger">
                    Invalid access. Please go back and enter your email.
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
                            <h3 className="card-title mb-2 fw-medium">Registration</h3>
                            <p className="text-muted mb-4">Email: {email}</p>
                            
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Full Name</label>
                                    <input 
                                        type="text"
                                        name="name" 
                                        placeholder="Enter your full name"
                                       value={form.name}
                                        onChange={handleChange}
                                        className="form-control"
                                        
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Phone Number</label>
                                    <input 
                                        type="number"
                                        name="phone" 
                                        placeholder="Enter your phone number"
                                        value={form.phone}
                                        onChange={handleChange}
                                        className="form-control"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input 
                                        type="password"
                                        name="password"
                                        placeholder="Enter a strong password"
                                        onChange={handleChange}
                                        className="form-control"
                                        value={form.password}
                                        
                                    />
                                </div>

                                <button 
                                    type="submit" 
                                    onClick={handleSubmit}
                                    className="btn btn-primary w-100 py-2"
                                    style={{fontSize: "16px"}}
                                >
                                    Register
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
export default RegisterPage;