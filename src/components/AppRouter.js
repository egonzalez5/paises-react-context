import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from 'react-router-dom';

import { NavBar } from './Navbar';
import { HomeScreen } from './HomeScreen';

import America from './America';
import Africa from './Africa';
import Asia from './Asia';
import Europa from './Europa';
import Oceania from './Oceania';

export const AppRouter = () => {
    return (
        <Router>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <NavBar />
                
                        <Switch>
                            
                            <Route exact path="/" component={ HomeScreen } />
                            
                            <Route exact path="/africa" component={ Africa } />
                            <Route exact path="/america" component={ America } />
                            <Route exact path="/asia" component={ Asia } />
                            <Route exact path="/europa" component={ Europa } />
                            <Route exact path="/oceania" component={ Oceania } />
                            <Redirect to="/" />

                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    )
}
