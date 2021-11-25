import React from 'react';
import styled from 'styled-components';

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to Bottom, #93c8da, #bbd1d8);
  height: 100vh;
`;

const Poster = styled.div`
  width: 30vw;
  height: 90%;
  text-align: center;
  background-color: black;
  margin-right: 30px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Sinop = styled.div`
  width: 55vw;
  height: 90%;
  text-align: center;
  h1 {
    margin-top: 130px;
    font-family: 'Noto Sans';
    font-weight: bold;
    font-size: 36px;
    color: #0054a1;
  }
  h3 {
    font-family: 'Noto Sans';
    font-weight: normal;
    font-size: 24px;
    color: #768695;
  }
  article {
    font-family: 'Noto Sans';
    font-size: 18px;
    margin-top: 3em;
    padding: 0 100px;
  }
`;

export const Infomation = () => {
  return (
    <FlexDiv>
      <Poster>
        <img
          alt="포스터"
          src="https://i.pinimg.com/564x/3b/51/f6/3b51f6778b2bacb266ca8ce21bfac809.jpg"
        />
      </Poster>
      <Sinop>
        <h1>SYNOPSIS</h1>
        <h3>줄거리</h3>
        <article>
          19인 넌 39인 난에서 선보이는 작품은 독특한 이야기, 뛰어난 촬영 기술,
          독보적인 편집 기술로 이미 정평이 나 있습니다. 수많은 상을 받은 유명
          배우와 뛰어난 스태프가 뭉쳤습니다. 이 작품만큼은 기대하셔도 좋습니다.
          독점 예고편을 비롯한 관련 정보를 정리하였습니다. 19인 넌 39인 난에
          대해 궁금하신 점은 홈페이지를 참고해주세요.
        </article>
      </Sinop>
    </FlexDiv>
  );
};
