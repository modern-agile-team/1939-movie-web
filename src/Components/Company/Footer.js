import styled from 'styled-components';
import { FcCdLogo } from 'react-icons/fc';

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 30px 100px;
  border-top: 1px solid #ececec;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    cursor: pointer;
    width: 50px;
    height: 50px;
  }
  ul {
    display: flex;
    list-style: none;
    li {
      cursor: pointer;
      color: #768695;
      text-align: center;
      padding: 0 2em;
      &:nth-child(1) {
        border-left: 1px solid #ececec;
      }
      &:nth-child(2) {
        border-right: 1px solid #ececec;
        border-left: 1px solid #ececec;
      }
      &:nth-last-child(1) {
        border-right: 1px solid #ececec;
      }
    }
  }
`;

const Bottom = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  color: #768695;
  font-family: 'Noto sans';
  font-size: 80%;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Top>
        <FcCdLogo />
        <ul>
          <li>개인정보처리방침</li>
          <li>고객문의</li>
          <li>사이트맵</li>
        </ul>
      </Top>
      <Bottom>
        <span>사업자 등록번호 000 00 00000</span>
        <span>주소 서울특별시 송파구 법원로 114, A동 910호</span>
        <span>대표번호 02 0000 0000</span>
        <span>팩스번호 02 0000 0000</span>
        <span>대표이사 이의범</span>
        <span>Copyright © 1996 2017 LOTTE. All Rights reserved</span>
      </Bottom>
    </FooterContainer>
  );
};

export default Footer;
