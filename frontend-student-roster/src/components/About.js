// PROJECT REQUIREMENT: Stateless Component

import React from 'react';

const About = () => {
    return (
        <div
        
            style = {{
                padding: '5rem'
            }}

        >

            <h3>ALL ABOUT STUDENT ROSTER</h3>
            <h4>Student Roster lets you:</h4>
            <ul>
                <li>see a list of students</li>
                <li>create a new student</li>
                <li>delete a student (including the student's word list)</li>
                <li>see a list of words for a specific student</li>
                <li>create a word for a specific student</li>
                <li>delete a word</li>
            </ul>


        </div>
    );
}

export default About;
