import React from 'react';
import styled from 'styled-components';
import background from '../../data/background.jpg';

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-size: cover;
  svg {
    border-radius: 16px;
    background-color: white;
    width: 100px;
    height: 100px;
    padding: 10px 20px;
    color: lightgray;
  }
  img {
    z-index: -1;
    width: 100vw;
    height: 100vh;
  }
`;

const Logo = styled.h1`
  font-size: 70px;
`;

export const Main = () => {
  return (
    <div>
      <Container>
        <img alt="포스터" src={background} />
      </Container>
    </div>
  );
};
