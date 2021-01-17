// // PROJECT REQUIREMENT: 2nd container
// // Sets component (local) state

// import React, { Component } from 'react';
// import { connect } from 'react-redux';

// import { newWord } from '.../actions/wordsActions.js';



// class WordsForm extends Component {

//     state = {
//         spelling: "",
//         pos: "",
//         definition: "",
//         sentence: ""
//     }


//     handleChange = e => {
//         const { name, value } = e.target
//     // name => property name (name, nickname, or email)
//     // value => each keyStroke + previous state  

//         this.setState({
//             [name]: value
//         })
//     } 

//     handleSubmit = e => {
//         e.preventDefault()
//         this.props.newWord(this.state)
//     }


//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>Spelling</label>
//                 <input type="text" value={this.state.spelling} onChange={this.handleChange} name="spelling"></input><br></br><br></br>

//                 <label>POS</label>
//                 <input type="text" value={this.state.pos} onChange={this.handleChange} name="pos"></input><br></br><br></br>

//                 <label>Definition</label>
//                 <input type="text" value={this.state.definition} onChange={this.handleChange} name="definition"></input><br></br><br></br>

//                 <label>Sentence</label>
//                 <input type="text" value={this.state.sentence} onChange={this.handleChange} name="sentence"></input><br></br><br></br>

//                 <input type="submit" value="New Word"></input><br></br>
//             </form>
//         );
//     }


// }


// export default connect(null, { newWord })(WordsForm);
