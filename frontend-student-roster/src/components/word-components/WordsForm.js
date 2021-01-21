// PROJECT REQUIREMENT: Class Component
// Has state


import React, { Component } from 'react'
import { connect } from 'react-redux';

// import { newWord } from '.../actions/wordsActions.js';
import { newWord } from './wordsActions.js';




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
               <form onSubmit={this.handleSubmit}>
                   <label>Word</label>
                   <input type="text" value={this.state.spelling} onChange={this.handleChange} name="spelling"></input>

                   <label>POS</label>
                   <input type="text" value={this.state.pos} onChange={this.handleChange} name="pos"></input>

                   <label>Definition</label>
                   <input type="text" value={this.state.definition} onChange={this.handleChange} name="definition"></input>

                   <label>Sentence</label>
                   <input type="text" value={this.state.sentence} onChange={this.handleChange} name="sentence"></input>

                   <input type="submit" value="Create Word"></input><br></br>

               </form>
            </div>
        )
    }
}

export default connect(null, { newWord })(WordsForm)

