import React from "react";
import { data } from '../data/articles';
import Article from '../Components/individualArticle';
import "./Finances.css";

const Finances = () => {
    return (
        <div className="Finances">
                <h2>Financial Information</h2>
                <div className='articles'> 
                        {data.map((article) => (
                        <Article title = {article.title} link = {article.link} genre = {article.genre} level = {article.level}  publisher = {article.publisher}/>
                        ))}
                </div>
        </div>
    );
}

export default Finances;