// PROJECT REQUIREMENT: Stateless Component

import React from 'react';
// Connects React component to redux store
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';





// https://stackoverflow.com/questions/61906909/cant-understand-why-onclick-not-working-in-react
// You can't dispatch directly from a HTML element onClick handler. If you bind the redux action creators it should work as expected
// import { bindActionCreators } from 'redux'      //  <<= works with mapDispatchToProps(dispatch)


import StudentsForm from './StudentsForm.js';
import { deleteStudent } from '../actions/studentsActions.js';
/////////////////////////import WordsList from './word-components/WordsList.js';
// import Student from './Student.js';

// refer to as props.students =>>   const StudentsList = () => {


    import styled from 'styled-components';
    const Button = styled.button`
        background-color: #004d99;
        color: white;
        width: 120px;
        padding: 5px;
        margin-right: 1rem;
    `

// destructured to refer to as students
// const StudentsList = ({ students }) => {
class StudentsList extends React.Component {

    render() {
        
            return (
                
                <div>

                    <StudentsForm />

                    {this.props.students.length ? this.props.students.map(student => 
                    <div key={student.id}
                    
                    style = {{
                        border: '2px solid #ccc',
                        padding: '1.5rem'
                        
                    }}
                    
                    >

                        <Button onClick={() => this.props.deleteStudent(student.id)}><b>Delete {student.nickname}</b></Button>  
                        <Link to={`/students/${student.id}`}>{student.name}</Link>  <br></br>  
                    </div>) : <h3>Roster is empty: No Students</h3>}


                    {/* {this.props.students.length ? this.props.students.map(student => <div key={student.id}>  <button onClick={() => this.props.deleteStudent(student.id)}>Delete {student.nickname}</button>  <Student student={student} />  <br></br>  </div>) : <h3>Roster is empty: No Students</h3>} */}


                        
                    

                    
                </div>
            );
    }

}




// MAPSTATETOPROPS provides specific store state piece as a prop to this component
// mapStateToProps isolates piece of the state that concerns this component
// which eliminates re-render of non-concerns in state
const mapStateToProps = state => {
    return { students: state.students }
}
// access props =>> this.props.students



// // Must also uncomment above:     import { bindActionCreators } from 'redux'  
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({deleteStudent}, dispatch)
// //   return bindActionCreators({deleteStudent: deleteStudent}, dispatch)
// }


/////  Works without needing to import bindActionCreators   WHY?? /////
/////  ANS passing deleteStudent(id) action directly into dispatch connects them
const mapDispatchToProps = dispatch => {
    return {
        deleteStudent: id => dispatch(deleteStudent(id))
    }
}

// alerts this component that we're connected to deleteStudent action through the redux store
export default connect(mapStateToProps, mapDispatchToProps)(StudentsList);
