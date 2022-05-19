import React from "react";
import { Link } from 'react-router-dom';
import { data } from '../data/articles';
import Article from '../Components/individualArticle';
import "./Finances.css";

const Finances = () => {
    return (
        <div className="Finances">
            <h2>Financial Information</h2>
            {/* <Link to="/movie">Helpful Links</Link> */}
            <div className='articles'>
                {data.map((article) => (
                    <Article title={article.title} link={article.link} genre={article.genre} level={article.level}  />
                ))}
            </div>


        </div>
    );
}

export default Finances;

// const Catalog = () => {
//     return (
//         <div>
//             <h1 className="title">Catalog</h1>
//             <div className="movies">
//                 {data.map((movie) => (
//                     <Movie name={movie.name} genre={movie.genre} image={movie.img}/>
//                 ))}
//             </div>
//         </div>
//     )
// }