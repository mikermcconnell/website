import React from "react";
import Banner from "../../components/Banner/Banner"
import Card from "../../components/Card/Card"
import { PageStyle } from "../shared.styles";

function Experience(props) {
    //change below:
    const cardVars = {
        title: "Mosaic Manufacturing",
        position: "Full Stack Developer",
        description: "At Mosaic, I am responsible for building software for an automated 3D printing system, Array.",
        bulletList: [
            "Owner of the software for the product, building front-end, UI/UX, back-end, database, communication, and testing",
            "Creating and architecting applications from scratch using OOP best practices",
            "Implementing new features, debugging and enhancing existing features",
            "Introducing and integrating new technologies, such as SQLite across the codebases",
            "Thorough testing with unit and integration tests",
            "Technologies used: Node.js, React/Redux, SQLite, MQTT, Jest"
        ],
        bottomLabel: "September 2020 - Present | Toronto, ON"
    }
    //chnage above

    return (
        <PageStyle ref={props.section}>
            <Banner section={"Experience"} />
            <Card {...cardVars}></Card>
        </PageStyle>



    );
}

export default Experience;