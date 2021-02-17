import styled, { css } from "styled-components";

export const StyledComponent = styled.div`
height: 100vh;
width: 100%;
@media (max-width: 1800px) {
    width: 100%;
  }
`;

export const Backgound = styled.div`
height: 100vh;
width: 100%;
position: absolute;
background-image: url(${(props) => props.img});
background-size: cover;
opacity: 0.8;
z-index: -1;

@media (max-width: 1800px) {
    width: 100%;
  }
`;

