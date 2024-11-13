import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
  margin: 4rem;
`;

export const Card = styled.div<{$isAlreadyInBasket:boolean}>`

background-color: ${( {$isAlreadyInBasket} )=> $isAlreadyInBasket ? "#ddd" : "initial"  };
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  width: 200px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.05);
  }
`;

export const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 8px;
`;

export const Description = styled.p`
  font-size: 14px;
  margin-bottom: 12px;
`;

export const Factor = styled.p`
  font-size: 14px;
  color: #555;
`;
