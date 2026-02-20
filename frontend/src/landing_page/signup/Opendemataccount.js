import React from 'react';

function Opendemataccount() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        
        {/* Heading */}
        <h2 className='text-center fs-3 mb-5 pb-3'>
                Investment options with Zerodha demat account
            </h2>

        {/* Left Image */}
        <div className="col-md-6 text-center text-md-end mb-4 mb-md-0 d-flex justify-content-center justify-content-md-end">
          <img
            src="media/images/steps-acop.svg"
            alt="OpenAccount"
            className="im4g-fluid"
            style={{ maxWidth: "400px" }}
          />
        </div>

        {/* Right Steps */}
        <div className="col-md-6">
          {[
            "Enter the requested details",
            "Complete e-sign & verification",
            "Start investing!",
          ].map((step, index) => (
            <div
              key={index}
              className="d-flex align-items-center mb-4 pb-3"
              style={{ borderBottom: "none" }}
            >
              <div style={{ display: "inline-flex", alignItems: "center", borderBottom: "1px solid #e5e5e5", paddingBottom: "12px" }}>
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "50%",
                    backgroundColor: "#f1f3f6",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "600",
                    marginRight: "15px",
                  }}
                >
                  {`0${index + 1}`}
                </div>
                <h5 className="mb-0">{step}</h5>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Opendemataccount;
