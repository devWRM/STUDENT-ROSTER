// PROJECT REQUIREMENT: Container Component

import React, { Component } from 'react';
// Connects React component to redux store
import { connect } from 'react-redux';

import { fetchStudents } from '../actions/studentsActions.js';
import StudentsForm from './StudentsForm.js';
import StudentsList from './StudentsList.js';

class StudentsContainer extends Component {

    componentDidMount() {
        this.props.fetchStudents()      // <<= datastudents: (4) [{…}, {…}, {…}, {…}]

    }

    render() {
        return (
            <div>
                <p>This is the StudentsContainer</p>
                <StudentsForm />
                <StudentsList students={this.props.students} /> 
            </div>
        );
    }
}


// NOTE StudentsList above renders with & without the students prop
// NOTE Below, also works if mapStateToProps is used with its function instead of null

export default connect(null, { fetchStudents })(StudentsContainer);
// makes fetchStudents available to StudentsContainer as a prop
// connect automatically calls store.dispatch inside action fetch
// but thunk causes the dispatch to wait until after fetch is complete
// ????? Is this working WITHOUT mapStateToProps because the new store state returned replaces null