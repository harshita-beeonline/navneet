import Demat from '@/components/Investor/Demat/Demat'
import Dividend from '@/components/Investor/Dividend/Dividend'
import Financial from '@/components/Investor/Financial/Financial'
import HeroSection from '@/components/Investor/Herosection/Herosection'
import Overview from '@/components/Investor/Overview/Overview'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroSection/>
      <Overview/>
      <Financial/>
      <Demat/>
      <Dividend/>
    </div>
  )
}

export default page