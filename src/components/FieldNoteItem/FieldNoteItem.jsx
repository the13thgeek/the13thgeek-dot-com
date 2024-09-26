import React from 'react';
import { Link } from 'react-router-dom';
import './FieldNoteItem.scss';

const FieldNoteItem = ({ title, slug, catList, imgPath, excerpt, postDate, customClassName }) => {
  return (
    <Link to={`/field-notes/`+slug} className={`blog-item-generic ` + customClassName} style={{backgroundImage: `url(${imgPath})`}}>
        <div className="filter"></div>
        <div className="field-note-content">
            <h3 className='blog-title'>{title}</h3>
            <ul className="category">
                {catList.map((cat,idx) => <li key={idx}>{cat.name}</li>)}
            </ul>                        
            <p>{excerpt} <br />
            <span className="readmore">read more</span>
            </p>
            <p className='post-date'>{postDate}</p>
        </div>
    </Link>
  )
}

export default FieldNoteItem