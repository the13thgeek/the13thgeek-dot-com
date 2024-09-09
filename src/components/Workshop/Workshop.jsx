import React from 'react';
import { NavLink } from "react-router-dom";
import './Workshop.scss';
import prjThe13thgeek from '../../assets/home/project-item-the13thgeek.jpg';
import prjPmcPlanner from '../../assets/home/project-item-pmcplanner.jpg';

const Workshop = () => {
  return (
    <section id="workshop" className="workshop">
        <div className="content-container">
            <div className="title-area">
                <div className="descriptor home-3-workshop">
                    <span className="title">Workshop</span>
                </div>
                <h2>Works in Progress</h2>
            </div>
            <div className="wip-list">
                <div className="item">
                    <div className="wip-label">
                        <div className="wip-descriptor wip-3a">
                            <span className="title">WIP #1</span>
                        </div>
                    </div>
                    <div className="wip-detail">
                        <img src={prjThe13thgeek} className='preview' alt="the13thgeek.com" />
                        <div className="wrapper">
                            <h3>the13thgeek™</h3>
                            <p>A constantly evolving personal site I started in university, from basic PHP to React. I'm exploring new back-end options to bring back the blog, weighing between MySQL or learning a fresh CMS. Stay tuned!</p>
                        </div>
                        <h4>Tech Stack</h4>
                        <div className="tech-stack">
                            <ul>
                                <li>
                                    <i className="fa-brands fa-node-js"></i>
                                    <span>NodeJS</span>
                                </li>
                                <li>
                                    <i className="fa-brands fa-html5"></i>
                                    <span>HTML</span>
                                </li>
                                <li>
                                    <i className="fa-brands fa-sass"></i>
                                    <span>SASS</span>
                                </li>
                                <li>
                                    <i className="fa-brands fa-react"></i>
                                    <span>React</span>
                                </li>
                            </ul>
                        </div>
                        <div className="links-list">
                            <NavLink to="https://github.com/the13thgeek/the13thgeek-dot-com" target='_blank' className="ll-link"><i className="fa-brands fa-github"></i> Repository <i className="fa-solid fa-chevron-right"></i></NavLink>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="wip-label">
                        <div className="wip-descriptor wip-3b">
                            <span className="title">WIP #2</span>
                        </div>
                    </div>
                    <div className="wip-detail">
                        <img src={prjPmcPlanner} className='preview' alt="PMC Planner" />
                        <div className="wrapper">
                            <h3>PMC Planner</h3>
                            <p>A tool for Power Morphicon attendees to access schedules, replacing the official JPEG slideshow with a searchable list. It saw high traffic, and I'm expanding it with new features for future events!</p>
                        </div>
                        <h4>Tech Stack</h4>
                        <div className="tech-stack">
                            <ul>
                                <li>
                                    <i className="fa-brands fa-node-js"></i>
                                    <span>NodeJS</span>
                                </li>
                                <li>
                                    <i className="fa-brands fa-js"></i>
                                    <span>JSON</span>
                                </li>
                                <li>
                                    <i className="fa-brands fa-html5"></i>
                                    <span>HTML</span>
                                </li>
                                <li>
                                    <i className="fa-brands fa-sass"></i>
                                    <span>SASS</span>
                                </li>
                                <li>
                                    <i className="fa-brands fa-react"></i>
                                    <span>React</span>
                                </li>
                            </ul>
                        </div>
                        <div className="links-list">
                            <NavLink to="https://the13thgeek.github.io/power-morphicon-planner/" target='_blank' className="ll-link"><i className="fa-solid fa-up-right-from-square"></i> Project Page <i className="fa-solid fa-chevron-right"></i></NavLink>
                            <NavLink to="https://github.com/the13thgeek/power-morphicon-planner" target='_blank' className="ll-link"><i className="fa-brands fa-github"></i> Repository <i className="fa-solid fa-chevron-right"></i></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Workshop