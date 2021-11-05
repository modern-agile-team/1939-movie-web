import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  /* background: linear-gradient(aliceblue, rgb(252, 228, 248)); */
  background-image: url('https://cdn.pixabay.com/photo/2017/01/24/10/58/sand-2005066_1280.jpg');
  background-size: cover;
  opacity: 0.75;
`;

const Logo = styled.h1`
  font-size: 150px;
`;

export const Main = () => {
  return (
    <div>
      <Container>
        <Logo>19인 너 39에 난</Logo>
      </Container>
    </div>
  );
};
