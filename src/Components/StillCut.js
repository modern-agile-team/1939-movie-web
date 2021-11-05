import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  justify-content: center;
  background: linear-gradient(rgb(233, 129, 59) 75%, rgb(77, 54, 90));
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
export const StillCut = () => {
  return (
    <div>
      <Container>
        <Title>스틸컷</Title>
        <FlexDiv>
          <Actor>이미지</Actor>
          <Actor>이미지</Actor>
        </FlexDiv>
      </Container>
    </div>
  );
};
