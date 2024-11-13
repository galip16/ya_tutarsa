import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';



const IconContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 5px;
  cursor: pointer;
  z-index: 1000;
`;

const Icon = styled.div`
  font-size: 2rem;
`;

const BasketIcon: React.FC = () => (
  <IconContainer>
    <Link to="/basket">
      <Icon>🛒</Icon> 
    </Link>
  </IconContainer>
  
);

export default BasketIcon;
