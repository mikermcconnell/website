import styled from "styled-components";

export const StyledComponent = styled.div`
height: 35rem;
width: 42rem;
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
`;

export const TinyImage = styled.img`
height: 1.5rem;

`;

export const BottomBlock = styled.div`
height: 30%;
  display: flex;
  flex-direction: row;
  background-color: white;
  padding: 2em 2em 2em 2rem;
  
`;

export const Text = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Details = styled.div`
height: 92%;
width: 91%;
display: flex;
flex-direction: column;
padding: 2em 2em 1em 2rem;
justify-content: space-between;

`;

export const FirstBlock = styled.div`
display: flex;
flex-direction: column;
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

font-size: 1.3rem;
font-family: sans-serif;

display: flex;
flex-direction: column;
`;

export const Line = styled.div`
margin-left: -2rem;
margin-right: -2rem;
margin-bottom: 1rem;
justify-self: flex-end;
border-bottom: 2px solid #c8ccde;
`;

export const GeneralImage = styled.img`
height: 3.5rem;
width: 4rem;
justify-self: flex-end;
`;


