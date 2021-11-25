import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Btn = styled.button`
  margin: 2em;
  padding: 2rem 10rem;
  cursor: pointer;
  border-radius: 15px;
  border: 0.5px solid #eeee;
  font-size: 19px;
  :hover {
    filter: brightness(90%);
  }
`;

const Home = () => {
  return (
    <Wrap>
      <Container>
        <Link to="/company">
          <Btn>회사 정보</Btn>
        </Link>
        <Link to="/movie">
          <Btn>영화 소개</Btn>
        </Link>
      </Container>
    </Wrap>
  );
};

export default Home;
