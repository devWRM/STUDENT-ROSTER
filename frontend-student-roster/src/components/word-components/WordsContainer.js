// PROJECT REQUIREMENT: Container Component

import React, { Component } from 'react';
// Connects React component to redux store
import { connect } from 'react-redux';

// // import { fetchStudents } from '../actions/studentsActions.js';
// // import StudentsForm from './StudentsForm.js';
// // import StudentsList from './StudentsList.js';

class WordsContainer extends Component {

//     // componentDidMount() {
//     //     this.props.fetchStudents()      // <<= datastudents: (4) [{…}, {…}, {…}, {…}]
//     // }

    render() {
        return (
            <div>
                This is the WordsContainer
                <WordsForm />
                <WordsList />
            </div>
        );
    }
}


// export default connect(null, { fetchWords })(WordsContainer);
// // makes fetchWords available to WordsContainer as a prop
