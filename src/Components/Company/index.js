import styled from 'styled-components';
import Header from './Header';
import BasicInfo from './BasicInfo';
import Greeting from './Greeting';

const Wrap = styled.div`
  width: 100%;
`;

const Company = () => {
  return (
    <Wrap>
      <Header />
      <BasicInfo />
      <Greeting />
    </Wrap>
  );
};

export default Company;
