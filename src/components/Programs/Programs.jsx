import React from 'react';
import RightArrow from '../../assets/rightArrow.png';
import { programsData } from '../../data/programsData';
import './programs.css';
function Programs() {
  return (
  <div className="programs" id="programs">
    <div className="programs-header">
        <span className='stroke-text'>Explore Our </span>
        <span>Programs</span>
        <span className='stroke-text'>to shape you</span>
    </div>
    <div className="program-catogories">
        {programsData.map((program)=>{
            return <div className="catogory">
                {program.image}
                <span>{program.heading}</span>
                <span>{program.details}</span>
                <div className="join-now"><span>Join Now</span><img src={RightArrow}/></div>
            </div>
        })}
    </div>
  </div>
  )
}

export default Programs