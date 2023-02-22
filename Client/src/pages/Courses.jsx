import React from "react";
import Hero from "../components/Hero";
import Data from "../data/courses/data.json";
import CoursesAreas from "../components/CoursesAreas";
import Footer from "../components/Footer";

const Courses = () => {
  return (
    <>
      <Hero
        title={Data.Hero.title}
        subtitle={Data.Hero.subtitle}
        img={Data.Hero.img}
        noButton={Data.Hero.noButton}
        firstButton={Data.Hero.firstButton}
        href={Data.Hero.href}
      />
      <CoursesAreas
        title="Cursos online"
        subtitle="Inscricões Abertas"
        courses={Data.Courses.online}
      />
      <CoursesAreas
        title="Cursos presenciais"
        subtitle="Inscricões a partir de maio"
        courses={Data.Courses.inPerson}
      />
      <Footer />
    </>
  );
};

export default Courses;
