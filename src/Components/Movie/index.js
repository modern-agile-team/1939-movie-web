import { FullPage, Slide } from 'react-full-page';
import { VIDEOS } from '../../data/videoDatas';
import { useState, useEffect } from 'react';
import { Main } from './Main';
import { Infomation } from './Infomation';
import { Actors } from './Actors';
import { Video } from './Video';
import { StillCut } from './StillCut';
import styled from 'styled-components';

const Wrap = styled.div`
  .full-page-controls {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1000;
    button {
      margin: 1.5em 4em;
      border-radius: 50%;
      border: none;
      padding: 6px 10px;
      background: white;
      :hover {
        cursor: pointer;
      }
      :nth-child(1) {
        display: none;
      }
      :nth-last-child(1) {
        display: none;
      }
    }
  }
`;

const Movie = () => {
  const [scrollMode, setScrollMode] = useState('full-page');

  const scroll = () => {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      if (scrollY > 3015) {
        setScrollMode('normal');
      } else setScrollMode('full-page');
    });
  };

  useEffect(() => {
    scroll();
  }, []);

  return (
    <Wrap>
      <FullPage controls duration={500} scrollMode={scrollMode}>
        <Slide>
          <Main />
        </Slide>
        <Slide>
          <Infomation />
        </Slide>
        <Slide>
          <Actors />
        </Slide>
        <Slide>
          <Video images={VIDEOS} />
        </Slide>
        <Slide>
          <StillCut />
        </Slide>
      </FullPage>
    </Wrap>
  );
};

export default Movie;
