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

    // Without the const above, use =>> [e.target.name]: e.target.value
        this.setState({
            [name]: value
        })
    } 

    handleSubmit = e => {
        e.preventDefault()
        this.props.newStudent(this.state)
        this.setState({
            name: "",
            nickname: "",
            email: ""
        })
    }


    render() {
        return (
            <div
            
                style = {{
                    // width: '50%',
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    // fontSize: 20px,
                    
                    // border: '2px solid #ccc',
                    padding: '1rem'
                }}
            
            >
                <p>
                    Fill in the boxes then click the Create Student button to add a new student to the list.
                    <br></br>
                    Click on a student's name below to see their list of words.
                </p>
                <form onSubmit={this.handleSubmit}>
                    <label>Full Name: </label>
                    <input type="text" value={this.state.name} onChange={this.handleChange} name="name"></input><br></br><br></br>

                    <label>Nickname: </label>
                    <input type="text" value={this.state.nickname} onChange={this.handleChange} name="nickname"></input><br></br><br></br>

                    <label>Email: </label>
                    <input type="text" value={this.state.email} onChange={this.handleChange} name="email"></input><br></br><br></br>

                    <input type="submit" value="Create Student"></input><br></br>
                </form>
            </div>
        );
    }


}


export default connect(null, { newStudent })(StudentsForm);
