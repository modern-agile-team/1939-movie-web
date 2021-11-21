import React from 'react';
import styled from 'styled-components';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-size: cover;
  background-color: lightgray;
  svg {
    border-radius: 16px;
    background-color: white;
    width: 100px;
    height: 100px;
    padding: 10px 20px;
    color: lightgray;
  }
`;

const Logo = styled.h1`
  font-size: 70px;
`;

export const Main = () => {
  return (
    <div>
      <Container>
        <PlayArrowRoundedIcon />
        <Logo>19인 너 39에 난</Logo>
      </Container>
    </div>
  );
};
