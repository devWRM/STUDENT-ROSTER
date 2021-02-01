// PROJECT REQUIREMENT: Container Component

import React, { Component } from 'react';
// Connects React component to redux store
// import { connect } from 'react-redux';


import WordsForm from './WordsForm.js';
import WordsList from './WordsList.js';


class WordsContainer extends Component {

    render() {
        return (
            <div>
                This is the WordsContainer
                <WordsForm student={this.props.student} />
                {/* <WordsList wordslist={this.props.student.words} /> */}

                <WordsList wordslist={this.props.student && this.props.student.words} />


                {/* this.props.student.words */}
            </div>
        );
    }
}

export default WordsContainer;
// export default connect(null, { fetchWords })(WordsContainer);
// // makes fetchWords available to WordsContainer as a prop
