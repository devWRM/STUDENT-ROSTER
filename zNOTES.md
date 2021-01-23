




DELETE below

DELETE above

________________________________



student.fetchStudentWords


RUN APP

    BACKEND
    (cd into Project Folder)
    rails new backend-name --api        <<= creates a Rails backend
    cd into backend =>>     bundle install          rails s

    FRONTEND
    (cd into Project Folder)
    create-react-app frontend-name      <<= creates a React frontend
    cd into frontend =>>    npm install             npm start

    np

DEBUG
    binding.pry   <<=   backend (check terminal)
    debugger;     <<=   frontend (check console)


https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/








==================================================================

CREATE NEW WORD WITH:

Word.create(spelling: "citizen", pos: "noun", definition: "a member of a state or nation", sentence: "I am an American citizen.", student_id: 2)












________________________________

.eslintcache

Stackoverflow:  Added .eslintcache to .gitignore per =>>  https://stackoverflow.com/questions/65079558/how-to-delete-eslintcache-file-in-react
/frontend-library/.eslintcache

Documentation:  https://eslint.org/docs/user-guide/command-line-interface#caching

________________________________

SOLUTIONS: Update the current state array of student objects
            By repacing the Abe student object
            with new Abe student object
            that now has the new word in his words array


SECOND RESP RETURNED creating new Word & Student
NOTE Both go to the same Reducer =>>  FILE studentsReducer.js

2nd response creating new Word
NOTE could not get a console.log from 2nd .then
    so debugger in the reducer where the return is dispatched to

    state   =>> array of current student objects including 
                ABE who has 14 WORDS
    action  =>> object w/2 keys
                  type:     "NEW_WORD"
                  payload:  CURRENT single student object containing array of words including the NEW WORD
                  ABE has 15 WORDS


2nd response creating new Student
NOTE could not get a console.log from 2nd .then
    so debugger in the reducer where the return is dispatched to

    state   =>> array of current student objects
    action  =>> object w/2 keys
                  type:     "NEW_STUDENT"
                  payload:  NEW student object with EMPTY ARRAY OF WORDS

____________________________________

FIRST RESP RETURNED IN ACTIONS creating new Word & Student

wordsActions.js:6 
Response {type: "cors", url: "http://localhost:3000/students/1/words", redirected: false, status: 200, ok: true, …}

studentsActions.js:22 
Response {type: "cors", url: "http://localhost:3000/students", redirected: false, status: 201, ok: true, …}


______________

FILE App.js
Original code in the return

NOTE image tag
    {/* <img src={logo} className="App-logo" alt="logo" /> */}

NOTE anchor tag (link)
    {/* <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
    </a> */}


