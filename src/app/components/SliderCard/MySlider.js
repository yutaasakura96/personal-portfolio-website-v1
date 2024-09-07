import React from 'react'
import Slider from './SliderCard'
import { DataArray } from '@/app/data'

export default function MySlider() {
  return (
    <div>
      {
        DataArray.map((item,index)=> (
          <div className='my-slider'>
            <Slider item={item} index={index}>

            </Slider>
          </div>
        ))
      }
    </div>
  )
}
