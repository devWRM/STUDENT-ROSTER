export const studentsReducer = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_STUDENTS':
            return action.payload
        default:
            return state
    }
}



