// compare studentsActions to action methods in the Controllers
// got it! studentsActions fetches the actions in the Controllers


export const fetchStudents = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/students')
        .then(resp => resp.json())
        .then(dataStudents => dispatch({ type: 'FETCH_STUDENTS', payload: dataStudents}))

        // checks that data is returned from the database
        // .then(dataStudents => console.log('Got it!', dataStudents))
    }
}




