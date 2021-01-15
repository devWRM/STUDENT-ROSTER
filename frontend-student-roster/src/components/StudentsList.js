// PROJECT REQUIREMENT: Stateless Component

import React from 'react';
import { connect } from 'react-redux';



// refer to as props.students =>>   const StudentsList = () => {

// deconstructed to refer to as students
const StudentsList = ({ students }) => {
    return (
        <div>
            <ul>
            {students.map(student => <li key={student.id} on>{student.nickname} <br></br> {student.name} <br></br>email: {student.email} </li>)}
            </ul>
        </div>
    );
}

const mapStateToProps = state => {
    return { students: state.students }
}

export default connect(mapStateToProps)(StudentsList);
