// src/components/Navbar.tsx
import React from "react";
import { Basket, Logo, NavbarContainer, NavLinks, NavLink } from "./styled";
import BasketIcon from "../Basket/BasketIcon";
import { getBetsFromLocalStorage } from "../../utils/storage";



const Navbar: React.FC = () => {

  const basketItemCount = getBetsFromLocalStorage().length;


  return (
    <NavbarContainer>
      <Logo>MyApp</Logo>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/results"> Results</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </NavLinks>
      <Basket>
        <BasketIcon/>
        {basketItemCount > 0 && <span>{basketItemCount}</span>}
      </Basket>
    </NavbarContainer>
  );
};

export default Navbar;
