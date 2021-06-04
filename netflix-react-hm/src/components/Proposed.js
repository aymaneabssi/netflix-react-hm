import React from 'react';
import styled from 'styled-components';

const Proposed = ({ data }) => {
  return (
    <Container>
      <ProposedItems>Is this wat are you looking for ?</ProposedItems>
      <Row>
        {data.map((item) => (
          <Col>
            <img src={item.Poster} alt={item.Title} />
            <Title>{item.Title.slice(0, 24)}...</Title>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Proposed;
const Container = styled.div`
  width: 80%;
  margin: 50px auto;
  display
`;
const ProposedItems = styled.h1`
  color: red;
`;
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Col = styled.div`
  height: 150px;
  width: 200px;
  margin: 10px;
  background: white;
  cursor: pointer;
  img {
    width: 100%;
    height: 80%;
    object-fit: cover;
  }
`;
const Title = styled.div`
  color: black;
  font-weight: 600;
`;
