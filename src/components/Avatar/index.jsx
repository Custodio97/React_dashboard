import React from 'react'
import { Section } from './style'
import {BiChevronDown} from 'react-icons/bi'
import avatar from '../../assets/avatar.png'
const Avatar = () => {
  return (
      <Section>
          <div className='image'>
              <img src={avatar} alt="avatar" />
          </div>
          <div className='name'>
              <span>Gabriel Custodio</span>
              <BiChevronDown/>
          </div>
    </Section>
  )
}

export default Avatar