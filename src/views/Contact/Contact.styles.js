import styled from "styled-components";

export const ContactLayout = styled.div`
width: 80%;
margin-top: 5%;
margin-bottom: 5%;

display: flex;
flex-direction: column;
`;

export const Item = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding-bottom: 2em;
`;

export const IconStyle = styled.div`
height: 4em;
width: 4em;
padding-right: 2em;
`;

export const LinkText = styled.div`

font-size: 1.5em;
  
color: #1e5c6b;

font-family: sans-serif;
cursor: pointer;

&:hover {
    text-decoration: underline;
  }
`;

