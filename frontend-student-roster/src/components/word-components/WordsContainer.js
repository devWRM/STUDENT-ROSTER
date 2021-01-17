// PROJECT REQUIREMENT: Container Component

import React, { Component } from 'react';
// Connects React component to redux store
import { connect } from 'react-redux';

import WordsList from './WordsList.js';

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
                <WordsList />
                {/* <WordsForm /> */}
            </div>
        );
    }
}

export default WordsContainer;
// export default connect(null, { fetchWords })(WordsContainer);
// // makes fetchWords available to WordsContainer as a prop
