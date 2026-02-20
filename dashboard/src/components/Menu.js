import React, { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";

const Menu = () => {
    //ye menu ko click krne ke liya lgaya ja raha hai
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  // menu ko click krna ke liya aur phle menu ki index value 0 hai phir next ki 1...
  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };
   // same profile menu ke liya bhi kya gaya hai jasa menu ke liya kara gaya hai 

  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  useEffect(() => {
    let name = localStorage.getItem("userName");
    if (!name || name === "undefined" || name === "null") name = "";
    setUserName(name);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    localStorage.removeItem("userId");
    localStorage.removeItem("phone");
    navigate("/login");
  };

  // ab ye function hai jab menu ke option par click krte ho to uska coloe badal jaya bake take baki sare menu se alag color ho jaya aur lge ki in menu mai  ho

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              // ye handleMenuClick jo call kiya gaya ye upper jo function bnaya tha vahi hai aur yeha value 0 de di gyi hai aage baki menu ki value badal aur increase hote rhegi.
              onClick={() => handleMenuClick(0)}
            >
        
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
            
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(6)}
            >
              <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick} style={{position: 'relative'}}>
          <div className="avatar">{userName ? userName.charAt(0).toUpperCase() : 'Z'}</div>
          <p className="username">{userName ? userName : 'USERID'}</p>

          {isProfileDropdownOpen && (
            <div
              className="profile-dropdown"
              style={{
                position: "absolute",
                top: "40px",
                left: 0,
                background: "#fff",
                border: "1px solid #ddd",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                borderRadius: 4,
                minWidth: 120,
                zIndex: 50,
              }}
            >
              <div
                className="dropdown-item"
                onClick={() => {
                  setIsProfileDropdownOpen(false);
                  navigate("/profile");
                }}
                style={{ padding: "8px 12px", cursor: "pointer" }}
              >
                Profile
              </div>
              <div
                className="dropdown-item"
                onClick={handleLogout}
                style={{ padding: "8px 12px", cursor: "pointer" }}
              >
                Logout
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;