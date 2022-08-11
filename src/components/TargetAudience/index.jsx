import React from 'react'
import { Section } from './style'
import {BarChart,Bar,Tooltip,ResponsiveContainer} from 
    'recharts'
import {BsThreeDots} from 'react-icons/bs'
const TargetAudience = () => {
    const data = [
        {
            uv: 4000,
        },
        {
            uv: 3000,
        },
        {
            uv: 2000,
        },
        {
            uv: 2780,
        },
        {
            uv: 1890,
        },
        {
            uv: 2390,
        },
        {
            uv: 3490,
        },
    ];
  return (
      <Section>
          <div className='title-container'>
              <div className='title'>
                  <h4>Target Audience</h4>
                  <BsThreeDots/>
              </div>
          </div>
          <div className='chart'>
              <ResponsiveContainer width="100%" height="100%">
                  <BarChart width={500} height={300} data={data}>
                      <Tooltip cursor={{ fill: "#3d7417a" }} />
                      <defs>
                          <linearGradient id="colorview" x1="0" x2="0" y2="1">
                              <stop
                                  offset="40%"
                                  stopColor='var(--primary-color)'
                                  stopOpacity={0.8}
                              />
                              <stop
                                  offset="80%"
                                  stopColor='#0000000ff'
                                  stopOpacity={0.3}
                              />
                          </linearGradient>
                      </defs>
                      <Bar
                          dataKey="uv"
                          stackId="a"
                          fill='url(#colorview)'
                          animationBegin={800}
                          animationDuration={2000}
                      />
                  </BarChart>
              </ResponsiveContainer>
          </div>
    </Section>
  )
}

export default TargetAudience