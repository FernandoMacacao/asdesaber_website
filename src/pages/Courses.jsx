import React from "react";
import Hero from "../components/Hero";
import Data from "../data/courses/data.json";

const Courses = () => {
  return (
    <Hero
      title={Data.Hero.title}
      subtitle={Data.Hero.subtitle}
      img={Data.Hero.img}
      noButton={Data.Hero.noButton}
      singleButton={Data.Hero.singleButton}
      firstButton={Data.Hero.firstButton}
      secondButton={Data.Hero.secondButton}
    />
  );
};

export default Courses;
