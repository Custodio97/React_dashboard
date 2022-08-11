import React, { useEffect } from 'react'
import {Section} from './style' 
import scrollReveal from 'scrollreveal'
import Navbar from 'components/Navbar'
import Strems from 'components/Streams'
import Earnings from 'components/Earnings'
import TargetAudience from 'components/TargetAudience'
import TopReleases from 'components/TopReleases'
const Dasboard = () => {
    useEffect(() => {
        const sr = scrollReveal({
            origin: "bottom",
            distance: "80px",
            duration: 2000,
            reset: false,
        })
        sr.reveal(
            `
        nav
        .row,
        .row2
        `,
            {
                opacity: 0,
                interval: 100,

            }
        )
   },[])
  return (
      <Section>
          <Navbar/>
          <div className='grid'>
              <div className='row'>
                  <Strems />
                  <Earnings/>
              </div>
              <div className='row2'>
                  <TargetAudience />
                  <TopReleases/>
              </div>
          </div>
    </Section>
  )
}

export default Dasboard