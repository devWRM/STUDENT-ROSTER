import React from 'react'
// import StudentsList from '../StudentsList.js';
import { connect } from 'react-redux';

import { deleteWord } from './wordsActions';
import Word from './Word.js';


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
                    {/* {word.spelling} */}
                    <Word word={word} />
                    <button onClick={() => handleDelete(word)}>delete</button>
                </li>
            )}
        </div>
    )
}

export default connect(null, { deleteWord })(WordsList)
