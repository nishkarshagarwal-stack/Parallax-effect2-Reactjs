import React from 'react'
import { Parallax } from 'react-parallax';
import Threeimg from '../assets/img1.jpg'

const Three = () => {
  return (
    <div>
      <Parallax className='image' bgImage={Threeimg}  strength={400}>
      <div className='content'>
        <span className='img-txt' >A Trip To Waterfall</span>
      </div>
    </Parallax>
    </div>
  )
}

export default Three
