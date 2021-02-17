import styled from "styled-components";

export const MainView = styled.div`
  margin-left: 10%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-right:0;
  position: relative;


  @media (max-width: 1800px) {
    margin-top: 10vh;
    margin-left: 0;
  

  }
  


`;
export const Main = styled.div`
  height: 100%;
  width: 100%;

`;

export const DarkOverlay = styled.div`
  height: 100%;
  width: 100%;
  background: #000;
  opacity: 0.5;
  position:fixed;
  z-index:5;

`;

export const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;

  @media (max-width: 1800px) {
    flex-direction: column;
  }
  
`;

export const Background = styled.div`
height: 100%;
width: 100%;
position: fixed;

background-image: url(${(props) => props.img});

background-size: auto;
opacity: 0.5;
z-index: -5;

`;