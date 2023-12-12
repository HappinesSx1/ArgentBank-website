import React from "react";
import ChatIcon from "../assets/img/icon-chat.png";
import MoneyIcon from "../assets/img/icon-money.png";
import SecurityIcon from "../assets/img/icon-security.png";

const Features = () => {
  const FeaturesData = [
    {
      image: ChatIcon,
      title: "You are our #1 priority",
      description:
        "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
    },
    {
      image: MoneyIcon,
      title: "More savings means higher rates",
      description:
        "The more you save with us, the higher your interest rate will be!",
    },
    {
      image: SecurityIcon,
      title: "Security you can trust",
      description:
        "We use top of the line encryption to make sure your data and money is always safe.",
    },
  ];

  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {FeaturesData.map((feature, index) => (
        <div className="feature-item" key={index}>
          <img src={feature.image} alt="Chat Icon" className="feature-icon" />
          <h3 className="feature-item-title">{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;
