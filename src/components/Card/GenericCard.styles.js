import styled from "styled-components";

export const StyledComponent = styled.div`
width: 40%;
padding: 2em 2em 2em 2em;
margin-bottom: 5%;

background-color: white;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 10px #7e7f85;
  border-radius: 8px;

  @media (max-width: 1800px) {
    width: 100%;

  }

`;

export const TitleBlock = styled.div`
padding-bottom: 0.6em;
`;

export const MainBlock = styled.div`
display: flex;
flex-direction: row;
font-size: 1.1em;
font-family: sans-serif;
`;
