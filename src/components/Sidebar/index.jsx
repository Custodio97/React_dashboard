import React from 'react'
import { Aside } from './style'
import { RiNeteaseCloudMusicLine } from 'react-icons/ri'
import { HiOutlineMusicNote } from 'react-icons/hi'
import { BiGroup, BiBell } from 'react-icons/bi'
import { AiOutlineDollarCircle } from 'react-icons/ai'
import { SiAnalogue } from 'react-icons/si'
import {FiHelpCircle} from 'react-icons/fi'  
const Sidebar = () => {
  return (
      <Aside id="sidebar">
          <div className='brand'>
              <RiNeteaseCloudMusicLine/>
          </div>
          <ul className='links'>
              <li className='selected'>
                  <SiAnalogue/>
              </li>
              <li>
                  <HiOutlineMusicNote/>
              </li>
              <li>
                  <BiBell/>
              </li>
              <li>
                  <AiOutlineDollarCircle/>
              </li>
              <li>
                  <BiGroup/>
              </li>
          </ul>
          <div className='help'>
              <FiHelpCircle/>
          </div>
      </Aside>
  )
}

export default Sidebar