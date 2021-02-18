import styled, {css} from "styled-components";

export const StyledComponent = styled.div`
height: 28em;
width: 38em;
margin-bottom: 5%;
margin-left: 5%;
  background-color: white;
  box-shadow: 0px 2px 10px #7e7f85;
  border-radius: 5px;
  cursor: pointer;
`;

export const MainCover = styled.div`
height: 100%;
width: 100%;
display: flex;
  flex-direction: column;

`;

export const MainImage = styled.img`
width: 100%;
height: 70%;
object-fit:cover;
object-position:50% 50%;
${(props) =>
  props.project &&
  css`
  object-fit:fill;

  `}


`;

export const TinyImage = styled.img`
height: 1.5em;

`;

export const BottomBlock = styled.div`
height: 30%;
  display: flex;
  flex-direction: row;
  background-color: white;
  padding: 2em 2em 2em 2em;
  
`;

export const Text = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Details = styled.div`
width: 91%;
height: 91%;
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 5% 5% 5% 5%;

`;

export const FirstBlock = styled.div`
display: flex;
flex-direction: column;
height: 80%;
overflow-y: auto;
`;

export const SecondBlock = styled.div`
display: flex;
flex-direction: column;
`;

export const TitleBlock = styled.div`

display: flex;
flex-direction: row;
justify-content: space-between;

`;

export const MainBlock = styled.div`

font-size: 1.1em;
font-family: sans-serif;
display: flex;
flex-direction: column;

`;

export const Line = styled.div`
width:100%;
border-bottom: 2px solid #c8ccde;
`;

export const GeneralImage = styled.img`
height: 3.5em;
width: 4em;
justify-self: flex-end;
`;


