import React from "react";
import Banner from "../../components/Banner/Banner"
import GenericCard  from "../../components/Card/GenericCard"
import { PageStyle, CardLayout } from "../shared.styles";

function Education(props) {
    const cardVars1 = {
        title: "Web Development Diploma",
        location: "Lighthouse Labs",
        date: "August 2020",
        details: [
            "Full stack development",
            "OOP and MVC paradigms",
            "Computer science fundamentals",
            "Software architecture",
        ]
    }
    const cardVars2 = {
        title: "Bachelor of Applied Science, Civil Engineering",
        location: "University of Waterloo ",
        date: "April 2020",
        details: [
            "GPA: 4.0/4.33",
            "Machine Learning and Computer Vision",
            "Mathematical computations using MATLAB",
            "Other general analytical, problem-solving, and design courses in applied physics, math, and calculus",
            "Presentation and writing skills",
        ]
    }


    return (
        <PageStyle ref={props.section}>
            <Banner section={"Education"} />
            <CardLayout>
            <GenericCard {...cardVars1}/>
            <GenericCard {...cardVars2}/>

            </CardLayout>
        </PageStyle>


    );
}

export default Education;