import React, { useState } from "react";
import { BrokerageData } from "./BrokerageData";
import "./Brokerage.css";

const Brokerage = () => {
  const [activeTab, setActiveTab] = useState("Equity");

  const activeData = BrokerageData[activeTab];

  return (
    <div className="container mt-4">

      {/* TABS */}
      <ul className="nav nav-tabs mb-3">
        {Object.keys(BrokerageData).map((tab) => (
          <li className="nav-item" key={tab}>
            <button
              className={`nav-link ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>

      {/* TABLE */}
      {activeData && (
        <div className="table-responsive">
          <table className="table table-bordered text-center brokerage-table">

            <thead className="table-light">
              <tr>
                <th></th>
                {activeData.headers?.map((head, i) => (
                  <th key={i}>{head}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {activeData.rows?.map((row, index) => (
                <tr key={index}>
                  <th className="text-start">{row.label}</th>
                  {activeData.columns?.map((col, i) => (
                    <td key={i}>{row[col]}</td>
                  ))}
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      )}
    <p className="fs-5 text-center mt-4"><a href="/term"style={{textDecoration:"none"}}>Calculate your costs upfront </a>using our brokerage calculator</p>
    </div>
  );
};

export default Brokerage;
