import { Actors } from './Components/Actors';
import { Infomation } from './Components/Infomation';
import { Main } from './Components/Main';
import { FullPage, Slide } from 'react-full-page';
import { StillCut } from './Components/StillCut';

function App() {
  return (
    <div className="App">
      <FullPage>
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
          <StillCut />
        </Slide>
      </FullPage>
    </div>
  );
}

export default App;
