import styled from 'styled-components';

const Container = styled.header`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  h1 {
    color: #0054a1;
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
