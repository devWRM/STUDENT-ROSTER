// Actions are objects with type & payload keys

// word =>> user input object to create a new word
export const newWord = word => {
    return (dispatch) => {
        fetch('http://localhost:3000/students/:student_id/words', {
            method: 'POST',
            body: JSON.stringify(student),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(resp => resp.json())
        .then(dataWord => dispatch({ type: 'NEW_WORD', payload: dataWord}))
    }
}



