import React from 'react';
import { Link } from "react-router-dom";
import './Projects.scss';
import prjArtis from '../../assets/home/project-item-artisreit.jpg';
import prj300Main from '../../assets/home/project-item-300main.jpg';
import prj300MainKiosk from '../../assets/home/project-item-300mainkiosk.jpg';

const arrProjects = [
    {
        'id': 'artisreit',
        'title': 'Artis REIT Corporate',
        'timeline': '2014 - 2021',
        'image': prjArtis,
        'description': '<p>Led a major revamp to improve load speed, readability, and accessibility without alienating users. Converted the site from a table-based layout to Bootstrap, integrating AJAX for better search functionality.</p>',
        'alertmsg': null,
        'isArchived': false,
        'tags': ['PHP','MySQL','jQuery','Bootstrap','SASS'],
        'links': [{
            'title': 'Website',
            'url': 'https://www.artisreit.com/'
        }]
    },
    {
        'id': '300main',
        'title': '300 Main',
        'timeline': '2018 - 2021',
        'image': prj300Main,
        'description': '<p>Designed a showcase and landing page for 300 Main, an upcoming residential tower in downtown Winnipeg.</p>',
        'alertmsg': 'The site has changed since I last worked on it. Archived link has been provided.',
        'isArchived': true,
        'tags': ['PHP','jQuery','Skrollr','Bootstrap','SASS'],
        'links': [{
            'title': 'Website',
            'url': 'https://web.archive.org/web/20210906014213/https://300main.ca/'
        }]
    },
    {
        'id': '300mainkiosk',
        'title': '300 Main Interactive Kiosk',
        'timeline': '2016 - 2021',
        'image': prj300MainKiosk,
        'description': '<p>Developed an HTML5-based kiosk app for a residential tower using a LEAP Motion sensor for interactive controls. It displayed building renders and historical content via a touchless interface.</p>',
        'alertmsg': null,
        'isArchived': false,
        'tags': ['HTML5','CSS3','jQuery','LEAP Motion','Kiosk'],
        'links': null
    }
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
        <div className="content-container">
            <div className="title-area">
                <div className="descriptor home-4-projects">
                    <span className="title">Projects</span>
                </div>
                <h2>Past Work</h2>
            </div>
            <div className="projects-list">

                {arrProjects.map((item, index) => 
                <div key={index} className={"item prj-" + item.id}>
                    {/* <div className="preview" style={{backgroundImage: `url(${item.image})` }}></div> */}
                    <div className="preview">
                        <img src={item.image} alt="Project Preview" />
                    </div>
                    <div className="info">
                        <div className="heading">
                            <small className='timeline'>{item.timeline}</small>
                            <h3 className='project-title'>{item.title}</h3>
                            <ul className="tags">
                                {item.tags.map((tagitem,tid)=> 
                                    <li key={tid}>{tagitem}</li>
                                )}
                            </ul>
                        </div>
                        <div className="contents-wrapper">
                            <div className='description' dangerouslySetInnerHTML={{__html:item.description}}></div>
                            {item.alertmsg ? (
                            <div className='notice'><i className="fa-solid fa-triangle-exclamation"></i> {item.alertmsg}</div>
                            ) : ('')}
                            <div className="links-list">
                                {item.links ? (
                                    item.links.map((linkitem,idx) => 
                                        <Link key={idx} to={linkitem.url} target='_blank' className="ll-link">
                                        <i className="fa-solid fa-up-right-from-square"></i> 
                                            {linkitem.title} {item.isArchived ? (<small>(archived)</small>) : ('')}
                                            <i className="fa-solid fa-chevron-right"></i>
                                        </Link>
                                    )
                                ) : ('')}
                            </div>
                        </div>
                    </div>
                </div>
                )}
                
            </div>
        </div>
    </section>
  )
}

export default Projects