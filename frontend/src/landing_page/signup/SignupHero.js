import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function SignupHero() {

    const navigate = useNavigate();

    const [email,setEmail]=useState("")

    const API_BASE_URL = window.location.hostname === "localhost"
        ? "http://localhost:3002" 
        : "https://zerodha-clone-stmi.onrender.com"


    const handleContinue  = async () =>{

        if(!email){
            alert("Please enter email");
            return;
        }

        try{

          const res = await axios.post(
            `${API_BASE_URL}/auth/checkEmail`,
            { email }
          );
          console.log(res.data)

          // अगर user registered है
          if(res.data.isRegistered){

                localStorage.setItem("token",res.data.token)
                localStorage.setItem("userName",res.data.userName)

                navigate("/")

          }

          // अगर registered नहीं है
          else{

                navigate("/signup/register",{
                    state:{email}
                })

          }

        }
        catch(err){

            console.log(err);
            alert("Error connecting server");

        }

    };



    return(
        <div className="container mt-5 mb-5">
            <div className="row ">

                <div className="col-6 mr-5">
                    <img 
                    src="media/images/account_open.svg" 
                    alt="account image" 
                    style={{
                        width:"400px",
                        marginLeft:"250px"
                        }}
                    />
                </div>

                <div className="col-md-5 ps-md-5">

                    <h3 
                    className="mb-1 fw-medium fs-5"
                    style={{color:"#424242"}}
                    >
                    Sign in / Login
                    </h3>

                    <p className="text-muted fs-6">
                    Enter your email to continue
                    </p>


                      <div 
                      className="input-group mb-4" 
                      style={{maxWidth:"350px"}}
                      >

                        <input 

                            type="email"
                            value={email}

                            onChange={(e)=> 
                                setEmail(e.target.value)
                            }

                            placeholder="Enter your email"

                            className="form-control py-2"

                            style={{
                                fontSize:"1rem",
                                height:"50px"
                            }}

                        />

                      </div>



                      <button 

                        onClick={handleContinue}

                        className="btn btn-primary mb-4"

                        style={{

                            backgroundColor:"#387ed1",
                            border:"none",
                            padding:"10px 30px",
                            fontSize:"1.1rem",
                            width:"200px"

                        }}

                        >
                              Sign in / Login

                        </button>



                </div>

            </div>
        </div>
    );

}

export default SignupHero;