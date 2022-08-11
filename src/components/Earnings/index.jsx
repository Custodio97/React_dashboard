import React from 'react'
import {Section} from './style'
const Earnings = () => {
    const earningsData = [
        {
            progress: 45,
            amount:3125,
        },
        {
            progress: 55,
            amount: 2731,
        },
        {
            progress: 65,
            amount:1315,
        },
        {
            progress: 100,
            amount:1012,
        }
    ]
  return (
      <Section>
          <div className='title-container'>
              <div className='title'>
                  <h4>Earnings</h4>
                  <h1>$7,850</h1>
              </div>
              <span className='more'>Show More</span>
          </div>
          <div className='earnings'>
              {earningsData.map(({ progress, amount }) => {
                  return (
                      <div className='earning' key={amount}>
                          <div className='data'>
                              <h5>{progress === 100 ? "FUNDS CLEARED" : "CLEARNING"}</h5>
                              <h5 className='amount'> $ {amount}</h5>
                          </div>
                          <progress
                              max={100}
                              value={progress}
                              className={progress === 100 ? "cleared":""}
                          />

                      </div>
                    
                  )
              })}
          </div>
    </Section>
  )
}

export default Earnings