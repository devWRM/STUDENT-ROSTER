import React from 'react';

import English from '../images/english.png';

function Home() {
    return (
        <div>

            <div

                style = {{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    fontSize: '35px',
                    padding: '1rem',
                    marginTop: '50px'
                }}
        
            >
                <h3>WELCOME TO STUDENT ROSTER!</h3>
            </div>

           
           <div
           
                style = {{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                }}

           >
          
                <img src={English} className="english" alt="English image" />

            </div>

        </div>
    )
}

export default Home;
