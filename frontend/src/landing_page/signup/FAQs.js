import React from 'react'
import './FAQs.css'


function FAQs() {
    const faqs = [
    "What is a Zerodha account",
    "What documents are required to open a demat account?",
    "Is Zerodha account opening free?",
    "Are there any maintenance charges for a demat account?",
    "Can I open a demat account without a bank account?",
    "What is a Basic Services Demat Account (BSDA)?",
    "Can I open a demat and trading account using the mobile app?",
  ];
    return ( 
        <div className="container py-5">
      <h2 className="mb-4">FAQs</h2>

      <div className="faq-list">
        {faqs.map((question, index) => (
          <div className="faq-item" key={index}>
            <div className="faq-line"></div>

            <button
              className="faq-question"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#faq-${index}`}
            >
              {question}
              <span className="arrow">⌄</span>
            </button>

            <div id={`faq-${index}`} className="collapse">
              <div className="faq-answer">
                A Zerodha account is a combined demat and trading account that allows investors to buy, sell, and hold securities digitally.
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
     
}

export default FAQs;