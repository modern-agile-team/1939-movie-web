import { FullPage, Slide } from 'react-full-page';
import { VIDEOS } from '../../data/videoDatas';
import { useState, useEffect } from 'react';
import { Main } from './Main';
import { Infomation } from './Infomation';
import { Actors } from './Actors';
import { Video } from './Video';
import { StillCut } from './StillCut';

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
    <FullPage scrollMode={scrollMode}>
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
  );
};

export default Movie;
