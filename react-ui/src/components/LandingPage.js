import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import ArticleList from './article/ArticleList';

const LandingPage = () => (
    <div className="container-fluid">
        <ArticleList />
    </div>
);

// const LandingPage = () => (
//     <div>
//         <ArticleTable />
//         <ul>
//             <li>
//             <Link to="/article/edit/1">Article 1</Link>
//             </li>
//             <li>
//             <Link to="/article/add">Add</Link>
//             </li>
//         </ul>
        
//     </div>
// );

export default LandingPage;
