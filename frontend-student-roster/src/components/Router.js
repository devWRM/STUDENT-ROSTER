// PROJECT REQUIREMENT: 3+ Routes using Router
// PROJECT REQUIREMENT: Stateless Component

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Welcome from './Welcome.js';
import About from './About.js';
// import StudentsContainer from './StudentsContainer.js';
import StudentsList from './StudentsList.js';


const Router = () => {
    return (
        <Switch>
            <Route exact path='/welcome' component={Welcome} />
            <Route exact path='/about' component={About} />
            {/* <Route path='/students' component={StudentsContainer} /> */}
            <Route path='/students' component={StudentsList} />
        </Switch>
    );
}

export default Router;
