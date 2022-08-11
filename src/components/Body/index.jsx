import Dasboard from 'components/Dashboard'
import SidebarRight from 'components/RightSidebar'
import Sidebar from 'components/Sidebar'
import React, { useEffect } from 'react'
import scrollReveal from 'scrollreveal'
import {Div} from './style'
const Body = () => {
    useEffect(() => {
        const sr = scrollReveal({
            origin: "left",
            distance: "80px",
            duration: 1000,
            reset:false,
        })
        sr.reveal(
            `
            #sidebar
            `,
            {
                opacity: 0,
            }
        )
        const sr2 = scrollReveal({
            origin: "right",
            distance: "80px",
            duration: 1000,
            reset:false,
        })
        sr2.reveal(
            `
            #rightSidebar
            `,
            {
                opacity: 0,
            }
        )
    },[])
  return (
      <Div>
          <Sidebar />
          <Dasboard />
          <SidebarRight/>
    </Div>
  )
}

export default Body