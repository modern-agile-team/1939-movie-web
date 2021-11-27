import styled from 'styled-components';

const Container = styled.header`
  display: flex;
  justify-content: center;
  h1 {
    color: white;
  }
`;

const Header = () => {
  return (
    <Container>
      <h1>(주) 에스지앤지홀딩스</h1>
    </Container>
  );
};

export default Header;
