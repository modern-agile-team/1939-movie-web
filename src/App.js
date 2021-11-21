import { Actors } from './Components/Actors';
import { Infomation } from './Components/Infomation';
import { Main } from './Components/Main';
import { FullPage, Slide } from 'react-full-page';
import { StillCut } from './Components/StillCut';
import { Video } from './Components/Video';
import { VIDEOS } from './data/videoDatas';
import { useState, useEffect } from 'react';

function App() {
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
    <div className="App">
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
    </div>
  );
}

export default App;
