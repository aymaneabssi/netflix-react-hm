import React, { Component } from 'react';
import styled from 'styled-components';
//components
import Proposed from './Proposed';

class Home extends Component {
  state = {
    proposed: [],
  };
  componentDidUpdate = async () => {
    try {
      let fetched = await fetch(
        `http://www.omdbapi.com/?apikey=cf9b9d73&s=${this.props.searchBarInput}`
      );
      let response = await fetched.json();
      let data = await response.Search;
      this.setState({ proposed: data });
    } catch (err) {
      console.error(err);
    }
  };
  render() {
    return (
      <Container>
        {this.state.proposed === undefined ||
        this.state.proposed.length === 0 ||
        this.state.proposed === null ? (
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
