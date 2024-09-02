import React from 'react';
import './Skillset.scss';
import theme_pattern from '../../assets/theme_pattern.svg';
import Services_Data from '../../assets/services_data';
import arrow_icon from '../../assets/arrow_icon.svg';
import svcWebDev from '../../assets/home/skillset-webdev.jpg';
import svcUiUx from '../../assets/home/skillset-uiux.jpg';
import svcWordPress from '../../assets/home/skillset-wordpress.jpg';
import svcLPMS from '../../assets/home/skillset-lpms.jpg';

const Skillset = () => {
  return (
    <>
    <section id='skill-set' className='skill-set'>
        <div className="g-content-container">
            <div className="g-descriptor home-2-skillset">
                <span className="title">Skill set</span>
            </div>
            <h2>What I Do</h2>
            <div className="skill-set-list">
                <div className="item webdev">
                    <div className="pointer">
                        <i className="fa-solid fa-angles-right"></i>
                    </div>
                    <div className="contents">
                        <img src={svcWebDev} alt="Web Development" />
                        <figure className="icon">
                            <i className="fa-solid fa-code"></i>
                        </figure>
                        <h4>Web Development</h4>
                        <ul className="tags">
                            <li>HTML5</li>
                            <li>PHP</li>
                            <li>MySQL</li>
                            <li>SCSS</li>
                            <li>React</li>
                            <li>jQuery</li>
                        </ul>
                    </div>
                </div>
                <div className="item uiux">
                    <div className="pointer">
                        <i className="fa-solid fa-angles-right"></i>
                    </div>
                    <div className="contents">
                        <img src={svcUiUx} alt="UI/UX Wireframing" />
                        <figure className="icon">
                            <i className="fa-solid fa-pen-to-square"></i>
                        </figure>
                        <h4>Website & App Design</h4>
                        <ul className="tags">
                            <li>Wireframing</li>
                            <li>UI/UX</li>
                            <li>Adobe</li>
                            <li>Figma</li>
                        </ul>
                    </div>
                </div>
                <div className="item wordpress">
                    <div className="pointer">
                        <i className="fa-solid fa-angles-right"></i>
                    </div>
                    <div className="contents">
                        <img src={svcWordPress} alt="WordPress" />
                        <figure className="icon">
                            <i className="fa-solid fa-swatchbook"></i>
                        </figure>
                        <h4>WordPress Theming</h4>
                        <ul className="tags">
                            <li>Custom Themes</li>
                        </ul>
                    </div>
                    
                </div>
                <div className="item lpms">
                    <div className="pointer">
                        <i className="fa-solid fa-angles-right"></i>
                    </div>
                    <div className="contents">
                        <img src={svcLPMS} alt="Landing Pages" />
                        <figure className="icon">
                            <i className="fa-solid fa-globe"></i>
                        </figure>
                        <h4>Landing Pages & Microsites</h4>
                        <ul className="tags">
                            <li>Events</li>
                            <li>Marketing</li>
                            <li>Corporate</li>
                        </ul>
                    </div>
                </div>
            </div>
        
        </div>

        {/* <div className="services-container">
            {Services_Data.map((service,index) => {
                return (
                    <div key={index} className="services-format">
                        <h3>{service.s_no}</h3>
                        <h2>{service.s_name}</h2>
                        <p>{service.s_desc}</p>
                        <div className="services-readmore">
                            <p>Read More</p>
                            <img src={arrow_icon} alt="" />
                        </div>
                    </div>
                )
            })}
        </div> */}
    </section>

   
    </>
  )
}

export default Skillset