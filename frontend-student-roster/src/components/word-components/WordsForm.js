// PROJECT REQUIREMENT: Class Component
// Has state


import React, { Component } from 'react'
import { connect } from 'react-redux';

// import { newWord } from '.../actions/wordsActions.js';
import { newWord } from './wordsActions.js';



import styled from 'styled-components';
const Label = styled.label`
    margin: 1rem;
`



class WordsForm extends Component {

    state = {
        spelling: "",
        pos: "",
        definition: "",
        sentence: ""
    }

    handleChange = e => {
        // const { name, value } = e.target
    // name => property name (name, nickname, or email)
    // value => each keyStroke + previous state  

    // Without the const above, use =>> [e.target.name]: e.target.value
        this.setState({
            [e.target.name]: e.target.value,
            [e.target.name]: e.target.value,
            [e.target.name]: e.target.value,
            [e.target.name]: e.target.value
        })
    } 


    handleSubmit = e => {
        e.preventDefault()

        // this.state   =>> user input
        // this.props.student.id    =>> student word belongs to
        this.props.newWord(this.state, this.props.student.id)
        this.setState({
            spelling: "",
            pos: "",
            definition: "",
            sentence: ""
        })
    }


    render() {
        return (
            <div>
                <p>-------------------</p>

                Create a new word:
               <form onSubmit={this.handleSubmit}>
                   <Label>Word: </Label>
                   <input type="text" value={this.state.spelling} onChange={this.handleChange} name="spelling"></input>

                   <Label>POS: </Label>
                   <input type="text" value={this.state.pos} onChange={this.handleChange} name="pos"></input>

                    <br></br>

                   <Label>Definition: </Label>
                   <input type="text" value={this.state.definition} onChange={this.handleChange} name="definition"></input>

                   <Label>Sentence: </Label>
                   <input type="text" value={this.state.sentence} onChange={this.handleChange} name="sentence"></input>

                    <br></br>

                   <input type="submit" value="submit"></input><br></br>

               </form>

                <p>-------------------</p>

            </div>
        )
    }
}

export default connect(null, { newWord })(WordsForm)

