import React from 'react';
import './Projects.scss';
import prjArtis from '../../assets/home/project-item-artisreit.jpg';
import prj300Main from '../../assets/home/project-item-300main.jpg';
import prj300MainKiosk from '../../assets/home/project-item-300mainkiosk.jpg';
import prjThe13thgeek from '../../assets/home/project-item-the13thgeek.jpg';
import prjPmcPlanner from '../../assets/home/project-item-pmcplanner.jpg';

const Projects = () => {
  return (
    <section className="projects" id="projects">
        <div className="g-content-container">
            <div className="g-descriptor home-3-projects">
                <span className="title">Projects</span>
            </div>
            <h2>Portfolio</h2>
            <div className="projects-list">
                <div className="item">
                    <img src={prjArtis} alt="Artis REIT Corporate Website" />
                    <div className="info">
                        <h3>Artis REIT Corporate</h3>
                        <small>2014-2021</small>
                        <p className='generic'>This project involves converting the website's old table-based layout to responsive and accessible. It is a major revamp of the company's corporate website.</p>
                        <ul className="tags">
                            <li>WordPress</li>
                            <li>Bootstrap</li>
                            <li>jQuery</li>
                            <li>Responsive</li>
                        </ul>
                    </div>
                </div>
                <div className="item">
                    <img src={prjPmcPlanner} alt="PMC Planner" />
                    <div className="info">
                        <h3>PMC '24 Planner</h3>
                        <small>2024</small>
                        <p className='generic'>The PMC Planner provides an accessible, easy-to-read and searchable list of the convention events to help attendees plan their weekend at this biennial event.</p>
                        <ul className="tags">
                            <li>React</li>
                            <li>GitHub</li>
                        </ul>
                    </div>
                </div>
                <div className="item">
                    <img src={prjThe13thgeek} alt="the13thgeek Blog" />
                    <div className="info">
                        <h3>the13thgeek&trade;</h3>
                        <small>2011-present</small>
                        <p className='generic'>the13thgeek.com is my personal website. Over the years it hosted some of my writings, adventures and small photography projects.</p>
                        <ul className="tags">
                            <li>WordPress</li>
                            <li>Boostrap</li>
                            <li>Responsive</li>
                            <li>jQuery</li>
                            <li>MySQL</li>
                        </ul>
                    </div>
                </div>
                <div className="item">
                    <img src={prj300MainKiosk} alt="300 Main Kiosk" />
                    <div className="info">
                        <h3>300 Main Interactive Kiosk</h3>
                        <small>2018-2021</small>
                        <p className='generic'>This project involves developing an HTML-based kiosk application that utilizes the LEAP Motion controller for user interaction.</p>
                        <ul className="tags">
                            <li>HTML5</li>
                            <li>jQuery</li>
                            <li>LEAP Motion</li>
                        </ul>
                    </div>
                </div>
                <div className="item">
                    <img src={prj300Main} alt="300 Main" />
                    <div className="info">
                        <h3>300main.ca</h3>
                        <small>2018-2021</small>
                        <p className='generic'>This project involves creating a landing page for 300 Main, an upcoming residential tower in downtown Winnipeg.</p>
                        <ul className="tags">
                            <li>HTML5</li>
                            <li>jQuery</li>
                            <li>Skrollr</li>
                            <li>Responsive</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects