import React from 'react'
import { AreaChart, Area, Tooltip, ResponsiveContainer } from 'recharts'
import logo1 from '../../assets/logo1.png'
import logo2 from '../../assets/logo2.png'
import logo3 from '../../assets/logo3.png'
import logo4 from '../../assets/logo4.png'
import { Section } from './style'
const Strems = () => {
    const data = [
        {
            data: 6780,
        },
        {
            data: 6680,
        },
        {
            data: 6500,
        },
        {
            data: 6300,
        },
        {
            data: 5900,
        },
        {
            data: 5700,
        },
        {
            data: 5500,
        },
        {
            data: 5300,
        },
        {
            data: 5100,
        },
        {
            data: 5090,
        },
        {
            data: 5300,
        },
        { data: 4500 },
        {
            data: 5000,
        },
        {
            data: 4700,
        },
        {
            data: 4400,
        },
        {
            data: 4800,
        },
        {
            data: 5300,
        },
        {
            data: 5800,
        },
        {
            data: 6000,
        },
        {
            data: 6300,
        },
        {
            data: 6580,
        },
        {
            data: 6500,
        },
        {
            data: 6300,
        },
        {
            data: 6500,
        },
        {
            data: 6700,
        },
        {
            data: 7000,
        },
        {
            data: 7300,
        },
        {
            data: 7500,
        },
        {
            data: 7700,
        },
        {
            data: 8090,
        },
        {
            data: 8190,
        },
        {
            data: 7990,
        },
        {
            data: 5800,
        },
        {
            data: 6000,
        },
        {
            data: 6300,
        },
        {
            data: 6780,
        },

        {
            data: 7700,
        },
        {
            data: 7500,
        },
        {
            data: 7300,
        },
        {
            data: 7000,
        },
        {
            data: 6700,
        },
        {
            data: 6500,
        },
        {
            data: 6300,
        },
        {
            data: 6500,
        },
        {
            data: 6780,
        },
        {
            data: 6300,
        },
        {
            data: 6000,
        },
        {
            data: 5800,
        },

        {
            data: 5490,
        },
        {
            data: 6000,
        },
        {
            data: 8000,
        },
    ]
    const sliderData = [
        {
            image: logo1,
            serviceName:"Sound Cloud"
        },
        {
            image: logo2,
            serviceName:"Spotify",
        },
        {
            image: logo3,
            serviceName:"Youtube Music"
        },
        {
            image: logo4,
            serviceName:"Apple Music"
        }
    ]
  return (
      <Section>
          <div className='title-container'>
              <div className='title'>
                  <h4>Streams</h4>
                  <h1>450,210</h1>
              </div>
         
          <div className='slider'>
              <div className='services'>
                  {sliderData.map(({ image, serviceName }) => {
                      return (
                          <div className='service' key={serviceName}>
                              <img src={image} alt={serviceName} />
                              <h6>{serviceName}</h6>
                          </div>
                      )
                  })}
              </div>
              </div>
          </div>
          <div className='chart'>
              <ResponsiveContainer width="100%" height="100%" >
                  <AreaChart data={data}>
                      <defs>
                          <linearGradient id='colorview' x1="0" y1="0" x2="0" y2="1">
                              <stop
                                  offset="10%"
                                  stopColor='var(--pirmary-color)'
                                  stopOpacity={0.4}

                              />
                              <stop offset="100%"
                                  stopColor='#000000ff'
                                 stopOpacity={0.2}
                              />
                          </linearGradient>
                      </defs>
                      <Tooltip />
                      <Area
                          type="monotone"
                          dataKey="data"
                          stroke='var(#colorview)'
                          animationBegin={800}
                          animationDuration={2000}
                      />
                  </AreaChart>
              </ResponsiveContainer>
          </div>
    </Section>
  )
}

export default Strems