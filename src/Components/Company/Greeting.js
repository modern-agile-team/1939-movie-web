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

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0;
  h2 {
    color: #0054a1;
    padding-bottom: 20px;
    border-bottom: 3px solid #0054a1;
  }
  describe {
    font-family: 'Noto sans';
    color: #768695;
    width: 80%;
  }
`;

const Summary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0;
  h2 {
    color: #0054a1;
    padding-bottom: 20px;
    border-bottom: 3px solid #0054a1;
  }
  table {
    width: 80%;
    border-top: 3px solid #768695;
    border-bottom: 3px solid #768695;
    tr {
      border: 1px solid #768695;
    }
    td {
      padding: 1em 0;
      font-family: 'Noto sans';
      max-width: 120px;
      &:nth-of-type(2n - 1) {
        text-align: center;
        background-color: #f1f3f5;
      }
      &:nth-of-type(2n) {
        color: #768695;
        padding-left: 2em;
      }
    }
  }
`;

const Vision = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0;
  h2 {
    color: #0054a1;
    padding-bottom: 20px;
    border-bottom: 3px solid #0054a1;
  }
  table {
    width: 80%;
    height: 1000px;
  }
  tr {
    margin: 50px 0;
  }
  td {
    text-align: center;
    div {
      height: 90%;
      width: 100%;
      background-color: #f1f3f5;
    }
  }
`;

const Ideology = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0;
  h2 {
    color: #0054a1;
    padding-bottom: 20px;
    border-bottom: 3px solid #0054a1;
  }
  table {
    width: 80%;
    height: 1000px;
  }
  tr {
    margin: 50px 0;
  }
  td {
    text-align: center;
    div {
      height: 90%;
      width: 100%;
      background-color: #f1f3f5;
    }
  }
`;

const Greeting = () => {
  return (
    <Container>
      <Title>
        <h1>회사 소개</h1>
      </Title>
      <Description>
        <h2>인사말</h2>
        <describe>
          안녕하십니까? 에스지앤지 홀딩스 OOO입니다. <br />
          <br />
          에스지앤지 홀딩스 홈페이지를 찾아주신 여러분을 진심으로 환영합니다.
          <br />
          <br />
          에스지앤지 홀딩스는 0000년 OOO으로 사업을 시작한 이래 OO, OO, OO, OO,
          OO 등 다양한 분야로 사업을 다각화하며, 세계 시장을 무대로 하는 ‘Total
          Solution Provider’로 성장해 왔습니다.
          <br />
          <br /> ‘고객에게 최상의 가치를 제공하는 것’은 에스지앤지 홀딩스 임직원
          모두의 공통된 업무 목표이며, 에스지앤지 홀딩스가 갖는 경쟁력의
          핵심입니다.
          <br />
          <br /> 고객 가치 극대화를 최우선 목표로 하여 급변하는 시장 환경에 따라
          수시로 변화하는 고객의 Needs를 소중히 경청하며, 기대하시는 수준 이상의
          서비스를 제공하기 위해 끊임없는 노력을 기울이고 있습니다.
          <br />
          <br /> 지속적인 혁신을 통해, 사업 역량을 강화, 확장함으로써, 모든
          고객에게 보다 나은 가치를 제공하기 위해 전사적 역량을 집중하겠습니다.
          <br />
          <br />
          에스지앤지 홀딩스는 기업의 사회적 책무를 충실히 이행하며, 우리 사회
          전반의 발전에 기여하는 ‘큰 숲’이 될 것입니다.
          <br />
          <br />
          에스지앤지 홀딩스를 응원해주시는 주주와 고객, 협력사, 기타 모든
          이해관계자들에게 감사드립니다. <br />
          <br />
          보내주신 기대와 성원에 부응하여, 모든 면에서 모범적인 기업으로 성장할
          수 있도록 항상 노력하겠습니다.
          <br />
          <br /> 감사합니다.
        </describe>
      </Description>
      <Summary>
        <h2>회사 개요</h2>
        <table>
          <tr>
            <td>회사명</td>
            <td>에스지앤지 홀딩스</td>
            <td>업종</td>
            <td>경영 컨설팅업</td>
          </tr>
          <tr>
            <td>대표자</td>
            <td>박재홍/ 황문석</td>
            <td>설립일</td>
            <td>2020년 3월 13일</td>
          </tr>
          <tr>
            <td>기업주소</td>
            <td>서울특별시 송파구 법원로 114, A동 910호</td>
            <td>홈페이지</td>
            <td>www.isgngh.com</td>
          </tr>
        </table>
      </Summary>
      <Vision>
        <h2>비전</h2>
        <table>
          <tr>
            <td>
              <div>사진</div>
            </td>
            <td>
              <h1>비전 1</h1>
            </td>
          </tr>
          <tr>
            <td>
              <h1>비전 2</h1>
            </td>
            <td>
              <div>사진</div>
            </td>
          </tr>
        </table>
      </Vision>
      <Ideology>
        <h2>경영 이념</h2>
        <table>
          <tr>
            <td>
              <div>사진</div>
            </td>
            <td>
              <h1>경영 이념 1</h1>
            </td>
          </tr>
          <tr>
            <td>
              <h1>경영 이념 2</h1>
            </td>
            <td>
              <div>사진</div>
            </td>
          </tr>
        </table>
      </Ideology>
      <Footer />
    </Container>
  );
};

export default Greeting;
