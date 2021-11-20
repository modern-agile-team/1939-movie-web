import React from 'react';
import styled from 'styled-components';
import PlayCircleFilledRoundedIcon from '@mui/icons-material/PlayCircleFilledRounded';

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-size: cover;
  background-color: gray;
  svg {
    width: 150px;
    height: 150px;
  }
`;

const Logo = styled.h1`
  font-size: 70px;
`;

export const Main = () => {
  return (
    <div>
      <Container>
        <PlayCircleFilledRoundedIcon />
        <Logo>19인 너 39에 난</Logo>
      </Container>
    </div>
  );
};
