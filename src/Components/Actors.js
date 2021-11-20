import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import blind from '../data/blind.png';

const Container = styled.div`
  height: 100vh;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  h1 {
    margin: 0;
    font-family: 'Noto Sans';
    font-size: 36px;
  }
  h3 {
    font-family: 'Noto Sans';
    font-weight: normal;
    font-size: 24px;
  }
`;

const StlyedSlider = styled(Slider)`
  .slick-slide div {
    width: 100%;
  }
  .slick-track div {
    display: flex;
    justify-content: center;
  }
`;

const ActorDiv = styled.div`
  display: flex !important;
  justify-content: center !important;
  height: 70vh;
  border: 1px solid lightgray;
  border-right: none;
  border-left: none;
`;

const InnerDiv = styled.div`
  margin: 30px 0;
`;

const UnDisClosed = styled.div`
  @keyframes fadeout {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  display: flex;
  align-items: center;
  font-size: 400%;
  img {
    z-index: 9;
    position: absolute;
    transition-duration: 1s;
    background-color: white;
    width: 25%;
    &:hover {
      cursor: pointer;
      animation: fadeout 1s;
    }
  }
  svg {
    border: 1px solid lightgray;
    width: 80%;
    height: 100%;
    z-index: 1;
  }
`;

const Subscribe = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  width: 50% !important;
  height: 100%;
  margin-left: -30px;
  h2 {
    margin: 0;
    font-family: 'Noto Sans';
    font-size: 36px;
  }
  h3 {
    font-family: 'Noto Sans';
    font-weight: normal;
    font-size: 24px;
  }
  p {
    font-family: 'Noto Sans';
    font-size: 18px;
    margin: 0;
  }
  hr {
    width: 30px;
    height: 3px;
    background-color: black;
    color: black;
    margin: 0;
    margin-bottom: 1em;
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
      <Title>
        <h1>CHARACTER</h1>
        <h3>감독 / 출연진</h3>
      </Title>
      <StlyedSlider {...settings}>
        <ActorDiv>
          <InnerDiv>
            <UnDisClosed>
              <img alt="By Made by Made Premium" src={blind} />
              <PersonOutlinedIcon />
            </UnDisClosed>
            <Subscribe>
              <h2>? ? ?</h2>
              <h3>감독</h3>
              <hr />
              <p>설명을 적는 칸입니다.</p>
              <p>설명을 적는 칸입니다.</p>
              <p>설명을 적는 칸입니다.</p>
              <p>설명을 적는 칸입니다.</p>
            </Subscribe>
          </InnerDiv>
          <InnerDiv>
            <UnDisClosed>
              <img alt="By Made by Made Premium" src={blind} />
              <PersonOutlinedIcon />
            </UnDisClosed>
            <Subscribe>
              <h2>? ? ?</h2>
              <h3>감독</h3>
              <hr />
              <p>설명을 적는 칸입니다.</p>
              <p>설명을 적는 칸입니다.</p>
              <p>설명을 적는 칸입니다.</p>
              <p>설명을 적는 칸입니다.</p>
            </Subscribe>
          </InnerDiv>
        </ActorDiv>
      </StlyedSlider>
    </Container>
  );
};
