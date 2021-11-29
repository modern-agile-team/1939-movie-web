import styled from 'styled-components';

const Container = styled.div`
  @keyframes scroll {
    from {
      bottom: 50px;
    }
    to {
      bottom: 30px;
    }
  }
  position: absolute;
  bottom: 30px;
  width: 100%;
  left: 0;
  text-align: center;
  animation: scroll 2s ease-in-out 0s infinite forwards;
  span {
    color: white;
  }
`;

const ScrollAnimation = () => {
  return (
    <Container>
      <span>scroll</span>
    </Container>
  );
};

export default ScrollAnimation;
