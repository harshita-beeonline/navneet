import About from '@/components/AboutUs/About/About'
import OurJourney from '@/components/AboutUs/OurJourney/OurJourney'
import HowWeStarted from "@/components/AboutUs/HowWeStarted/HowWeStarted"
import React from 'react'
import OurStory from '@/components/AboutUs/OurStory/OurStory'
import VisionMission from '@/components/AboutUs/VisionMission/VisionMission'
import CodeConduct from '@/components/AboutUs/CodeConduct/CodeConduct'
import Awards from '@/components/AboutUs/Awards/Awards'

const aboutus = () => {
  return (
    <div>
        <About/>
        <OurJourney/>
        <HowWeStarted/>
        <OurStory/>
        <VisionMission/>
        <CodeConduct/>
        <Awards/>
    </div>
  )
}

export default aboutus