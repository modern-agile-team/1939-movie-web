import styled from 'styled-components';
import TopBar from './TopBar';
import background from '../../data/background.jpg';

const Wrap = styled.div`
  width: 100%;
  img {
    top: 15%;
    left: 50%;
    transform: translate(-50%);
    width: 80%;
    height: 80%;
    z-index: -1;
    position: fixed;
  }
`;

const Company = () => {
  return (
    <Wrap>
      <img src={background} alt="배경" />
      <TopBar />
    </Wrap>
  );
};

export default Company;
