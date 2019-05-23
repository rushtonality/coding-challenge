import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import EditArticlePage from '../components/article/EditArticlePage';
import AddArticlePage from '../components/article/AddArticlePage';
import LandingPage from '../components/LandingPage';
import Header from "../components/Header";

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <div className="container">
            <Header />

            <div className="container-fluid">
                <Switch>
                    <Route path="/" component={LandingPage} exact={true} />
                    <Route path="/article/edit/:id" component={EditArticlePage} />
                    <Route path="/article/add" component={AddArticlePage} />
                </Switch>
            </div>

            <footer className="container-fluid">
                
            </footer>
        </div>
    </Router>
);

export default AppRouter;