import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchStudents } from '../actions/studentsActions.js';
import StudentsForm from './StudentsForm.js';

class StudentsContainer extends Component {

    componentDidMount() {
        this.props.fetchStudents()      // <<= datastudents: (4) [{…}, {…}, {…}, {…}]
    }

    render() {
        return (
            <div>
                This is the StudentsContainer
                <StudentsForm />
            </div>
        );
    }
}


export default connect(null, { fetchStudents })(StudentsContainer);
// makes fetchStudents available to StudentsContainer as a prop
