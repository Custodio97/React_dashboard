import React from 'react'
import { Nav } from './style'
import {BiChevronDown} from 'react-icons/bi'
const Navbar = () => {
  return (
      <Nav>
          <h2>Overview</h2>
          <div className='timeline'>
              <span>Last 30 Days</span>
              <BiChevronDown/>
          </div>
    </Nav>
  )
}

export default Navbar