import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  top: 0;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 2.5%;
  width: 95%;
  background-color: black;
  color: white;
  &:hover {
    ul {
      color: gray;
      a {
        color: gray;
      }
    }
  }
  ul {
    transition-duration: 0.3s;
    width: 70%;
    padding: 0;
    margin: 0;
    display: flex;
    list-style: none;
    a {
      color: white;
      text-decoration: none;
    }
  }
  li {
    border-left: 1px solid white;
    border-right: 1px solid white;
    padding: 1vh 3vw;
    cursor: pointer;
    font-size: 18px;
    border-bottom: 2px solid black;
    font-family: 'Noto sans';
    &:hover {
      color: white;
    }
  }
  div {
    cursor: pointer;
    padding: 1.5em 0;
  }
`;

const TopBar = ({ setChangeMenu }) => {
  return (
    <Container>
      <div onClick={() => setChangeMenu(0)}>(주) 에스지앤지홀딩스</div>
      <ul>
        <li onClick={() => setChangeMenu(1)}>회사 소개</li>
        <li onClick={() => setChangeMenu(2)}>조직도</li>
        <Link to="/movie">
          <li>영화 소개</li>
        </Link>
        <li>???</li>
        <li>???</li>
      </ul>
    </Container>
  );
};

export default TopBar;
