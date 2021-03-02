import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from 'react-router-dom';

import { NavBar } from './Navbar';

import { America } from './America';
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';
import Africa from './Africa';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                
                <NavBar />

                <div className="container">
                    <Switch>
                        <Route exact path="/" component={ HomeScreen } />

                        <Route exact path="/america" component={ America } />
                        <Route exact path="/africa" component={ Africa } />
                        <Route exact path="/login" component={ LoginScreen } />
                        
                        <Redirect to="/" />

                    </Switch>
                </div>
            </div>
        </Router>
    )
}
