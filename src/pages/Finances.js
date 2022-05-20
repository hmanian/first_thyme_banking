import React from "react";
import { data } from '../data/articles';
import Article from '../Components/individualArticle';
import "./Finances.css";

const Finances = () => {
    return (
        <div className="Finances">
                <h2>Financial Information</h2>

                <div className="filter">
                        <div className="filterOption">
                                <label>Category</label>
                                <select id="filterCat" onChange="checkCat()">
                                        <option value="" disabled>Select</option>
                                        <option value="Banking">Banking</option>
                                        <option value="Budgeting">Budgeting</option>
                                        <option value="Credit">Credit</option>
                                        <option value="Investing">Investing</option>
                                        <option value="Other">Other</option>
                                </select>
                        </div>

                        <div className="filterOption">
                                <label>Level</label>
                                <select id="filterLevel" onChange="checkLevel">
                                        <option value="" disabled>Select</option>
                                        <option value="Beginner">Beginner</option>
                                        <option value="Intermediate">Intermediate</option>
                                        <option value="Expert">Expert</option>
                                </select>
                        </div>
                        
                </div>

                <div className='articles'>
                        {data.map((article) => (
                        <Article title = {article.title} link = {article.link} genre = {article.genre} level = {article.level}  publisher = {article.publisher}/>
                        ))}
                </div>
        </div>
    );
}

export default Finances;