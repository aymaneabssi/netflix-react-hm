import React, { Component } from 'react';
import styled from 'styled-components';
//components
import Proposed from './Proposed';

class Home extends Component {
  state = {
    proposed: [],
  };

  render() {
    const SearchMovie = async () => {
      try {
        let fetched = await fetch(
          `http://www.omdbapi.com/?apikey=cf9b9d73&s=${this.props.searchBarInput}`
        );
        let response = await fetched.json();
        let data = await response.Search;
        console.log(data);
        this.setState({ proposed: data });
      } catch (err) {
        console.error(err);
      }
    };
    (function () {
      this.props.SearchFunc(SearchMovie);
    })();
    return (
      <Container>
        {this.state.proposed.length === 0 ? (
          <></>
        ) : (
          <Proposed data={this.state.proposed} />
        )}
      </Container>
    );
  }
}

export default Home;
const Container = styled.div``;
