import React from 'react'

function Word(props) {
    return (
        <div>
            {props.word.spelling}<br></br>
            {props.word.sentence}
        </div>
    )
}

export default Word
