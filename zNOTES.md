


RUN APP
    cd into backend =>>     bundle install          rails s
    cd into frontend =>>    npm install             npm start

https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

<button onClick={()=>deleteStudent(student.id)}>Delete Student</button>
<button onClick={deleteStudent(student.id)}>Delete Student</button>

ERROR
Unhandled Rejection (SyntaxError): Unexpected end of JSON input
(anonymous function)
http://localhost:3001/static/js/main.chunk.js:51:26
  48 |   headers: {
  49 |     'Content-Type': 'application/json'
  50 |   }
> 51 | }).then(resp => resp.json()).then(student => {
     |                      ^  52 |   dispatch({
  53 |     type: "DELETE_STUDENT",
  54 |     payload: student.id



ERROR
Unhandled Rejection (SyntaxError): Unexpected end of JSON input
(anonymous function)
src/actions/studentsActions.js:36
  33 | return (dispatch) => {
  34 | 
  35 | 
> 36 |     return fetch(`http://localhost:3000/students/${studentID}`,{
     | ^  37 |         method: 'DELETE',
  38 |         headers: {
  39 |             'Content-Type': 'application/json'


















_______________________________________________________

               <label>Name</label>
                <input type="text" value={this.state.name} onChange={this.handleChange} name="name" placeholder="name"></input><br></br><br></br>

                <label>Nickname</label>
                <input type="text" value={this.state.nickname} onChange={this.handleChange} name="nickname" placeholder="nickname"></input><br></br><br></br>

                <label>Email</label>
                <input type="text" value={this.state.email} onChange={this.handleChange} name="email" placeholder="email"></input><br></br><br></br>



____________________

 // return(
        //     // <form>
        //     //     <label>Name:</label>
        //     //      <input type="text" value={this.state.name} onChange={this.handleChange} name="name" /></br>
        //     //     <label>Nickname:</label>
        //     //     <input type="text" value={this.state.nickname} onChange={this.handleChange} name="nickname" /></br>
        //     //     <label>Email:</label>
        //     //     <input type="text" value={this.state.email} onChange={this.handleChange}  name="email" /></br>          
        //     //     <input type="submit" value="Create Student/>
        //     // </form>
        // );

________________________________________

CHECKS TO SEE WHY FETCH WASN'T WORKING

class StudentsContainer extends Component {

    componentDidMount() {
        // console.log(this)            // <<= StudentsContainer
        // console.log(this.props)      // <<= {fetchStudents: f}
        // this.props()                 // <<= TypeError: this.props is not a function
        // this.props.fetchStudents     // <<= nothing
        this.props.fetchStudents()      // <<= Got it! (4) [{…}, {…}, {…}, {…}]
    }

    render() {
        return ()
    }
}