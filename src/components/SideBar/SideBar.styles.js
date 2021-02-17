import styled, {css} from "styled-components";

export const VerticalMenu = styled.div`

  width: 10%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  background-color: #282a40;
  position: fixed;
  ${(props) =>
    props.popup &&
    css`
    margin-top: 10vh;
    z-index: 10;
    width: 15rem;
    `}


`;


export const HorizontalLayout = styled.div`
width: 100%;
height: 10vh;

margin-top: 0;
position: fixed;
z-index: 10;
padding-left: 5%;

display: flex;
flex-direction: row;
align-items: center;
background-color: #282a40;
cursor: pointer;
`;

export const VerticalMenuLayout = styled.div`
width: 10%;
height: 100vh;
display: flex;
flex-direction: column;

background-color: #282a40;
position: fixed;

`;