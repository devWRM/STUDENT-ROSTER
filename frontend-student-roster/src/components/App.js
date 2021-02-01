// PROJECT REQUIREMENT: Stateless Component


import React from 'react';
import { Switch, Route } from 'react-router-dom';


// Need this container (though not directly referenced) to fetch students displayed in StudentsList
import StudentsContainer from './StudentsContainer.js';

import Header from './Header.js';
import Home from './Home.js';
import StudentsList from './StudentsList.js';

// import Router from './Router.js';


class App extends React.Component {

    render() {
        return(
            <div>
                <Header />

                <Home />
                <StudentsList />
                <StudentsContainer />

                {/* <Router /> */}
            </div>
        );
    }
}


export default App;
