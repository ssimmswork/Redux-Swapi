import React from "react";
import { connect } from "react-redux";
import {getCharacters} from '../actions';
import { CharacterList } from "../components";
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    getCharacters();
  }

  render() {
    if (this.props.fetching) {
      return<h2>Is Loading</h2>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const  mapStateToProps = state => ({
  
});
export default connect(
  mapStateToProps/* mapStateToProps replaces null here */,
  {getCharacters}
)(CharacterListView);
