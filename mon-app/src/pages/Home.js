import React from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Foooter from "../components/Foooter";

const Home = () => {
  return (
    <body>
      <Navigation />
      <main>
        <Hero />
        <Features />
      </main>
      <Foooter />
    </body>
  );
};

export default Home;
