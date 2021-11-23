import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';

const Container = styled.div`
  height: 100vh;
  justify-content: center;
  padding: 10vh 5vw;
  background: linear-gradient(to Bottom, #d7e0de, #f4f1e4);
`;

const StlyedSlider = styled(Slider)`
  .slick-slide div {
    outline: none;
  }
  .slick-track div {
    display: flex;
    justify-content: center;
  }
`;
const Title = styled.div`
  margin: 0;
  text-align: center;
  font-family: 'Noto Sans';
  h1 {
    font-size: 36px;
    margin: 0;
    margin-top: -40px;
  }
  h3 {
    font-size: 24px;
    font-weight: normal;
    color: gray;
  }
`;

const Slide = styled.div`
  transform: scale(0.6);
  transition: transform 300ms;
  opacity: 0.5;
  z-index: -1;
`;

const SlideWraper = styled.div`
  display: flex;
  justify-content: center;
`;

const VideoDiv = styled.div`
  display: flex;
  align-items: center;
  width: 40vw !important;
  height: 50vh;
  background-color: ${(props) => props.color};
  svg {
    border-radius: 16px;
    background-color: white;
    width: 50px;
    height: 50px;
    padding: 10px 20px;
    color: lightgray;
  }
`;

const TemplateImages = ({ image, imageIndex, idx, color }) => {
  return (
    <>
      {idx === imageIndex ? (
        <div key={image.id}>
          <SlideWraper>
            {image.code ? (
              image.code
            ) : (
              <VideoDiv color={color}>
                <PlayArrowRoundedIcon />
              </VideoDiv>
            )}
          </SlideWraper>
        </div>
      ) : (
        <Slide key={image.id}>
          <SlideWraper>
            {image.code ? (
              image.code
            ) : (
              <VideoDiv color={color}>
                <PlayArrowRoundedIcon />
              </VideoDiv>
            )}
          </SlideWraper>
        </Slide>
      )}
    </>
  );
};

export const Video = ({ images, slidesToShow = 3 }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    centerMode: true,
    infinite: true,
    dots: false,
    speed: 300,
    slidesToShow: slidesToShow,
    centerPadding: '0',
    swipeToSlide: true,
    focusOnSelect: true,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Container>
      <Title>
        <h1>TRAILER</h1>
        <h3>메이킹 필름</h3>
      </Title>
      <StlyedSlider {...settings}>
        {images.map((image, idx) => {
          return (
            <TemplateImages
              key={image.id}
              image={image}
              imageIndex={imageIndex}
              idx={idx}
              color={idx % 2 === 0 ? 'lightgray' : '#0054a1'}
            />
          );
        })}
      </StlyedSlider>
    </Container>
  );
};
