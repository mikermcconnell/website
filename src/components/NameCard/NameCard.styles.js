import styled, { css } from "styled-components";

export const StyledComponent = styled.div`
height: 20%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding-left: 10%;

&:hover {
    cursor: pointer;
    
  }

`;

export const HorizontalLayout = styled.div`
display: flex;
flex-direction: column;
width: 100%;
text-align: center;

&:hover {
    cursor: pointer;
    
  }

`;

