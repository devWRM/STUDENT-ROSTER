export const wordsReducer = (state = [], action) => {
    
    switch(action.type) {
        case 'FETCH_STUDENT_WORDS':
            // return action.payload
        case 'NEW_WORD':
            // return [...state, action.payload]
        case 'DELETE_WORD':
            // let newStudents = state.filter(student => student.id !== action.payload)
            // return [...newStudents] 
        default:
            return state
    }
}