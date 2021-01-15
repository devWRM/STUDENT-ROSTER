// Actions are objects with type & payload keys
// got it! studentsActions fetches the action methods in the Controllers


export const fetchStudents = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/students')
        .then(resp => resp.json())
        .then(dataStudents => dispatch({ type: 'FETCH_STUDENTS', payload: dataStudents}))

        // checks that data is returned from the database
        // .then(dataStudents => console.log('Got it!', dataStudents))
    }
}


// student =>> user input object to create a new student
export const newStudent = student => {
    return (dispatch) => {
        fetch('http://localhost:3000/students', {
            method: 'POST',
            body: JSON.stringify(student),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(resp => resp.json())
        .then(dataStudent => dispatch({ type: 'NEW_STUDENT', payload: dataStudent}))
    }
}



export const deleteStudent = studentID => {
    return (dispatch) => {


        return fetch(`http://localhost:3000/students/${studentID}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(student => {
            dispatch({ type: "DELETE_STUDENT", payload: student.id })
        })


    }
}



