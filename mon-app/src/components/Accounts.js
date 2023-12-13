import React from "react";

const Accounts = () => {
  const transactionData = [
    {
      title: "Argent Bank Checking (x8349)",
      amount: "$2,082.79",
      description: "Available Balance",
    },
    {
      title: "Argent Bank Savings (x6712)",
      amount: "$10,928.42",
      description: "Available Balance",
    },
    {
      title: "Argent Bank Checking (x8349)",
      amount: "$184.30",
      description: "Current Balance",
    },
  ];
  return (
    <>
      <h2 className="sr-only">Accounts</h2>
      {transactionData.map((transaction, index) => (
        <section className="account" key={index}>
          <div className="account-content-wrapper">
            <h3 className="account-title">{transaction.title}</h3>
            <p className="account-amount">{transaction.amount}</p>
            <p className="account-amount-description">
              {transaction.description}
            </p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      ))}
    </>
  );
};

export default Accounts;
