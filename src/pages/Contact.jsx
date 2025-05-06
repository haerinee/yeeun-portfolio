import styled from 'styled-components';


export default function Contact() {
    return (
      <Container>
        <Title>CONTACT</Title>
        <ContactLine>
          <a href="https://www.instagram.com/yeeun_bang" target="_blank" rel="noopener noreferrer">
            @yeeun_bang
          </a>
        </ContactLine>
        <ContactLine>
          <a href="mailto:yeeun.bang@example.com">yeeun.bang@example.com</a>
        </ContactLine>
      </Container>
    );
  }
  
const Container = styled.main`
  padding: 140px 24px;
  text-align: center;
  min-height: 60vh;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const ContactLine = styled.p`
  font-size: 1.2rem;
  margin: 16px 0;

  a {
    color: #007ac8;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

