import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 0 2.5%;
  width: 95%;
  background-color: black;
  color: white;
  transition-duration: 0.3s;
  &:hover {
    color: gray;
    /* background-color: white; */
  }
  ul {
    padding: 0;
    margin: 0;
    display: flex;
    list-style: none;
    a {
      text-decoration: none;
    }
  }
  li {
    padding: calc(1.3em - 2px) 3em;
    cursor: pointer;
    font-size: 120%;
    font-weight: bold;
    border-bottom: 2px solid black;
    &:hover {
      color: white;
      border-bottom: 2px solid #eb0086;
    }
  }
  div {
    margin-right: 35em;
    padding: 1.5em 0;
  }
`;

const TopBar = () => {
  return (
    <Container>
      <div>(주) 에스지앤지홀딩스</div>
      <ul>
        <li>소개</li>
        <li>조직도</li>
        <Link to="/movie">
          <li>영화</li>
        </Link>
        <li>???</li>
      </ul>
    </Container>
  );
};

export default TopBar;
