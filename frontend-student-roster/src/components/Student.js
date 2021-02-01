// Shows a single student and a list of that student's words
// Functional component because it's just for show & not doing anything to current state
// Should be similar to StudentsList.js

import React from 'react'
import { connect } from 'react-redux';


import WordsContainer from './word-components/WordsContainer.js'

const Student = (props) => {


    // let student = props.students[props.match.params.id - 1]

    return (
        <div>
            
            {/* {student ? student.nickname : null} */}          
            STUDENT: {props.student.nickname} <br></br> {props.student.name} <br></br>email: {props.student.email} 
            {/* <br></br> <button onClick={() => this.props.deleteStudent(student.id)}>Delete Student</button> */}


            <WordsContainer student={props.student} />



        </div>
    )


}

const mapStateToProps = state => {
    return { students: state.students }
}


export default connect(mapStateToProps)(Student);




// {student.nickname} <br></br> {student.name} <br></br>email: {student.email} <br></br> <button onClick={() => this.props.deleteStudent(student.id)}>Delete Student</button> 
