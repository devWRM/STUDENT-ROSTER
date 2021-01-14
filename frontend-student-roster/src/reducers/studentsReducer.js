export const studentsReducer = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_STUDENTS':
            return action.payload
        case 'NEW_STUDENT':
            return [...state, action.payload]
        default:
            return state
    }
}



