// PROJECT REQUIREMENT: Stateless Component


import React from 'react';
import { Switch, Route } from 'react-router-dom';


// Need this container (though not directly referenced) to fetch students displayed in StudentsList
import StudentsContainer from './StudentsContainer.js';

import Header from './Header.js';
import Home from './Home.js';
import StudentsList from './StudentsList.js';
import Student from './Student.js';

// import Router from './Router.js';


class App extends React.Component {

    render() {
        return(
            <div>
                <Header />
                <StudentsContainer />

                <Switch>
                    <Route exact path="/" component={Home} />
                    {/* <Home /> */}

                    <Route exact path="/students" component={StudentsList} />
                    {/* <StudentsList /> */}

                    <Route path="/students/:id" component={Student} />
                </Switch>
                {/* <Router /> */}
            </div>
        );
    }
}


export default App;
