// Actions are objects with type & payload keys

// word =>> user input object to create a new word
export const newWord = (word, studentId) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/students/${studentId}/words`, {
            method: 'POST',
            body: JSON.stringify(word),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(resp => resp.json())
        .then(dataStudent => dispatch({ type: 'NEW_WORD', payload: dataStudent}))
    }
}

// NOTE Returning dataStudent (NOT dataWord)
// WHY?? Easier to replace student with updated word list in Reducer instead of find/update


export const deleteWord = (wordId, studentId) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/students/${studentId}/words/${wordId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(dataStudent => dispatch({ type: "DELETE_WORD", payload: dataStudent }))
    }
}
 
// NOTE Returning dataStudent (NOT dataWord)
// WHY?? Easier to replace student with updated word list in Reducer instead of find/update






