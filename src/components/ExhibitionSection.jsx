import styled from 'styled-components';
import { ExhibitionItem } from './ExhibitionItem';

export const ExhibitionSection = ({ year, exhibitions }) => {
    return (
      <Section>
        <YearTitle>{year}년</YearTitle>
        {exhibitions.map((exh, index) => (
          <ExhibitionItem key={index} {...exh} />
        ))}
      </Section>
    );
  };
const Section = styled.section`
  margin-bottom: 64px;
`;

const YearTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 24px;
`;


