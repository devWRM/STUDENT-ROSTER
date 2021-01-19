// Actions are objects with type & payload keys
// got it! studentsActions fetches the action methods in the Controllers


// NOTE Thunk anonymous function receives dispatch as an argument so that it's called AFTER fetch in complete

export function fetchStudents() {
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
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json'}
        })
        .then(resp => resp.json())
        .then(dataStudent => dispatch({ type: 'NEW_STUDENT', payload: dataStudent}))
    }
}

// NOTE In headers, Accept key/value is optional, Content-Type is mandatory



export const deleteStudent = studentID => {
// debugger;
    return (dispatch) => {


        return fetch(`http://localhost:3000/students/${studentID}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(student => dispatch({ type: "DELETE_STUDENT", payload: student.id }))


    }
}



