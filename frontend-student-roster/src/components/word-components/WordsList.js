import React from 'react'
// import StudentsList from '../StudentsList.js';
import { connect } from 'react-redux';

import { deleteWord } from './wordsActions';
import Word from './Word.js';


import styled from 'styled-components';
const Button = styled.button`
    background-color: #004d99;
    color: white;
    width: 120px;
    padding: 5px;
    margin-bottom: 1rem;
`


const WordsList = (props) => {

    let handleDelete = (word) => {
        props.deleteWord(word.id, word.student_id)
    }

    return (
        <div>

        <ul>
                {
                    props.wordslist.length ? props.wordslist.map(word => 

                        <li key={word.id}>
                            {/* {word.spelling} */}
                            <Word word={word} />
                            <Button onClick={() => handleDelete(word)}>delete {word.spelling}</Button>
                        </li>
                    ) : <h4>There are no words in this student's wordlist.</h4>
                }
        </ul>

        </div>
    )
}

export default connect(null, { deleteWord })(WordsList)
