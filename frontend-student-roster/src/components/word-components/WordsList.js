import React from 'react'

const WordsList = (props) => {
    return (
        <div>
            WORDSLIST<br></br>
            {props.wordslist && props.wordslist.map(word => 
                <li key={word.id}>
                    {word.spelling}
                </li>
            )}
        </div>
    )
}

export default WordsList
