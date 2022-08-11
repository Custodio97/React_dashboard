import React from 'react'
import { Section } from './style'
import mainMusic from '../../assets/mainMusic.jpeg'
import { BsFillPauseFill, BsFillPlayFill } from 'react-icons/bs'
import {BiSkipNext,BiSkipPrevious} from 'react-icons/bi'
import { useState } from 'react'
const Player = () => {
    const [isPlaying,setIsPlaying]=useState(true)
  return (
      <Section>
          <div className='background'>
              <img src={mainMusic} alt="Main Music" />
          </div>
          <div className='player'>
              <div className='details'>
                  <h6 className='track'>Sucker</h6>
                  <input type="range" className='range' />
                  <div className='controls'>
                      <BiSkipPrevious />
                      {isPlaying ? (
                        <BsFillPauseFill onClick={()=> setIsPlaying(!isPlaying)} />
                      ) : (
                              <BsFillPlayFill
                                  onClick={() => setIsPlaying(!isPlaying)}
                              />
                      )}
                      <BiSkipNext/>
                  </div>
              </div>
          </div>
    </Section>
  )
}

export default Player