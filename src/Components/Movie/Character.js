import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import blind from '../../data/blind.png';
import person from '../../data/person.png';

const Container = styled.div`
  height: 100vh;
  background: linear-gradient(to Bottom, #bbd1d8, #d7e0de);
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5vh;
  h1 {
    margin: 0;
    font-family: 'Noto Sans';
    font-size: 36px;
    color: #0054a1;
  }
  h3 {
    font-family: 'Noto Sans';
    font-weight: normal;
    font-size: 24px;
    color: #768695;
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
  border-right: none;
  border-left: none;
`;

const InnerDiv = styled.div`
  padding: 0 5em;
`;

const UnDisClosed = styled.div`
  display: flex;
  @keyframes fadeout {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  font-size: 400%;
  .blind {
    z-index: 9;
    position: absolute;
    transition-duration: 1s;
    &:hover {
      cursor: pointer;
      animation: fadeout 1s;
    }
  }
  .person {
    z-index: 1;
  }
`;

const Subscribe = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2em;
  h2 {
    margin: 0;
    font-family: 'Noto Sans';
    font-size: 200%;
    color: #001f3c;
  }
  h3 {
    font-family: 'Noto Sans';
    font-weight: normal;
    font-size: 120%;
    color: #768695;
  }
  p {
    font-family: 'Noto Sans';
    font-size: 100%;
    margin: 7px 0;
    color: #768695;
  }
  hr {
    width: 30px;
    height: 3px;
    background-color: #001f3c;
    color: #001f3c;
    margin: 0;
    margin-bottom: 1em;
  }
`;

const Character = () => {
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
        <h3>?????? / ?????????</h3>
      </Title>
      <StlyedSlider {...settings}>
        <ActorDiv>
          <InnerDiv>
            <UnDisClosed>
              <img
                className="person"
                alt="person"
                src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMjNfMjk2%2FMDAxNDg1MTc0MTQ1NzA3.zfKZJeFL6IcIDTqcy6zyVewZ30mhD6s0lE8DjLKQugUg.bpzQhpQ4VFjtmxZX6nskwAusXQfkJbHaJwy4gZNLR60g.JPEG.camoju%2F03_01.jpg&type=sc960_832"
              />
            </UnDisClosed>
            <Subscribe>
              <h2>???????????? ??????</h2>
              <h3>??????</h3>
              <hr />
              <p>2017??? ???89??? ???????????? ????????? ?????????</p>
              <p>2017??? ???74??? ?????? ????????? ????????? ?????????</p>
              <p> 2017??? ???74??? ?????? ????????? ????????? ?????????</p>
              <p>2017??? ???69??? ?????? ?????? ????????? ???????????? ?????????</p>
            </Subscribe>
          </InnerDiv>
          <InnerDiv>
            <UnDisClosed>
              <img
                className="person"
                alt="person"
                src="https://i.pinimg.com/564x/bf/70/a9/bf70a92ddd087da3d8a71d0ae485fed5.jpg"
              />
            </UnDisClosed>
            <Subscribe>
              <h2>????????? ?????????</h2>
              <h3>??????</h3>
              <hr />
              <p>
                2017??? ???74??? ?????? ????????? ????????? ???????????????????????? ???????????????
              </p>
              <p>2011??? ???16??? ??????????????? ????????? ???????????? ???????????????</p>
              <p>
                2007??? ???12??? ??????????????? ????????? ?????????, ????????? ????????????
                ???????????????
              </p>
            </Subscribe>
          </InnerDiv>
        </ActorDiv>
        <ActorDiv>
          <InnerDiv>
            <UnDisClosed>
              <img className="blind" alt="blind" src={blind} />
              <img className="person" alt="person" src={person} />
            </UnDisClosed>
            <Subscribe>
              <h2>? ? ?</h2>
              <h3>??????</h3>
              <hr />
            </Subscribe>
          </InnerDiv>
          <InnerDiv>
            <UnDisClosed>
              <img className="blind" alt="blind" src={blind} />
              <img className="person" alt="person" src={person} />
            </UnDisClosed>
            <Subscribe>
              <h2>? ? ?</h2>
              <h3>??????</h3>
              <hr />
            </Subscribe>
          </InnerDiv>
        </ActorDiv>
      </StlyedSlider>
    </Container>
  );
};

export default Character;
