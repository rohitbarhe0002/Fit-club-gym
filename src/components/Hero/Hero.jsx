import React from 'react';
import calories from '../../assets/calories.png';
import hearts from '../../assets/heart.png';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Header from '../Header/Header';
import './hero.css';
function Hero() {
    return (
        <div className='hero'>
            <div className="left-h">
                <Header />
                {/*hero add section */}
                <div className="the-best-ad">
                    <div></div>
                    <span>The Best fitness Club in the town</span>
                </div>
                {/* hero heading section */}
                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>
                            Shape
                        </span>
                        <span>
                            Your
                        </span>

                    </div>

                    <div>
                        <span>Ideal body</span>
                    </div>
                    <div>
                        <span>
                            In here we will help you to shape and build your ideal body live you life to
                            fullest huhihih iiih
                        </span>
                    </div>
                </div>

                <div className="figures">
                    <div>
                        <span>+150</span>
                        <span>expert coaches</span>
                    </div>
                    <div>
                        <span>+978</span>
                        <span>members</span>
                    </div>
                    <div>
                        <span>
                            +50
                        </span> <span>
                           fiteness programs
                        </span>
                    </div>
                </div>

                <div className="hero-buttons">
                    <button className="btn">Get started</button>
                    <button className="btn">Learn More</button>

                </div>

          


            </div>
            <div className="right-h">
               <button className='btn'>Join Now</button>
               
               <div className="heart-rate">
                <img src={hearts} alt='' />
                <span>Heart Rate</span>
                <span>116bpm</span>
               </div>
               <img src={hero_image} className='hero-image'/>
                <img src={hero_image_back} className='hero-image-back'/>


                <div className="calories">
                    <img src={calories}/>
                    <div>
                    <span>claories burned</span>
                    <span>220kcal</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero