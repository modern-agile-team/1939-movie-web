import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 2.5%;
  width: 95%;
  color: white;
  transition-duration: 0.3s;
  &:hover {
    color: gray;
    background-color: white;
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
    padding: 1.5em 3em;
    cursor: pointer;
    font-size: 120%;
    font-weight: bold;
    &:hover {
      color: black;
      border-bottom: 2px solid #eb0086;
    }
  }
  div {
    padding: 1.5em 0;
  }
`;

const Menu = styled.div`
  width: 2em;
  svg {
    cursor: pointer;
    width: 100%;
    height: 100%;
  }
`;

const TopBar = () => {
  return (
    <Container>
      <div>로고</div>
      <ul>
        <li>소개</li>
        <li>조직도</li>
        <Link to="/movie">
          <li>영화</li>
        </Link>
        <li>???</li>
      </ul>
      <Menu>
        <BiMenu />
      </Menu>
    </Container>
  );
};

export default TopBar;
