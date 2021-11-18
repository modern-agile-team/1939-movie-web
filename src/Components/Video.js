import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Container = styled.div`
  height: 100vh;
  justify-content: center;
  padding: 0 3em;
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
const Title = styled.h1`
  margin: 0;
  padding: 3rem 0;
  text-align: center;
`;

const Slide = styled.div`
  transform: scale(0.7);
  transition: transform 300ms;
  opacity: 0.5;
  z-index: -1;
`;

const SlideWraper = styled.div`
  display: flex;
  justify-content: center;
`;

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

  const templateImages = images.map((image, idx) => {
    return (
      <>
        {idx === imageIndex ? (
          <div key={image.id}>
            <div className="slideWrapper">
              {image.code ? (
                image.code
              ) : (
                <img src={image.src} alt={image.alt} />
              )}
            </div>
          </div>
        ) : (
          <Slide key={image.id}>
            <SlideWraper>
              {image.code ? (
                image.code
              ) : (
                <img src={image.src} alt={image.alt} />
              )}
            </SlideWraper>
          </Slide>
        )}
      </>
    );
  });

  return (
    <Container>
      <Title>메이킹 필름</Title>
      <StlyedSlider {...settings}>{templateImages}</StlyedSlider>
    </Container>
  );
};
