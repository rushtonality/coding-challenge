import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import ArticleList from './article/ArticleList';

const LandingPage = () => (
    <div className="container-fluid">
        <ArticleList />
    </div>
);

export default LandingPage;
