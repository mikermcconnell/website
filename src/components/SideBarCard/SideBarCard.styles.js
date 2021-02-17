import styled from "styled-components";

export const StyledComponent = styled.div`
padding-left: 10%;
display: flex;
align-items: center;
flex-direction: row;
height: 4%;

&:hover {
  cursor: pointer;
  background-color: #415491;
}
`;

export const IconStyle = styled.div`
padding-right: 10%;

`;

export const Img = styled.img`
  height: 40px;
  weight: 40px;
  underlay-color: 'transparent';
`;
