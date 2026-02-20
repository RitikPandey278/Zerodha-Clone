import React from 'react'

const SupportHero = () => {
  return (
    <div className="support-hero mt-5 mb-5" style={{paddingLeft:"130px", paddingRight:"130px"}}>

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="fw-semibold fs-1"><a href='#' style={{textDecoration:"none", color:"black"}}>Support Portal</a></h1>
        <button className="btn btn-primary">My tickets</button>
      </div>

      <div className="search-box mb-5" style={{position:"relative", width:"100%"}}>
        <input
          type="text"
          className="form-control"
          placeholder="Eg: How do I open my account, How do I activate F&O..."
          style={{height:"60px", fontSize:"15px", paddingLeft:"45px"}}
        />
        <i className="fa fa-search search-icon" aria-hidden="true" style={{left:"15px", top:"50%", transform: " translateY(-50%)", pointerEvents:"none"}}></i>
      </div>

    </div>
  );
};

export default SupportHero;