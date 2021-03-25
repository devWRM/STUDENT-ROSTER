// PROJECT REQUIREMENT: Container Component

import React, { Component } from 'react';
// Connects React component to redux store
import { connect } from 'react-redux';
// import { Route } from 'react-router-dom';

import { fetchStudents } from '../actions/studentsActions.js';
// import StudentsForm from './StudentsForm.js';
// import StudentsList from './StudentsList.js';
// import Student from './Student.js';



class StudentsContainer extends Component {

    componentDidMount() {

        this.props.fetchStudents()      // <<= datastudents: (4) [{…}, {…}, {…}, {…}]

    }

    render() {
        return (
            <div>
                

                {/* <Route path='/students/new' component={StudentsForm} /> */}
                {/* <StudentsForm /> */}

                {/* <Route path='/students/:id' render={(routerProps) => <Student {...routerProps} students={this.props.students} />}/> */}
                {/* route to list single student */}

                {/* <Route exact path='/students' render={(routerProps) => <StudentsList {...routerProps} students={this.props.students} />}/> */}
                {/* <StudentsList students={this.props.students} />  */}
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