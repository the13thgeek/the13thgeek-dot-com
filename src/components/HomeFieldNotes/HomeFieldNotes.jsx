import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { dateFormatter, generateExcerpt } from '../../utils/utils';
import { fetchEntries } from '../../utils/fieldNotesUtils';
import './HomeFieldNotes.scss';
    
const HomeFieldNotes = () => {

    const [loading, setLoading] = useState(true);
    const [entries, setEntries] = useState([]);

    useEffect(() => {       
        const loadEntries = async () => {
            const data = await fetchEntries({ limit: 3, orderBy: 'date desc'});
            if(data) {
                setEntries(data);
            }
            setLoading(false);
        }
        loadEntries();
    },[]);

    return (
    <section id="home-fieldnotes" className="home-fieldnotes">
        <div className="content-container">
            <div className="row title-bar">
                <div className="col">
                    <div className="descriptor home-5-fieldnotes">
                        <span className="title">Entry</span>
                    </div>
                    <h2>Field Notes</h2>
                </div>
                <div className="col">
                    <div className="call-to-action">
                        <a className="cta-link" href="#/field-notes">Read more <i className="fa-solid fa-chevron-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
            <div className="entries-grid">
            { loading ? (
                <div className="loading">Loading...</div>
            ) : (
                entries.map((blog,index) => 
                <Link to={`/field-notes/`+blog.slug.current} className={`blog-item `+blog.slug.current} key={index} style={{backgroundImage: `url(${blog.image})`}}>
                    <div className="filter"></div>
                    <div className="field-note-content">
                        <h3 className='blog-title'>{blog.title}</h3>
                        <ul className="category">
                            {blog.category.map((cat,idx) => <li key={idx}>{cat.name}</li>)}
                        </ul>                        
                        <p>{generateExcerpt(blog.content, 100)} <br />
                        <span className="readmore">read more</span>
                        </p>
                        <p className='post-date'>{dateFormatter('simple-date',blog.date)}</p>
                    </div>
                </Link>
                )
            )}
            </div>
        </div>
    </section>
    )
}

export default HomeFieldNotes