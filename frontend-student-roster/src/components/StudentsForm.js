// PROJECT REQUIREMENT: 2nd container
// Sets component (local) state

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { newStudent } from '../actions/studentsActions';



class StudentsForm extends Component {

    state = {
        name: "",
        nickname: "",
        email: ""
    }


    handleChange = e => {
        const { name, value } = e.target
    // name => property name (name, nickname, or email)
    // value => each keyStroke + previous state  

        this.setState({
            [name]: value
        })
    } 

    handleSubmit = e => {
        e.preventDefault()
        this.props.newStudent(this.state)
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name</label>
                <input type="text" value={this.state.name} onChange={this.handleChange} name="name"></input><br></br><br></br>

                <label>Nickname</label>
                <input type="text" value={this.state.nickname} onChange={this.handleChange} name="nickname"></input><br></br><br></br>

                <label>Email</label>
                <input type="text" value={this.state.email} onChange={this.handleChange} name="email"></input><br></br><br></br>

                <input type="submit" value="Create Student"></input><br></br>
            </form>
        );
    }


}


export default connect(null, { newStudent })(StudentsForm);
