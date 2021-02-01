// PROJECT REQUIREMENT: Stateless Component


import React from 'react';

// Replaced with Routes from Router
// import StudentsContainer from './StudentsContainer.js';

import Header from './Header.js';
import Router from './Router.js';


class App extends React.Component {

    render() {
        return(
            <div>
                <Header />
                
                {/* <StudentsContainer /> */}

                <Router />
            </div>
        );
    }
}


export default App;
