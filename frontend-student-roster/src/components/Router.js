// PROJECT REQUIREMENT: 3+ Routes using Router
// PROJECT REQUIREMENT: Stateless Component

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Welcome from './Welcome.js';
import About from './About.js';
import StudentsContainer from './StudentsContainer.js';


const Router = () => {
    return (
        <Switch>
            <Route exact path='/Welcome' component={Welcome} />
            <Route exact path='/About' component={About} />
            <Route exact path='/Students' component={StudentsContainer} />
        </Switch>
    );
}

export default Router;
