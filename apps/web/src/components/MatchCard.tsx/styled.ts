import styled from "styled-components";

export const CardWrapper = styled.div`

border: 2px solid red;
padding: 1rem;
width: 12rem;
text-align: center;
cursor: pointer;

&:hover{
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};

}

`;