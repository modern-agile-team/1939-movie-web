import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  justify-content: center;
  background: linear-gradient(rgb(255, 186, 130), rgb(233, 129, 59));
`;

const Title = styled.h1`
  margin: 0;
  padding-top: 3rem;
  text-align: center;
`;

const Actor = styled.h1`
  border: 1px solid;
  width: 25vw;
  height: 65vh;
  text-align: center;
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 5vh;
`;

export const Actors = () => {
  return (
    <div>
      <Container>
        <Title>배우 소개란</Title>
        <FlexDiv>
          <Actor>배우 1</Actor>
          <Actor>배우 2</Actor>
        </FlexDiv>
      </Container>
    </div>
  );
};
