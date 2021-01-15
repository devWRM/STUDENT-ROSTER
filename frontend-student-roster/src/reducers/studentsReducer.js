export const studentsReducer = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_STUDENTS':
            return action.payload
        case 'NEW_STUDENT':
            return [...state, action.payload]
        case 'DELETE_STUDENT':
            let newStudents = state.filter(student => student.id !== action.payload)
            return [...newStudents] 
        default:
            return state
    }
}



