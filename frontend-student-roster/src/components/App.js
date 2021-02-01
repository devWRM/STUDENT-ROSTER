// PROJECT REQUIREMENT: Stateless Component


import React from 'react';

// Replaced with Routes from Router
// import StudentsContainer from './StudentsContainer.js';

import Router from './Router.js';


class App extends React.Component {

    render() {
        return(
            <div>

                <header>
                    <p>Student Roster</p>

                </header>


                
                {/* <StudentsContainer /> */}

                <Router />
            </div>
        );
    }
}


export default App;
