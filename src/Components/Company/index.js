import styled from 'styled-components';
import TopBar from './TopBar';
import background from '../../data/background.jpg';
import { useState } from 'react';
import Greeting from './Greeting';
import BasicInfo from './BasicInfo';

const Wrap = styled.div`
  width: 100%;
`;

const ImageWrap = styled.div`
  margin: 50px 100px;
  img {
    margin-top: 50px;
    width: 100%;
    height: 100%;
  }
`;

const Contents = ({ changeMenu }) => {
  switch (changeMenu) {
    case 0:
      return (
        <ImageWrap>
          <img src={background} alt="배경" />
        </ImageWrap>
      );
    case 1:
      return <Greeting />;
    case 2:
      return <BasicInfo />;
    default:
      return <ImageWrap />;
  }
};

const Company = () => {
  const [changeMenu, setChangeMenu] = useState(0);
  return (
    <Wrap>
      <TopBar setChangeMenu={setChangeMenu} />
      <Contents changeMenu={changeMenu} />
    </Wrap>
  );
};

export default Company;
