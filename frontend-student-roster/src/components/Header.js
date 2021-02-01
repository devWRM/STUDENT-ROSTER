import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';



class Header extends Component {

    handleClickHome = () => {
        this.props.history.push("/")
    };

    handleClickStudentList = () => {
        this.props.history.push("/students")
    };


    render() {
        return (
            <div>
                 <p>STUDENT ROSTER</p>
                    <button onClick={this.handleClickHome}>Home</button>
                    <button onClick={this.handleClickStudentList}>Student List</button>
            </div>
        )
    }
}


export default withRouter(Header);
