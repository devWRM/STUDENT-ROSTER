import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchStudents } from '../actions/studentsActions.js';

class StudentsContainer extends Component {

    componentDidMount() {
        // console.log(this)            // <<= StudentsContainer
        // console.log(this.props)      // <<= {fetchStudents: f}
        // this.props()                 // <<= TypeError: this.props is not a function
        // this.props.fetchStudents     // <<= nothing
        this.props.fetchStudents()      // <<= Got it! (4) [{…}, {…}, {…}, {…}]
    }

    render() {
        return (
            <div>
                This is the StudentsContainer
            </div>
        );
    }
}


export default connect(null, { fetchStudents })(StudentsContainer);
// makes fetchStudents available to StudentsContainer as a prop
