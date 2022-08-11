import React from 'react'
import { Section } from './style'
import { BsChevronRight } from 'react-icons/bs'
import music1 from '../../assets/music1.jpeg'
import music2 from '../../assets/music2.jpeg'
import music3 from '../../assets/music3.jpeg'
import music4 from '../../assets/music4.jpeg'
import music5 from '../../assets/music5.jpeg'
import music6 from '../../assets/music6.jpeg'
const TopReleases = () => {
    const music = [
        {
            title: "Sucker",
            plays: 64,
            image:music2,
        },
        {
            title: "New Rules",
            plays: 124,
            image: music1,
        },
        {
            title: "F.R.I.E.N.D.S",
            plays: 238,
            image: music3,
        },
        {
            title: "A year",
            plays: 238,
            image:music4,
        },
        {
            title: "Stay",
            plays: 334,
            image: music5,
        },
        {
            title: "Echo",
            plays: 25,
            image: music6,
        }
    ]
  return (
      <Section>
          <div className='title-container'>
              <div className='title'>
                  <h4>Top Releases</h4>
              </div>
              <div className='filters'>
                  <span>All Releases</span>
                  <button>New Realease</button>
              </div>
          </div>
          <div className='musics'>
              {music.map(({ title, plays, image }) => {
                  return (
                      <div className='music' key={title}>
                          <div className='details'>
                              <div className='image'>
                                  <img src={image} alt="title" />
                              </div>
                              <div className='info'>
                                  <h5>{title}</h5>
                                  <h6>{plays} K Plays</h6>
                              </div>
                          </div>
                          <BsChevronRight/>
                      </div>
                  ) 
              })}
          </div>
    </Section>
  )
}

export default TopReleases