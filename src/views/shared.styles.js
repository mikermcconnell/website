import styled, { css } from "styled-components";

export const CardText = styled.div`
${(props) =>
        (props.size) &&
        css`
        
    font-size: ${(props) => props.size}rem;
    `}
    ${(props) =>
        (props.color) &&
        css`
        
    color: ${(props) => props.color};
    `}
    ${(props) =>
        (props.italics) &&
        css`
        
        font-style: italic;
    `}

text-transform: capitalize;


font-family: sans-serif;

`;

export const PageStyle = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;

@media (max-width: 1800px) {
    width: 100%;
  }

`;

export const CardLayout  = styled.div`
height: 100%;
width: 75%;
margin-top: 5%;
display: flex;
flex-direction: row;
justify-content: space-around;
align-content: space-around;

flex-wrap: wrap;
`;



