import styled from "styled-components";
import overthewindow from '../assets/images/overthewindow.png';

export default function Home() {
    return (
        <MainWrapper>
          <Image src={overthewindow} alt="Over the Window" />
        </MainWrapper>
      );
    

  }
  
  const MainWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 120px); // 헤더 높이 보정
  box-sizing: border-box;
  padding-top: 100px;
`;

const Image = styled.img`
  max-width: 90%;
  width: 100%;
  max-height: 80vh;
  height: auto;
  object-fit: contain;
`;