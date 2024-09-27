import React, { useState, useEffect } from "react";
import { Helmet } from 'react-helmet-async';
import FieldNoteItem from "../components/FieldNoteItem/FieldNoteItem";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { fetchEntries } from '../utils/fieldNotesUtils';
import { dateFormatter, generateExcerpt } from '../utils/utils';
import './FieldNotes.scss';

const FieldNotes = () => {
    const [loading, setLoading] = useState(true);
    const [entries, setEntries] = useState([]);

    useEffect(() => {       
        const loadEntries = async () => {
            const data = await fetchEntries({ limit: 18, orderBy: 'date desc'});
            if(data) {
                setEntries(data);
            }
            setLoading(false);
        }
        loadEntries();
    },[]);

    return (
        <>
        <header className="main">
            <Navbar />
            <div className="page-title-bar about">
                <div className="content-container">
                    <div className="descriptor about-1-profile">
                        <span className="title">Profile</span>
                    </div>
                    <h1>Field Notes</h1>
                </div>
            </div>
        </header>
        <main className="page-fieldnotes">
            <div className="content-container">
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
                            postDate={dateFormatter('simple-date',blog.date)}
                            customClassName={`blog-item `+blog.slug.current} 
                        />
                    )
                )}
                </div>
            </div>
        </main>
        <Footer />
        </>
    );
}

export default FieldNotes