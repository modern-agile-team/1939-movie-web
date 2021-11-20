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
    width: 100vw;
  }
  .slick-track div {
    display: flex;
    justify-content: center;
  }
`;
const Title = styled.h1`
  margin: 0;
  padding-top: 1rem;
  text-align: center;
`;

const SubTitle = styled.h3`
  text-align: center;
  margin-bottom: 0;
`;

const ActorDiv = styled.div`
  display: flex !important;
  justify-content: space-around !important;
  margin: 2em;
  padding: 0 5em;
  align-items: center;
  border: 1px solid lightgray;
  height: 70vh;
`;

const UnDisClosed = styled.div`
  border-radius: 16px;
  color: white;
  width: 35% !important;
  height: 80%;
  font-size: 400%;
  margin: 0;
  background-color: lightgray;
`;

const Subscribe = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  width: 50% !important;
  padding: 5em 0;
  h2 {
    margin: 0;
  }
  h3 {
    font-weight: normal;
    padding-bottom: 1em;
    border-bottom: 3px solid;
    width: 10%;
  }
  p {
    margin: 0;
  }
`;

export const Actors = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <Container>
      <Title>CHARACTER</Title>
      <SubTitle>감독 / 출연진 </SubTitle>
      <StlyedSlider {...settings}>
        <ActorDiv>
          <UnDisClosed>?</UnDisClosed>
          <Subscribe>
            <h2>정두홍</h2>
            <h3>감독</h3>
            <p>감독 설명을 적는 칸입니다.</p>
            <p>감독 설명을 적는 칸입니다.</p>
            <p>감독 설명을 적는 칸입니다.</p>
            <p>감독 설명을 적는 칸입니다.</p>
          </Subscribe>
        </ActorDiv>
        <ActorDiv>
          <UnDisClosed>?</UnDisClosed>
          <Subscribe>
            <h2>정두홍</h2>
            <h3>감독</h3>
            <p>감독 설명을 적는 칸입니다.</p>
            <p>감독 설명을 적는 칸입니다.</p>
            <p>감독 설명을 적는 칸입니다.</p>
            <p>감독 설명을 적는 칸입니다.</p>
          </Subscribe>
        </ActorDiv>
        <ActorDiv>
          <UnDisClosed>?</UnDisClosed>
          <Subscribe>
            <h2>정두홍</h2>
            <h3>감독</h3>
            <p>감독 설명을 적는 칸입니다.</p>
            <p>감독 설명을 적는 칸입니다.</p>
            <p>감독 설명을 적는 칸입니다.</p>
            <p>감독 설명을 적는 칸입니다.</p>
          </Subscribe>
        </ActorDiv>
        <ActorDiv>
          <UnDisClosed>?</UnDisClosed>
          <Subscribe>
            <h2>정두홍</h2>
            <h3>감독</h3>
            <p>감독 설명을 적는 칸입니다.</p>
            <p>감독 설명을 적는 칸입니다.</p>
            <p>감독 설명을 적는 칸입니다.</p>
            <p>감독 설명을 적는 칸입니다.</p>
          </Subscribe>
        </ActorDiv>
        <ActorDiv>
          <UnDisClosed>?</UnDisClosed>
          <Subscribe>
            <h2>정두홍</h2>
            <h3>감독</h3>
            <p>감독 설명을 적는 칸입니다.</p>
            <p>감독 설명을 적는 칸입니다.</p>
            <p>감독 설명을 적는 칸입니다.</p>
            <p>감독 설명을 적는 칸입니다.</p>
          </Subscribe>
        </ActorDiv>
        <ActorDiv>
          <UnDisClosed>?</UnDisClosed>
          <Subscribe>
            <h2>정두홍</h2>
            <h3>감독</h3>
            <p>감독 설명을 적는 칸입니다.</p>
            <p>감독 설명을 적는 칸입니다.</p>
            <p>감독 설명을 적는 칸입니다.</p>
            <p>감독 설명을 적는 칸입니다.</p>
          </Subscribe>
        </ActorDiv>
      </StlyedSlider>
    </Container>
  );
};
