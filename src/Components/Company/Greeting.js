import styled from 'styled-components';
import { CgShapeCircle } from 'react-icons/cg';

const Container = styled.div`
  border: 1px solid #aaaa;
  width: 70%;
  height: 28vh;
  margin: 40px auto;
  padding: 0 6vw;
  align-items: center;
`;

const Title = styled.h2`
  color: #0054a1;
  svg {
    transform: translateY(18%);
  }
`;

const Greeting = () => {
  return (
    <Container>
      <Title>
        <CgShapeCircle size={28} /> 인사말
      </Title>
    </Container>
  );
};

export default Greeting;
