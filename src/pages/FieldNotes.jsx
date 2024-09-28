import React, { useState, useEffect } from "react";
import { Helmet } from 'react-helmet-async';
import FieldNoteItem from "../components/FieldNoteItem/FieldNoteItem";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { fetchEntries } from '../utils/fieldNotesUtils';
import { dateFormatter, generateExcerpt } from '../utils/utils';
import seoCard from '../assets/global/seo-card-blog.jpg';
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
        window.scrollTo(0, 0);
    },[]);

    return (
        <>
        <Helmet>
            <title>Field Notes | {import.meta.env.VITE_GLOBAL_SITE_TITLE}</title>
            <meta name="description" content="Check out Aldreich's blog, where he posts write-ups, updates and insights." />
            <meta name='keywords' content='blog, dev blog, tech blog, Web development, React developer, tech blog, geek culture, Kamen Rider fan, Power Rangers fan, gaming, Twitch streamer, Toronto developer, developer portfolio, the13thgeek' />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href="https://the13thgeek.com/#/field-notes" />

            <meta property="og:title" content={`Field Notes | ` + import.meta.env.VITE_GLOBAL_SITE_TITLE} />
            <meta property="og:description" content="Check out Aldreich's blog, where he posts write-ups, updates and insights." />
            <meta property="og:image" content={seoCard} />
            <meta property="og:url" content="https://the13thgeek.com/#/field-notes" />
            <meta property="og:type" content="website" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={`Field Notes | ` + import.meta.env.VITE_GLOBAL_SITE_TITLE} />
            <meta name="twitter:description" content="Check out Aldreich's blog, where he posts write-ups, updates and insights." />
            <meta name="twitter:image" content={seoCard} />
            <meta name="twitter:site" content="@the13thgeek" />
        </Helmet>
        <header className="main">
            <Navbar />
            <div className="page-title-bar field-notes-index">
                <div className="content-container">
                    <div className="descriptor blog-1-index">
                        <span className="title">Index</span>
                    </div>
                    <h1>Field Notes</h1>
                    <p>Welcome to my little blog! Here you'll find my random write-ups, updates and insights covering a variety of topics. Whether it's my upskill journey, adventures or personal reflections, I'm sometimes in the mood to document it.</p>
                </div>
            </div>
        </header>
        <main className="page-fieldnotes">
            <div className="content-container">
                <div className="descriptor blog-2-notebook">
                        <span className="title">Notebook</span>
                    </div>
                    <h2>Latest Posts</h2>
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