import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';


import './Header.css';

import styled from 'styled-components';
const Button = styled.button`
    background-color: white;
    color: #004d99;
    width: 100px;
    padding: 5px;
    
`


// SLACK Dec 1, 2020: Corrina Brock Moore to Muazzam Nashat:
// You can use a push state to show a different URL in the browser.

class Header extends Component {

    handleClickHome = () => {
        this.props.history.push("/")
    };

    handleClickAbout = () => {
        this.props.history.push("/about")
    };

    handleClickStudentList = () => {
        this.props.history.push("/students")
    };


    render() {
        return (
            <div>
                 <p className="roster-header" style = {{ fontFamily: 'arial', fontSize: '30px', color: '#004d99' }}><b>STUDENT ROSTER</b></p>

                    <div className="roster-buttons">
                        <Button onClick={this.handleClickHome}><b>Home</b></Button>
                        <Button onClick={this.handleClickAbout}><b>About</b></Button>
                        <Button onClick={this.handleClickStudentList}><b>Student List</b></Button>
                    </div>

            </div>
        )
    }
}


export default withRouter(Header);
