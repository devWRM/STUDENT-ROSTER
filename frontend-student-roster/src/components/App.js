// PROJECT REQUIREMENT: Stateless Component


import React from 'react';

// Replaced with Routes from Router
// import StudentsContainer from './StudentsContainer.js';

import Router from './Router.js';


class App extends React.Component {


    componentDidMount() {
        fetch('http://localhost:3000/students/1/words')
        .then(resp => resp.json())
        .then(dataWhat => console.log(dataWhat))

    }




    render() {
        return(
            <div>
                This is App.js
                {/* <StudentsContainer /> */}

                <Router />
            </div>
        );
    }
}


export default App;
