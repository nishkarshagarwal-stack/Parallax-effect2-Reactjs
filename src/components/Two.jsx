import React from 'react'
import { Parallax } from 'react-parallax';
import Twoimg from '../assets/img2.jpg'

const Two = () => {
  return (
    <div>
      <Parallax className='image' bgImage={Twoimg}  strength={300}>
      <div className='content'>
        <span className='img-txt' >A Trip To Ligthouse</span>
      </div>
    </Parallax>
    </div>
  )
}

export default Two
