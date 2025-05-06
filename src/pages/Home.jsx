import styled from 'styled-components';
import overthewindow from '../assets/images/overthewindow.png';

export default function Home() {
  return (
    <MainWrapper>
      <ImageWrapper>
        <StyledImage src={overthewindow} alt="Over the Window" />
        <Dim />
        <ImageInfo>
          &lt;초여름의 움직이는 창 너머&gt;, 2024, acrylic on translucent fabric, 225 x 150 cm
        </ImageInfo>
      </ImageWrapper>
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; // 전체 뷰포트 높이
  box-sizing: border-box;
  padding-top: 80px; // 헤더 높이 고려
  padding-bottom: 40px;
  overflow: hidden;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 75vw;            // 기존 90vw → 80vw로 더 작게
  max-width: 900px;      // 데스크탑 기준 상한선 설정
  max-height: calc(100vh - 120px);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  &:hover div,
  &:hover span {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  display: block;
`;

const Dim = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const ImageInfo = styled.span`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, 20px);
  color: #fff;
  font-size: 1rem;
  background: rgba(0, 0, 0, 0.6);
  padding: 8px 12px;
  border-radius: 8px;
  opacity: 0;
  transition: all 0.3s ease;
  white-space: pre-wrap;
  text-align: center;
`;