import React from "react";
import Hero from "./Hero";
import Team from "./Team";

function AboutPage() {
  return (
    <div>
      <div className="container">
        <Hero />
      </div>

      <div className="container">
        <Team />
      </div>
    </div>
  );
}

export default AboutPage;
