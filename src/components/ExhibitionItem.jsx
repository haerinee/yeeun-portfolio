import styled from 'styled-components';

export const ExhibitionItem = ({ title, date, location, link, description, image }) => {
  return (
    <Item>
      <Img src={image} alt={title} />
      <Text>
        <Title>{title}</Title>
        <p>{date}</p>
        <p>{location}</p>
        {link && (
          <p>
            <a href={link} target="_blank" rel="noopener noreferrer">
              {link}
            </a>
          </p>
        )}
        <p>{description}</p>
      </Text>
    </Item>
  );
};

const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 32px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
  }
`;

const Img = styled.img`
  width: 100%;
  max-width: 300px;
  object-fit: cover;
`;

const Text = styled.div`
  flex: 1;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.2rem;
`;
