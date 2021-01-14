// Sets component (local) state
// 2nd project required container


import React, { Component } from 'react';



class StudentsForm extends Component {

    state = {
        name: "",
        nickname: "",
        email: ""
    }


    handleChange = e => {
        const { name, keyStroke } = e.target
    // name => property name (name, nickname, or email)
    // value => keyStroke   WHY  Use "name" mandatory but "value" not?
    //                      ANS  Using actual "[name]" but getting the value of "value"
    
        this.setState({
            [name]: keyStroke
        })
    } 

    // handleSubmit =  => {

    // }


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


export default StudentsForm;
