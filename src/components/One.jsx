import React from 'react'
import { Parallax } from 'react-parallax';
import Oneimg from '../assets/img3.jpg'

const One = () => {
  return (
    <div>
      <Parallax className='image' bgImage={Oneimg}  strength={400}>
      <div className='content'>
        <span className='img-txt' >A Trip To City</span>
      </div>
    </Parallax>
    </div>
  )
}

export default One
