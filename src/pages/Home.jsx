import React from 'react'
import Hero from "../components/Hero"
import StatsBanner from '../components/StatsBanner'
import Data from '../data/home/data.json'

const Home = () => {
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

export default Home
