import React from 'react'
import Hero from "../components/Hero"
import StatsBanner from '../components/StatsBanner'
import Data from '../data/about/data.json'

const About = () => {
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
      <StatsBanner/>
    </>

  )
}

export default About
