import React, { useState } from 'react'
import Card from './Card';
import {GrReactjs} from 'react-icons/gr'
import {TbBrandNextjs} from 'react-icons/tb'
import {SiAngularjs} from 'react-icons/si'
import {FaJsSquare} from 'react-icons/fa'

const Works = ({projects}) => {
  const [btnValue, setBtnValue] =useState("react");
  const tags = [
    {id: 1, name: "React JS", key: "react", icon: <GrReactjs/>, active: "active1"}, 
    {id: 2, name: "Next JS", key: "next", icon: <TbBrandNextjs/>, active: "active2" }, 
    {id: 3, name: "Angular JS", key: "angular", icon: <SiAngularjs/>, active: "active3"}, 
    {id: 4, name: "Vanilla JS", key: "vanilla", icon: <FaJsSquare/>, active:"active4"},
  ]
  const filterProjects = projects.filter(({group})=>group === btnValue);
  return (
    <div className='works' id='works'>
      <div className="title">
        my <span>portfolio</span> <br />
        <div className='line'>
          <div /><div />
        </div>
      </div>
      <div className='btns'>
        {tags.map((tag, id) => <button key={tag.id} className={tag.key==btnValue ? tag.active : ""} onClick={()=>setBtnValue(tag.key)}>{tag.icon}{tag.name}</button>)}
      </div>
      <div className="cardItems">
        {filterProjects?.map((project, id)=><Card project={project} key={id} />)}
      </div>
    </div>
  )
}

export default Works