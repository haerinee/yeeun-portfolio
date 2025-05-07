import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MobileMenu } from "./MobileMenu";

import SvgMore from "../assets/svg/More";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderWrapper>
      <Logo to="/">Yeeun Bang</Logo>
      <Nav>
        {["Works", "Drawings", "Exhibitions", "CV", "contact"].map((item) => (
          <MenuItem key={item} to={`/${item}`}>
            <div style={{ padding: "4px 8px" }}>{item}</div>
          </MenuItem>
        ))}
      </Nav>
      <MenuButton onClick={() => setIsOpen(true)}>
        <SvgMore width={20} height={20} />
      </MenuButton>
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
  font-family: "Space Mono", monospace;
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
const MenuItem = styled(Link)`
  padding: 0.3rem 0.5rem; /* py-2 px-4 */
  border-radius: 9999px; /* rounded-full */
  text-align: center;
  font-weight: 600; /* font-semibold */
  letter-spacing: -0.015em; /* tracking-tight 대체 */
  color: #1e293b; /* slate-800 */
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #f1f5f9; /* gray-100 */
  }
`;
