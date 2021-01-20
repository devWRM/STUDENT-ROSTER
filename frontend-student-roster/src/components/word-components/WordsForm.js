// PROJECT REQUIREMENT: Class Component
// Has state


import React, { Component } from 'react'
import { connect } from 'react-redux';




class WordsForm extends Component {
    render() {
        return (
            <div>
                WORDS FORM
            </div>
        )
    }
}

export default connect(null, )(WordsForm)

