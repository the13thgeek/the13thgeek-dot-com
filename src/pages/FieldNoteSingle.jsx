import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useParams } from 'react-router-dom';
import { dateFormatter, generateExcerpt } from '../utils/utils';
import { Helmet } from 'react-helmet-async';
import PortableTextRender from '../components/PortableTextRender/PortableTextRender';
import FourOhFour from './FourOhFour';
import { getEntryBySlug } from '../utils/fieldNotesUtils';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import seoCard from '../assets/global/seo-card-main.jpg';
import './FieldNoteSingle.scss';

const FieldNoteSingle = () => {
    const { slug } = useParams();
    const [loading, setLoading] = useState(true);
    const [entry, setEntry] = useState(null);
    //const [notFound, setNotFound] = useState(false);

    const scrollTop = () => {
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        const loadEntry = async () => {
            const data = await getEntryBySlug({ slug: slug });
            if(data) {
                setEntry(data);
            } 
            setLoading(false);
        }
        loadEntry();

    },[slug]);

    if(!entry && !loading) {
        return <FourOhFour />;
    }

    if(loading) {
        return <div>Loading...</div>;
    }

    return (
    <>
        <Helmet>
            <title>{entry.title} | Field Notes | {import.meta.env.VITE_GLOBAL_SITE_TITLE}</title>
            <meta name="description" content={generateExcerpt(entry.content,150)} />
            <meta name='keywords' content='blog, dev blog, tech blog, Web development, React developer, tech blog, geek culture, Kamen Rider fan, Power Rangers fan, gaming, Twitch streamer, Toronto developer, developer portfolio, the13thgeek' />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href={`${window.location.href}`} />

            <meta property="og:title" content={entry.title + ` | Field Notes | ` + import.meta.env.VITE_GLOBAL_SITE_TITLE} />
            <meta property="og:description" content={generateExcerpt(entry.content,150)} />
            <meta property="og:image" content={entry.image || seoCard} />
            <meta property="og:url" content={`${window.location.href}`} />
            <meta property="og:type" content="website" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={entry.title + ` | Field Notes | ` + import.meta.env.VITE_GLOBAL_SITE_TITLE} />
            <meta name="twitter:description" content={generateExcerpt(entry.content,150)} />
            <meta name="twitter:image" content={entry.image || seoCard} />
            <meta name="twitter:site" content="@the13thgeek" />
        </Helmet>
        <header className='main' id="top">
            <Navbar isHome={false} />
            <div className="page-title-bar field-notes">
            <div className="content-container">
                <div className="title-area">
                    <div className="descriptor blog-1-fieldnote">
                        <span className="title">Field Note</span>
                    </div>
                    <ul className="category">
                        {entry.category.map((cat,idx) => 
                            <li key={idx}>{cat.name}</li>
                        )}
                    </ul>
                    <h1>{entry.title}</h1>    
                    <p className="date-posted">
                        <i className="fa-solid fa-calendar-days"></i> {dateFormatter('date-with-day',entry.date)}
                    </p>
                </div>
                <div className="share-link">
                    {/* [ TODO: SHARE LINK ] */}
                </div>
            </div>
            </div>
        </header>
        <main className='field-note'>
            <div className="content-container">
                <div className="field-note-content">
                    { entry.image ? (
                        <figure className="polaroid">
                            <img src={entry.image} alt="Field Note Image" className="featured" />
                        </figure>
                    ) : ('') }
                    <PortableTextRender blocks={entry.content} />
                    { entry.category.some(cat => cat.name === "Lost Chronicles") && (
                        <div className="category-description">
                            <p><b>"Lost Chronicles"</b> are some of my past blog entries from previous iterations that have been migrated here for archival purposes.</p>
                        </div>
                    )}
                </div>
                <div className="navigator">
                    <div className='blog-index'>
                        <Link to="/field-notes">
                        <i className="fa-solid fa-circle-chevron-left"></i>
                        <span>More Field Notes</span>
                        </Link>
                    </div>
                    <hr />
                    <div className='scroll-top'>
                        <AnchorLink offset={0} href="#top">
                        <i className="fa-solid fa-circle-chevron-up"></i>
                        <span>Scroll to top</span>
                        </AnchorLink>
                    </div>
                    <hr />
                </div>
            </div>
        </main>
        <Footer />
    </>
    )
}

export default FieldNoteSingle