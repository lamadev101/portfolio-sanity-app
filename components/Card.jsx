import React from 'react'
import { urlFor } from '../lib/client'
import {GiWorld} from 'react-icons/gi'
import {BsGithub} from 'react-icons/bs'

const Card = ({project}) => {
  return (
    <div className='card'>
      <div className="image">
        <img src= {urlFor(project.image[0])} alt="" />
      </div>
      <div className="details">
        <h1>{project.name}</h1>
        <p>{project.description}</p>
        <div>
          <a href={project.github} target="_blank" rel="noreferrer"><BsGithub/> www.github.com</a>
          <a href={project.website} target="_blank" rel="noreferrer"><GiWorld/> www.web-app.com</a>
        </div>
      </div>
    </div>
  )
}

export default Card