import Image from "next/image";
import React from "react";

const HomeSection = () => {
  return (
    <header className="flex justify-between ">
      <h1>GoodHere</h1>
      <nav>
        <ul>
          <a href="/">Home</a>
          <a href="/">Explore</a>
        </ul>
      </nav>
    </header>
  );
};

export default HomeSection;
