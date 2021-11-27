import styled from 'styled-components';
import Header from './Header';
import BasicInfo from './BasicInfo';
import Greeting from './Greeting';
import TopBar from './TopBar';
import background from '../../data/background.jpg';

const Wrap = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: 100%;
    z-index: -1;
    position: fixed;
  }
`;

const Company = () => {
  return (
    <Wrap>
      <img src={background} alt="배경" />
      <Header />
      <TopBar />
      <BasicInfo />
      <Greeting />
    </Wrap>
  );
};

export default Company;
