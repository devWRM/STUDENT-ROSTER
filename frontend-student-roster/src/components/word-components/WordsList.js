import React from 'react'
// import StudentsList from '../StudentsList.js';
import { connect } from 'react-redux';

import { deleteWord } from './wordsActions';
import Word from './Word.js';


const WordsList = (props) => {

    let handleDelete = (word) => {
        props.deleteWord(word.id, word.student_id)
    }

    return (
        <div>

        <ul>
                {props.wordslist && props.wordslist.map(word => 

                    <li key={word.id}>
                        {/* {word.spelling} */}
                        <Word word={word} />
                        <button onClick={() => handleDelete(word)}>delete {word.spelling}</button>
                    </li>
            

            )}
        </ul>

        </div>
    )
}

export default connect(null, { deleteWord })(WordsList)
