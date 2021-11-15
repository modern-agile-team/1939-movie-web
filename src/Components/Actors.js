import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Container = styled.div`
  height: 100vh;
  justify-content: center;
`;

const StlyedSlider = styled(Slider)`
  .slick-slide div {
    outline: none;
    width: 25vw;
  }
  .slick-track div {
    display: flex;
    justify-content: center;
  }
`;

const ActorDiv = styled.div`
  text-align: center;
  height: 70vh;
`;

const Title = styled.h1`
  margin: 0;
  padding: 3rem 0;
  text-align: center;
`;
const UnDisClosed = styled.div`
  display: flex;
  align-items: center;
  border-radius: 16px;
  width: 100%;
  height: 80%;
  color: white;
  font-size: 400%;
  background-color: lightgray;
`;
export const Actors = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 5,
    arrows: false
  };

  return (
    <Container>
      <Title>등장 인물</Title>
      <StlyedSlider {...settings}>
        <ActorDiv>
          <UnDisClosed>
            <h1>?</h1>
          </UnDisClosed>
          <h1>등장인물 1</h1>
        </ActorDiv>
        <ActorDiv>
          <UnDisClosed>
            <h1>?</h1>
          </UnDisClosed>
          <h1>등장인물 2</h1>
        </ActorDiv>
        <ActorDiv>
          <UnDisClosed>
            <h1>?</h1>
          </UnDisClosed>
          <h1>등장인물 3</h1>
        </ActorDiv>
        <ActorDiv>
          <UnDisClosed>
            <h1>?</h1>
          </UnDisClosed>
          <h1>등장인물 4</h1>
        </ActorDiv>
        <ActorDiv>
          <UnDisClosed>
            <h1>?</h1>
          </UnDisClosed>
          <h1>등장인물 5</h1>
        </ActorDiv>
        <ActorDiv>
          <UnDisClosed>
            <h1>?</h1>
          </UnDisClosed>
          <h1>등장인물 6</h1>
        </ActorDiv>
      </StlyedSlider>
    </Container>
  );
};
