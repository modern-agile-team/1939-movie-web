import styled from 'styled-components';
import Footer from './Footer';

const Container = styled.div`
  margin-top: 100px;
  align-items: center;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  background-color: #768796;
  width: 80%;
  h1 {
    margin: 100px 0;
  }
  color: #ffffff;
`;

const Organ = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0;
  h2 {
    color: #0054a1;
    padding-bottom: 20px;
    border-bottom: 3px solid #0054a1;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    background-color: #0054a1;
    width: 200px;
    h2 {
      font-weight: bold;
      color: white;
      padding: 0;
    }
    &:nth-of-type(2) {
      opacity: 0.85;
    }
    &:nth-of-type(3) {
      opacity: 0.7;
    }
  }
  hr {
    width: 3px;
    background-color: #768695;
    height: 20px;
    margin: 0;
  }
`;

const Organization = () => {
  return (
    <Container>
      <Title>
        <h1>조직도</h1>
      </Title>
      <Organ>
        <h2>조직도</h2>
        <div>
          <h2>대표이사</h2>
        </div>
        <hr />
        <div>
          <h2>부사장</h2>
        </div>
        <hr />
        <div>
          <h2>상무 이사</h2>
        </div>
      </Organ>
      <Footer />
    </Container>
  );
};
export default Organization;
