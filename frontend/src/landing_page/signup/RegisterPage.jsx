import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function RegisterPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const phone = location.state?.phone || "";

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) =>{
        setForm({...form, [e.target.name]: e.target.value});
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        
        if(!form.name || !form.email || !form.password){
            alert("Please fill all fields");
            return;
        }

        try{
            setLoading(true);
            const response = await axios.post("http://localhost:3002/register",{
                phone,
                ...form,
            });
            
            // Save token and user info
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('userName', response.data.userName);
            localStorage.setItem('phone', phone);
            
            alert("Registration successful!");
            navigate("/");
        }
        catch(err){
            console.log(err);
            alert(err.response?.data?.message || "Registration failed. Please try again.");
        }
        finally{
            setLoading(false);
        }
    };

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
                            <h3 className="card-title mb-2 fw-medium">Complete Registration</h3>
                            <p className="text-muted mb-4">Phone: +91 {phone}</p>
                            
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
                                        required
                                        disabled={loading}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input 
                                        type="email"
                                        name="email" 
                                        placeholder="Enter your email"
                                        value={form.email}
                                        onChange={handleChange}
                                        className="form-control"
                                        required
                                        disabled={loading}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input 
                                        type="password"
                                        name="password"
                                        placeholder="Enter a strong password"
                                        value={form.password}
                                        onChange={handleChange}
                                        className="form-control"
                                        required
                                        disabled={loading}
                                    />
                                </div>

                                <button 
                                    type="submit" 
                                    disabled={loading}
                                    className="btn btn-primary w-100 py-2"
                                    style={{fontSize: "16px"}}
                                >
                                    {loading ? "Registering..." : "Complete Registration"}
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