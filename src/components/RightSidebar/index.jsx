import ActiveListerners from 'components/ActiveListeners'
import Avatar from 'components/Avatar'
import Player from 'components/Player'
import React from 'react'
import {Section} from './style'
const SidebarRight = () => {
  return (
      <Section id="rightSidebar">
          <Avatar />
          <ActiveListerners />
          <Player/>
    </Section>
  )
}

export default SidebarRight