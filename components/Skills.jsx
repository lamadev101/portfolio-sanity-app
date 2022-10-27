import React from 'react'
import design from '../public/img/gd.png'
import develop from '../public/img/wd.png'
import Image from 'next/image'

const Skills = () => {
  return (
    <div className='skills' id='skills'>
      <div className="title">
        my <span>services</span> <br />
        <div className='line'>
          <div /><div />
        </div>
      </div>
      <div className="cards">
        <div className="card">
          <Image src={design} alt="" />
          <h3>Graphics & Web Design</h3>
          <p>Creating elegant designs suited for your needs following core design theory.</p>
          <h5>Tools I use</h5>
          <ul>
            <li>Figma</li>
            <li>Photoshop</li>
            <li>Illustrator</li>
          </ul>
        </div>
        <div className="card">
          <Image src={develop} alt="" />
          <h3>Web Development</h3>
          <p>Do you have an idea for your next great website? Let&apos;s make it a reality.</p>
          <h5>Tools I use</h5>
          <ul>
            <li>HTML5 | CSS | JavaScript</li> 
            <li>Sass | Tailwind | MUi5 |Bootstrap</li>
            <li>ReactJS | NextJS | AngularJS | NodeJS</li>
            <li>Redux | Flux | Enzyme | Babel | WebPack</li>
            <li>JEST | Mocha</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skills