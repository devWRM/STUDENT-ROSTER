// PROJECT REQUIREMENT: Stateless Component


import React from 'react';

// Replaced with Routes from Router
// import StudentsContainer from './StudentsContainer.js';

import Router from './Router.js';


class App extends React.Component {

    render() {
        return(
            <div>
                <p>Student Roster</p>
                {/* <StudentsContainer /> */}

                <Router />
            </div>
        );
    }
}


export default App;
