import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import ArticleList from './article/ArticleList';

const LandingPage = () => (
    <div className="container-fluid">
        <h2>
            <Link to="/article/add">Add Article</Link>
        </h2>
        <ArticleList />
    </div>
);

export default LandingPage;
