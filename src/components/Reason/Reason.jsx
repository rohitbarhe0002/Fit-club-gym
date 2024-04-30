import React from 'react'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import './reason.css'
function Reason() {
  return (
   <div className="reasons">
    <div className="left-r">
        <img src={image1} className=''/>
        <img src={image2} className=''/>
        <img src={image3} className=''/>
        <img src={image4} className=''/>

    </div>
    <div className="right-r">
      <span>some reasons</span>
      <div><span className='stroke-text'>why</span><span>choose us</span></div>
    </div>
   </div>
  )
}

export default Reason