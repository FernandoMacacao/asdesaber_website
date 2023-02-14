import React from "react";
import Hero from "../components/Hero";
import MessageForm from "../components/MessageForm";
import Data from "../data/contacts/data.json";

const Contacts = () => {
  return (
    <>
      <Hero
        title={Data.Hero.title}
        subtitle={Data.Hero.subtitle}
        img={Data.Hero.img}
        noButton={Data.Hero.noButton}
        singleButton={Data.Hero.singleButton}
        firstButton={Data.Hero.firstButton}
        secondButton={Data.Hero.secondButton}
      />
      {/* MAPA */}
      {/* BANNER */}
      <MessageForm />
    </>
  );
};

export default Contacts;
