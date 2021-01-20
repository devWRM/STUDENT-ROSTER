// PROJECT REQUIREMENT: Stateless Component

import React from 'react';
// Connects React component to redux store
import { connect } from 'react-redux';

import { deleteStudent } from '../actions/studentsActions.js'


// refer to as props.students =>>   const StudentsList = () => {

// destructured to refer to as students
const StudentsList = ({ students }) => {

// debugger;

    return (
        

        <div>

            <ul>
                {students.length ? students.map(student => <li key={student.id}>{student.nickname} <br></br> {student.name} <br></br>email: {student.email} <br></br> <button onClick={() => deleteStudent(student.id)}>Delete Student</button> </li>) : <h3>Roster is empty: No Students</h3>}
            </ul>

            {/* console.log(`${student.id}`) */}


            {/* <ul>
            {students.map(student => <li key={student.id} on>{student.nickname} <br></br> {student.name} <br></br>email: {student.email} </li>)}
            </ul> */}
        </div>
    );
}

// MAPSTATETOPROPS provides specific store state piece as a prop to this component
// mapStateToProps isolates piece of the state that concerns this component
// which eliminates re-render of non-concerns in state
const mapStateToProps = state => {
    return { students: state.students }
}
// access props =>> this.props.students






/////  Works without needing to import bindActionCreators   WHY?? /////
/////  ANS passing deleteStudent(id) action directly into dispatch connects them
const mapDispatchToProps = dispatch => {
    return {
        deleteStudent: id => dispatch(deleteStudent(id))
    }
}

// alerts this component that we're connected to deleteStudent action through the redux store
export default connect(mapStateToProps, mapDispatchToProps)(StudentsList);
