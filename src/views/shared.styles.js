import styled, { css } from "styled-components";

export const CardText = styled.div`
${(props) =>
        (props.size) &&
        css`
        
    font-size: ${(props) => (props.size*0.75)}em;
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



font-family: sans-serif;

`;

export const PageStyle = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;

`;

export const CardLayout  = styled.div`
height: 100%;
width: 75%;
margin-top: 5%;
display: flex;
flex-direction: row;
justify-content: space-around;

flex-wrap: wrap;
`;



