import styled, { css } from "styled-components";

export const StyledComponent = styled.div`
padding-top: 1rem;
background-color: white;
  width: 75%;
  margin-top: 5%;
  margin-bottom: 5%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 10px #7e7f85;
  border-radius: 8px;

`;
export const TitleBlock = styled.div`
padding: 0 2em 0 2rem;
display: flex;
flex-direction: row;
justify-content: space-between;

align-items: center;
justify-content: space-between;

`;

export const OneBlock = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 0 2em 0 2rem;

`;
export const PositionStyling = styled.div`
padding: 1em 2em 0 2rem;


`;
export const Logo = styled.img`
height: 5rem;
width: 12rem;
`;

export const Line = styled.div`
margin: 1em 1.5em 0em 1.5rem;
border-bottom: 2px solid #c8ccde;
`;



export const SubTitle = styled.div`
padding: 1em 2em 0 2rem;
font-size: 1.3rem;
color: #545454;
font-style: italic;
font-family: sans-serif;
`;


export const MainBlock = styled.div`
padding: 0 2em 0 2rem;

font-size: 1.5rem;
font-family: sans-serif;

display: flex;
flex-direction: column;
`;
export const BottomBlock = styled.div`
padding: 1em 2em 1em 2rem;
color: #545454;
display: flex;
flex-direction: row;
font-size: 1.2rem;
font-family: sans-serif;
background-color: #e6edf5; 

align-items: center;
justify-content: space-between;
`;