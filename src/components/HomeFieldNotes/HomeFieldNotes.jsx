import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FieldNoteItem from '../FieldNoteItem/FieldNoteItem';
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
                        <Link className="cta-link" to="/field-notes">Read more <i className="fa-solid fa-chevron-right" aria-hidden="true"></i></Link>
                    </div>
                </div>
            </div>
            <div className="entries-grid">
            { loading ? (
                <div className="loading">Loading...</div>
            ) : (
                entries.map((blog,index) => 
                    <FieldNoteItem 
                        key={index} 
                        title={blog.title} 
                        imgPath={blog.image} 
                        slug={blog.slug.current}
                        catList={blog.category}
                        excerpt={generateExcerpt(blog.content, 100)}
                        postDate={dateFormatter('simple-date-dot',blog.date)}
                        customClassName={`blog-item `+blog.slug.current} 
                    />
                )
            )}
            </div>
        </div>
    </section>
    )
}

export default HomeFieldNotes