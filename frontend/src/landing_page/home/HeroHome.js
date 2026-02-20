import React from "react";
import { useNavigate } from 'react-router-dom';

function HeroHome() {
  const navigate = useNavigate();

  return (
    <div className="contsiner p-5 mb-5">
      <div className="row text-center ">
        <img
          src="media/images/homeHero.png"
          alt="Hero Images"
          className="mb-5"
        />
        <h1 className="mt-5">Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button
          onClick={() => navigate('/signup#phone')}
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default HeroHome;
<h1>Hero</h1>;
