import React from 'react'
// import StudentsList from '../StudentsList.js';
import { connect } from 'react-redux';

import { deleteWord } from './wordsActions';


const WordsList = (props) => {
    // debugger;

    let handleDelete = (word) => {
        props.deleteWord(word.id, word.student_id)
    }

    return (
        <div>

            Wordlist:<br></br>
            {props.wordslist && props.wordslist.map(word => 

                <li key={word.id}>
                    {word.spelling} {word.student_id}
                    <button onClick={() => handleDelete(word)}>delete</button>
                </li>
            )}
        </div>
    )
}

export default connect(null, { deleteWord })(WordsList)
