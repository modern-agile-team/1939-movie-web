import React from 'react';
import styled from 'styled-components';

const Poster = styled.h1`
  width: 25vw;
  height: 100%;
  text-align: center;
  background-color: lightgray;
  border-radius: 6px;
`;

const Sinop = styled.div`
  width: 60vw;
  height: 100%;
  text-align: center;
  background-color: lightgray;
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 100px;
  height: 80vh;
`;

export const Infomation = () => {
  return (
    <FlexDiv>
      <Poster>포스터</Poster>
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
