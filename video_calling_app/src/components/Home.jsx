import React from 'react'
import Navbar from './Navbar'
import Testimonial from './Testimonial'
import Footer from './Footer'
import Faq from './Faq'

import Hero from './Hero'
import HeroTemp from './HeroTemp'

function Home() {
  return (
        <div>
          
          <Navbar />
        
          <HeroTemp />
          <Testimonial />
           <Faq />
        
          <Footer />

        </div>
  )
}

export default Home