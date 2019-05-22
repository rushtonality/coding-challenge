import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import EditArticlePage from '../components/article/EditArticlePage'
import AddArticlePage from '../components/article/AddArticlePage'
import MainApp from '../components/App'

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <div className="App">
            <header className="App-header">
                <h1>Coding Challenge</h1>
            </header>

            <div>
                <Switch>
                    <Route path="/" component={MainApp} exact={true} />
                    <Route path="/article/edit/:id" component={EditArticlePage} />
                    <Route path="/article/add" component={AddArticlePage} />
                </Switch>
            </div>
        </div>
    </Router>
);

export default AppRouter;