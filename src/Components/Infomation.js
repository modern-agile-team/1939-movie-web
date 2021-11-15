import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  justify-content: center;
`;

const Title = styled.h1`
  margin: 0;
  padding-top: 2rem;
  text-align: center;
`;

const Poster = styled.h1`
  border: 1px solid;
  width: 25vw;
  height: 60vh;
  text-align: center;
`;

const Sinop = styled.h1`
  border: 1px solid;
  width: 50vw;
  height: 50vh;
  text-align: center;
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 4em;
`;

export const Infomation = () => {
  return (
    <div>
      <Container>
        <Title>19인 너 39에 난</Title>
        <FlexDiv>
          <Poster>포스터 위치</Poster>
          <Sinop>시놉시스</Sinop>
        </FlexDiv>
      </Container>
    </div>
  );
};
