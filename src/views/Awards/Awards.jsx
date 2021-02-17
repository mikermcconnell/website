import React from "react";
import Banner from "../../components/Banner/Banner"
import GenericCard from "../../components/Card/GenericCard"
import { PageStyle, CardLayout  } from "../shared.styles";

function Awards(props) {
    const cardVars1 = {
        title: "1st Place Capstone Project Award",
        location: "University of Waterloo ",
        date: "July 2020",
        details: [
            "My fourth year design team won first place out of 30 teams for innovative design."
        ]
    }
    const cardVars2 = {
        title: "Dean's Honours List",
        location: "University of Waterloo ",
        date: "April 2020",
        details: [
            "Graduated on Dean's Honour's List (top 10% of class)"
        ]
    }
    const cardVars3 = {
        title: "Place Holder",
        location: "Somewhere over the rainbow",
        date: "July 2020",
        details: [
            "Inset text here"
        ]
    }

    return (
        <PageStyle ref={props.section}>
            <Banner section={"Awards"} />
            <CardLayout>
            <GenericCard {...cardVars1}/>
            <GenericCard {...cardVars2}/>
            <GenericCard {...cardVars3}/>
            <GenericCard {...cardVars3}/>

            </CardLayout>
        </PageStyle>


    );
}

export default Awards;