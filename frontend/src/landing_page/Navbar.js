import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const userName = localStorage.getItem('userName');

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userName');
        localStorage.removeItem('phone');
        setShowDropdown(false);
        navigate('/signup');
    };

    const getInitial = () => {
        return userName ? userName.charAt(0).toUpperCase() : 'U';
    };

    return ( 
        <nav className="navbar navbar-expand-lg border-bottom" style={{backgroundColor:"#fff"}}>
          <div className="container p-2">
           <Link className="navbar-brand" to={"/"}>
            <img src="media/images/logo.svg" alt="Zerodha Logo" style={{height:"20px", width:"auto"}}/>  
           </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        {!token && (
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/signup"}>Signup</Link>
            </li>
        )}
        <li className="nav-item">
          <Link className="nav-link active" to={"/about"}>About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to={"/product"}>Product</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to={"/pricing"}>Pricing</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to={"/support"}>Support</Link>
        </li>
        
        {token && (
          <li className="nav-item">
            <div className="position-relative" style={{marginLeft: "20px"}}>
              <button 
                className="btn p-0"
                onClick={() => setShowDropdown(!showDropdown)}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "#0066cc",
                  color: "white",
                  border: "none",
                  fontSize: "18px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease"
                }}
              >
                {getInitial()}
              </button>

              {showDropdown && (
                <div 
                  className="position-absolute bg-white border rounded mt-2 shadow-sm"
                  style={{
                    right: 0,
                    top: "45px",
                    minWidth: "150px",
                    zIndex: 1000
                  }}
                >
                  <Link 
                    to={"/profile"}
                    className="d-block px-3 py-2 text-dark text-decoration-none"
                    style={{fontSize: "14px", borderBottom: "1px solid #eee"}}
                    onClick={() => setShowDropdown(false)}
                  >
                    <i className="fa fa-user me-2"></i> Profile
                  </Link>
                  <button
                    onClick={() => {
                      setShowDropdown(false);
                      window.location.href = "http://localhost:3000/login";
                    }}
                    className='d-block w-100 text-start px-3 py-2 text-dark'
                    style={{fontSize: "14px", borderBottom:"1px solid #eee", background: "none", border: "none", cursor: "pointer"}}
                    >
                    <img src='media/images/SecKitelogo.svg' alt='kite logo' style={{width: "20px", marginRight:"5px"}}/> Kite Login
                    </button>
                  <button 
                    onClick={handleLogout}
                    className="d-block w-100 text-start px-3 py-2 text-danger"
                    style={{fontSize: "14px", background: "none", border: "none", cursor: "pointer"}}
                  >
                    <i className="fa fa-sign-out me-2"></i> Logout
                  </button>

                  
                </div>
              )}
            </div>
          </li>
        )}
      </ul>
    </div>
  </div>
</nav>
        
     );
}

export default Navbar;