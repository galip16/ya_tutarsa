import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer = styled.nav`
  background-color: #282c34;
  padding: 10px 20px;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 15px;
`;

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    color: #61dafb;
  }

  &:active {
    color: #21a0f6;
  }
`;

export const Basket = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  span {
    font-size: 16px;
  }

  svg {
    width: 24px;
    height: 24px;
    fill: white;
  }
`;