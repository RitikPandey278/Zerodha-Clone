import React from "react";

function Stats() {
  return (
    <div className="container p-5">
      <div className="row p-5">
        <div className="col-6 p-5 mb-5">
          <h1 className="fs-2 mb-5">Trust with confidence</h1>
          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted mb-4">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments, making us India’s largest broker;
            contributing to 15% of daily retail exchange volumes in India.
          </p>

          <h2 className="fs-4">No spam or gimmicks</h2>
          <p className="text-muted mb-4">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
            <a href="/term" style={{ textDecoration: "none" }}>
              Our philosophies
            </a>
          </p>

          <h2 className="fs-4">The Zerodha universe</h2>
          <p className="text-muted mb-4">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h2 className="fs-4">Do better with money</h2>
          <p className="text-muted mb-4">
            With initiatives like  
              <a href="/term" style={{ textDecoration: "none" }}>
                Nudge
              </a>
                 and
              <a href="/term" style={{ textDecoration: "none" }}>
                  Kill Switch
              </a>
            ,we don't just facilitate
          </p>
        </div>
        <div className="col-6 p-5">
          <img src="media/images/ecosystem.png" style={{ width: "100%" }} />
          <div className="text-center my-4">
            <a href="/term" className="mx-4" style={{textDecoration:"none"}}>
              Explore our products
              <i class="fa fa-long-arrow-right" aria-hidden="true" ></i>
            </a>
            <a href="/term" style={{textDecoration:"none"}} >
              Try Kite demo
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
