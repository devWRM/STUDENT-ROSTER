export const studentsReducer = (state = [], action) => {

    switch(action.type) {
        case 'FETCH_STUDENTS':
            return action.payload
        case 'NEW_STUDENT':
            return [...state, action.payload]
        case 'DELETE_STUDENT':
            let newStudents = state.filter(student => student.id !== action.payload.id)
            return [...newStudents] 
        case 'NEW_WORD':
            let studentsPlusWord = state.map(student => {
                if (student.id === action.payload.id) {
                    return action.payload
                } else {
                    return student
                }
            })
            return studentsPlusWord     // <<= returns the newly created updated students array
        case 'DELETE_WORD':
            let studentsMinusWord = state.map(student => {
                if (student.id === action.payload.id) {
                    return action.payload
                } else {
                    return student
                }
            })
            return studentsMinusWord     // <<= returns the newly created updated students array
        default:
            return state
    }
}

// ????? has access to current state in order to create (NOT update) a new state

