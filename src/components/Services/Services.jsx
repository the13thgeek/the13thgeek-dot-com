import React from 'react';
import './Services.scss';
import theme_pattern from '../../assets/theme_pattern.svg';
import Services_Data from '../../assets/services_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const Services = () => {
  return (
    <section id='services' className='services'>
        <div className="g-content-container">
            <div className="descriptor">02 <span className="title">Services</span></div>
            <h2>What I Do</h2>
        </div>
        

        <div className="services-container">
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
        </div>
    </section>
  )
}

export default Services