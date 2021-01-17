// PROJECT REQUIREMENT: Stateless Component

import React from 'react';
import { connect } from 'react-redux';

// import { deleteWord} from '../actions/wordsActions.js';


// refer to as props.words =>>   const WordsList = () => {

// destructured to refer to as students
// const WordsList = ({ words }) => {
class WordsList extends React.Component {

    render() {
        
            return (
                
                <div>
                    <ul>                       
                            {this.props.words.length ? this.props.words.map(
                                word => <li key={word.id}> <b>{word.spelling}</b> <br></br> {word.pos} <br></br>{word.definition} <br></br>{word.sentence} <br></br> <button onClick={() => this.props.deleteWord(word.id)}>Delete {word.spelling}</button> </li>
                            ) : <h3>Currently there are no words for this student</h3> }                      
                    </ul>
                </div>
            );
    }

}


// MAPSTATETOPROPS provides specific store state piece as a prop to this component
// mapStateToProps isolates piece of the state that concerns this component
// which eliminates re-render of non-concerns in state
const mapStateToProps = state => {
    return { words: state.words }
}
// access props =>> this.props.words



// // Must place above:     import { bindActionCreators } from 'redux'  
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({deleteWord}, dispatch)
// //   return bindActionCreators({deleteWord: deleteWord}, dispatch)
// }


/////  Works without needing to import bindActionCreators   WHY?? /////
/////  ANS passing deleteWord(id) action directly into dispatch connects them
// const mapDispatchToProps = dispatch => {
//     return {
//         deleteWord: id => dispatch(deleteWord(id))
//     }
// }


export default WordsList;
// alerts this component that we're connected to deleteWord action through the redux store
// export default connect(mapStateToProps, mapDispatchToProps)(WordsList);
