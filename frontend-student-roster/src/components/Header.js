import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


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


const mapStateToProps = state => {
    return { students: state.students }
}

export default connect(mapStateToProps)(withRouter(Header));
