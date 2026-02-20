const BrokerageData = {
    Equity: {
        headers:[
            "Equity Delivery",
            "Equity Intraday",
            "F&O Futures",
            "F&O Options",
        ],
        columns: ["delivery", "intraday", "futures", "options"],
        rows:[
            {
        label: "Brokerage",
        delivery: "Zero Brokerage",
        intraday: "0.03% or Rs. 20/executed order whichever is lower",
        futures: "0.03% or Rs. 20/executed order whichever is lower	",
        options: "Flat Rs. 20 per executed order"
        },
        {
        label: "STT/CTT",
        delivery: "0.1% on buy & sell",
        intraday: "0.025% on the sell side",
        futures: "0.02% on the sell side",
        options: "0.125% of the intrinsic value on options that are bought and exercised"
        },
        {
        label: "Transaction charges",
        delivery: "NSE: 0.00297%BSE: 0.00375%",
        intraday: "NSE: 0.00297%BSE: 0.00375%",
        futures: "NSE: 0.00173%BSE: 0",
        options: "NSE: 0.03503% (on premium)BSE: 0.0325% (on premium)"
        },
        {
        label: "GST",
        delivery: "18% on (brokerage + SEBI charges + transaction charges)",
        intraday: "18% on (brokerage + SEBI charges + transaction charges)",
        futures: "18% on (brokerage + SEBI charges + transaction charges)",
        options: "18% on (brokerage + SEBI charges + transaction charges)"
        },
        {
        label: "SEBI charges",
        delivery: "₹10 / crore",
        intraday: "₹10 / crore",
        futures: "₹10 / crore",
        options: "₹10 / crore"
        },
        {
        label: "Stamp charges",
        delivery: "0.015% or ₹1500/ crore on buy side",
        intraday: "0.003% or ₹300 / crore on buy side",
        futures: "0.002% or ₹200 / crore on buy side",
        options: "0.003% or ₹300 / crore on buy side"
        },

        ],
},
    Currency: {
        headers:[
            "Currency futures",
            "Currency options",
        ],
        columns: ["futures", "options"],
        rows:[
        {
        label: "Brokerage",
        futures: "0.03% or ₹ 20/executed order whichever is lower",
        options: "	₹ 20/executed order"
        },
        {
        label: "STT/CTT",
        futures: "No STT",
        options: "No STT"
        },
        {
        label: "Transaction charges",
        futures: "NSE: 0.00035%BSE: 0.00045%",
        options: "NSE: 0.03503% (on premium)BSE: 0.0325% (on premium)"
        },
        {
        label: "GST",
        futures: "18% on (brokerage + SEBI charges + transaction charges)",
        options: "18% on (brokerage + SEBI charges + transaction charges)"
        },
        {
        label: "SEBI charges",
        futures: "₹10 / crore",
        options: "₹10 / crore"
        },
        {
        label: "Stamp charges",
        futures: "0.0001% or ₹10 / crore on buy side",
        options: "	0.0001% or ₹10 / crore on buy side"
        },
   
      ],
 },
    Commodity: {
        headers:[
            "Commodity futures",
            "Commodity options",
        ],
        columns: ["futures", "options"],
        rows:[
        {
        label: "Brokerage",
        futures: "	0.03% or Rs. 20/executed order whichever is lower",
        options: "	₹ 20/executed order"
        },
        {
        label: "STT/CTT",
        futures: "	0.01% on sell side (Non-Agri)",
        options: "	0.05% on sell side"
        },
        {
        label: "Transaction charges",
        futures: "MCX: 0.0021% NSE: 0.0001%",
        options: "MCX: 0.0418% NSE: 0.001%"
        },
        {
        label: "GST",
        futures: "	18% on (brokerage + SEBI charges + transaction charges)",
        options: "	18% on (brokerage + SEBI charges + transaction charges)"
        },
        {
        label: "SEBI charges",
        futures: "gri:₹1 / crore Non-agri:₹10 / crore",
        options: "₹10 / crore"
        },
        {
        label: "Stamp charges",
        futures: "0.002% or ₹200 / crore on buy side",
        options: "	0.0001% or ₹10 / crore on buy side"
        },
   
      ],
 },
};
export { BrokerageData };