import Image from 'next/image'
import React from 'react'
import profile from '../public/img/profile1.png'

const Intro = () => {
  return (
    <div className='intro' id='home'>
      <div className="left">
        <span>Hi there, <br /> I am</span>
        <div className='name'>Karma Lama Ghising</div>
        <span>Designer & Developer</span>
        <p>JS and JS framework - library <strong>Angular, React, Next JS</strong> Developer with hands-on experience in identifying web-based user interactions along with designing & implementing highly-responsive user interface components by deploying React concepts. Proficient in translating designs & Wireframes into high-quality code, and writing application interface code via Javascript and ReactJS workflows.</p>
        <div>
          <button><a href="#works">View Work</a></button>
          <button><a href="#contact">Hire Me</a></button>
        </div>
      </div>
      <div className="right">
        <Image className='img' src={profile} layout="responsive" alt="" />
      </div>
    </div>
  )
}

export default Intro