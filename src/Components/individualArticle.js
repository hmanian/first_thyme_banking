import React from 'react'
import './individualArticle.css'


const Article = ({title, link, genre, level, publisher}) => {
        return (
                <div className="article">
                        <a href={link} className="articleLink" target="_blank" title="Open Article In New Tab/Window">
                                <div className="articleContent">
                                        <div className="articleInfo">
                                                <p className="articleTitle">{title}</p>
                                                <img src={publisher} className="articlePublisher"></img>
                                        </div>
                                </div>
                        </a>
                        <a href={link} className="articleGenre">{genre}</a>
                </div>
        )
}

export default Article