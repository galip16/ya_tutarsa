import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const IconContainer = styled.div`
  cursor: pointer;
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
