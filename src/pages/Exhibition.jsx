import styled from 'styled-components';
import { ExhibitionSection } from '../components/ExhibitionSection';



export default function Exhibition() {
  return (
    <Wrapper>
      <h1 style={{ marginBottom: '40px' }}>EXHIBITIONS</h1>

      <ExhibitionSection
        year="2025"
        exhibitions={[
          {
            title: '이별의 능력',
            date: '04.25 - 05.11.2025',
            location: 'CHMBR, Seoul, South Korea',
            link: 'https://artlecture.com/article/3395',
            description: `방예은 작가는 삶과 사물, 감정과 기억이 끊임없이 변화하고 소멸해가는 세계가 가진 유한함과 그 안에 담긴 연약함에서 아름다움을 느끼는 사람이다. 붙잡을 수 없는 찰나와 같이 기록되지 않아 사라지는 감각들, 보이지 않아도 존재하는 본질적인 감각들을 포착한다. 반투명한 천 위에 투사된 빛과 색, 도시를 표류하며 감지한 감각들은 모두 덧없고 유약한 세계의 순간들을 건져 올리는 도구가 된다. 방예은의 시선은 무심코 스쳐 지나가는 풍경을 멈춰 세우고, 존재와 감각의 본질을 다시 묻는다.`,
            image: '/assets/images/sunset.png',
          },
        ]}
      />

      <ExhibitionSection
        year="2023"
        exhibitions={[
          {
            title: '잔상의 몸 만들기',
            date: '06.04.2023',
            location: 'ARTEWITH',
            link: 'https://www.artewith.com/c7cd98e3-f285-4d35-aa5c-d762b04d2435',
            description: `비산하는 순간`,
            image: '/assets/images/hop.png',
          },
        ]}
      />
    </Wrapper>
  );
}
const Wrapper = styled.main`
  padding: 140px 24px 60px;
  max-width: 1000px;
  margin: 0 auto;
`;