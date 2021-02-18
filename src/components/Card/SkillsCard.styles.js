import styled from "styled-components";

export const StyledComponent = styled.div`
padding: 2em 2em 2em 2em;
background-color: white;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 10px #7e7f85;
  border-radius: 8px;

`;
export const TitleBlock = styled.div`


`;
export const Image = styled.img`
height: 6em;
`;

export const Line = styled.div`
margin: 1em 0em 0em 0em;
border-bottom: 2px solid #c8ccde;
`;



export const ImageBlock = styled.div`
padding: 1em 2em 0 2em;
height: 10em;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;

`;


export const MainBlock = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;

@media (max-width: 750px) {
  justify-content: center;

}

`;
