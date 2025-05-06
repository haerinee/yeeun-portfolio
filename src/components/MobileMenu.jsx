import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MobileMenu = ({ closeMenu }) => {
    const links = ['Works', 'Drawings', 'Exhibitions', 'CV', 'contact'];
  
    return (
      <Overlay>
        <CloseButton onClick={closeMenu}>✕</CloseButton>
        {links.map((item) => (
          <Link key={item} to={`/${item}`} onClick={closeMenu} style={{ margin: '16px', fontSize: '1.2rem' }}>
            {item}
          </Link>
        ))}
      </Overlay>
    );
  };

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 2rem;
  background: none;
  color: white;
  border: none;
  cursor: pointer;
`;

