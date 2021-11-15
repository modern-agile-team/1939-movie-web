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
    width: 70vw;
  }
  .slick-track div {
    display: flex;
    justify-content: center;
  }
`;

const VideoDiv = styled.div`
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
  color: white;
  font-size: 400%;
  background-color: lightgray;
  margin-bottom: 1em;
`;
export const Video = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <Container>
      <Title>메이킹 필름</Title>
      <StlyedSlider {...settings}>
        <VideoDiv>
          <UnDisClosed>
            <h1>?</h1>
          </UnDisClosed>
          <h1>메이킹 필름 1</h1>
        </VideoDiv>
        <VideoDiv>
          <UnDisClosed>
            <h1>?</h1>
          </UnDisClosed>
          <h1>메이킹 필름 2</h1>
        </VideoDiv>
        <VideoDiv>
          <UnDisClosed>
            <h1>?</h1>
          </UnDisClosed>
          <h1>메이킹 필름 3</h1>
        </VideoDiv>
        <VideoDiv>
          <UnDisClosed>
            <h1>?</h1>
          </UnDisClosed>
          <h1>메이킹 필름 4</h1>
        </VideoDiv>
        <VideoDiv>
          <UnDisClosed>
            <h1>?</h1>
          </UnDisClosed>
          <h1>메이킹 필름 5</h1>
        </VideoDiv>
        <VideoDiv>
          <UnDisClosed>
            <h1>?</h1>
          </UnDisClosed>
          <h1>메이킹 필름 6</h1>
        </VideoDiv>
      </StlyedSlider>
    </Container>
  );
};
