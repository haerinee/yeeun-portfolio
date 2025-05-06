import styled from 'styled-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MobileMenu } from './MobileMenu';



export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderWrapper>
      <Logo to="/">Yeeun Bang</Logo>
      <Nav>
        {['Works', 'Drawings', 'Exhibitions', 'CV', 'contact'].map((item) => (
          <Link key={item} to={`/${item}`}><div style={{padding: '4px 8px'}}>{item}</div></Link>
        ))}
      </Nav>
      <MenuButton onClick={() => setIsOpen(true)}>&#9776;</MenuButton>
      {isOpen && <MobileMenu closeMenu={() => setIsOpen(false)} />}
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 16px;
  border-bottom: 1px solid #d2d8d4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  z-index: 1000;
`;

const Logo = styled(Link)`
  font-family: 'Space Mono', monospace;
  font-size: 1.1rem;
  font-weight: bold;
`;

const Nav = styled.nav`
  display: flex;
  

  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  font-size: 1.6rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;