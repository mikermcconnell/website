import React from "react";
import { StyledComponent, Backgound } from "./HomePage.styles"
import headShot from "../../icons/headshot.jpg"
import TypeWriter from "../../components/TypeWriter/TypeWriter";
function HomePage(props) {
    return (
        <StyledComponent ref={props.section}>
            <Backgound img={headShot} />
            <TypeWriter />
        </StyledComponent>



    );
}

export default HomePage;
