import styled from 'styled-components';
import { CgShapeCircle } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const Container = styled.div`
  border: 1px solid #aaaa;
  width: 70%;
  height: 35vh;
  margin: 50px auto;
  padding: 0 6vw;
  align-items: center;
  div {
    dl {
      margin: 0;
      width: 100%;
      dt {
        font-weight: bold;
        color: #768695;
        float: left;
        margin-right: 15px;
      }
      dd {
        margin: 0;
        margin-bottom: 20px;
        color: #768695;
      }
    }
  }
  h2 {
    color: #0054a1;
    margin-bottom: 1.2em;
    svg {
      transform: translateY(18%);
    }
  }
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 10px;
  height: 70%;
`;

const BasicInfo = () => {
  return (
    <Container>
      <div>
        <h2>
          <CgShapeCircle size={28} /> 기본 정보
        </h2>
        <Info>
          <dl>
            <dt>회사명</dt>
            <dd>에스지앤지홀딩스</dd>
            <dt>대표자명</dt>
            <dd>박재홍/황문석</dd>
            <dt>기업주소</dt>
            <dd>서울 송파구 법원로 114 A동 910호</dd>
          </dl>
          <dl>
            <dt>업종</dt>
            <dd>경영 컨설팅업</dd>
            <dt>설립일</dt>
            <dd>2020년 3월 13일</dd>
            <dt>홈페이지</dt>
            <dd> www.isgngh.com</dd>
          </dl>
        </Info>
        <Link to="/movie">
          <a href="/movie">영화 페이지</a>
        </Link>
      </div>
    </Container>
  );
};
export default BasicInfo;
