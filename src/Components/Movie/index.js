import { FullPage, Slide } from 'react-full-page';
import { VIDEOS } from '../../data/videoDatas';
import { useState, useEffect, useRef } from 'react';
import { Main } from './Main';
import { Infomation } from './Infomation';
import { Video } from './Video';
import { StillCut } from './StillCut';
import styled from 'styled-components';
import Character from './Character';

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
      transition: 1s;
    }
    button:after {
      right: 30px;
      position: absolute;
      content: ${(props) => props.content};
    }
  }
`;

const Movie = () => {
  const [scrollMode, setScrollMode] = useState('full-page');

  const scroll = () => {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const clientHeight = document.documentElement.clientHeight;
      if (scrollY >= clientHeight * 4) setScrollMode('normal');
      if (scrollY < clientHeight * 4) setScrollMode('full-page');
    });
  };

  const ref = useRef();

  useEffect(() => {
    scroll();
  }, []);

  return (
    <Wrap ref={ref}>
      <FullPage controls duration={1000} scrollMode={scrollMode}>
        <Slide>
          <Main />
        </Slide>
        <Slide>
          <Infomation />
        </Slide>
        <Slide>
          <Character />
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
